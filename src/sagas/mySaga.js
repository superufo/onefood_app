import { call, put, takeLatest } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';
import My from '../service/my';
import AsyncStorage from '@react-native-community/async-storage';

const addressItemsSelector = state => state.my.address || [];

function* getAllAddress(action){
    try {
        const { payload } = action;
        const res = yield call(My.getAllAddress,payload.mid);

        if (res.data.status === 0 || res.status === 200) {
          if (res.data.data.content!=null)
            AsyncStorage.setItem('address', JSON.stringify(res.data.data.content));

          yield put({
            type: 'ADRESS_SUCCESS',
            payload: res.data.data.content,
          });
        } else {
          yield put({
            type: 'ADRESS_ERROR',
            payload: res.data.message,
          });
        }
      } catch (e) {
        console.log(e);
        const payload = typeof e === 'string' ? { message: e } : e.data;
        yield put({
          type: 'ADRESS_ERROR',
          payload,
        });
      }
}

function* getDefaultAddress(action){
    try {
        const { payload } = action;
        const res = yield call(My.getDefaultAddress,payload.mid);

        if (res.data.status === 0 || res.status === 200) {
          if (res.data.data!=null)
             AsyncStorage.setItem('defaultAddress', JSON.stringify(res.data.data));

          yield put({
            type: 'DEFAULT_ADRESS_SUCCESS',
            payload: res.data.data,
          });
        } else {
          yield put({
            type: 'DEFAULT_ADRESS_ERROR',
            payload: res.data.message,
          });
        }
      } catch (e) {
        console.log(e);
        const payload = typeof e === 'string' ? { message: e } : e.data;
        yield put({
          type: 'DEFAULT_ADRESS_ERROR',
          payload,
        });
      }
}

function* AddAddress(action){
    try {
        const currentAddress = yield select(addressItemsSelector);
        const { payload } = action;
        const res = yield call(My.addAddress,payload);

        const newAddress = currentAddress.push(res.data.data)

        if (res.data.status === 0 || res.status === 200) {
          AsyncStorage.setItem('address', JSON.stringify(newAddress));

          yield put({
            type: 'ADD_ADRESS_SUCCESS',
            payload: newAddress,
          });
        } else {
          yield put({
            type: 'ADD_ADRESS_ERROR',
            payload: res.data.message,
          });
        }
      } catch (e) {
        console.log(e);
        const payload = typeof e === 'string' ? { message: e } : e.data;
        yield put({
          type: 'ADD_ADRESS_ERROR',
          payload,
        });
      }
}

function* EditAddress(action){
    try {
        const { payload } = action;
        const res = yield call(My.editAddress,payload);

        if (res.data.status === 0 || res.status === 200) {
          yield put({
            type: 'EDIT_ADRESS_SUCCESS',
            payload: res.data.data,
          });
        } else {
          yield put({
            type: 'EDIT_ADRESS_ERROR',
            payload: res.data.message,
          });
        }
      } catch (e) {
        console.log(e);
        const payload = typeof e === 'string' ? { message: e } : e.data;
        yield put({
          type: 'EDIT_ADRESS_ERROR',
          payload,
        });
      }
}

function* deleteAddress(action){
    try {
        const { payload } = action;
        const res = yield call(My.getDefaultAddress,payload.mid);

        if (res.data.status === 0 || res.status === 200) {
          const newAddress = currentCart.filter(obj => obj.id !== action.payload);

          AsyncStorage.setItem('address', JSON.stringify(newAddress));
          yield put({
            type: 'DELETE_ADRESS_SUCCESS',
            payload: newAddress,
          });
        } else {
          yield put({
            type: 'DELETE_ADRESS_ERROR',
            payload: res.data.message,
          });
        }
      } catch (e) {
        console.log(e);
        const payload = typeof e === 'string' ? { message: e } : e.data;
        yield put({
          type: 'DELETE_ADRESS_ERROR',
          payload,
        });
      }
}


function* mySaga() {
  yield takeLatest('GET_ADDRESS_ALL', getAllAddress);
  yield takeLatest('GET_ADDRESS_DEFAULT', getDefaultAddress);

  yield takeLatest('ADDRESS_ADD', AddAddress);
  yield takeLatest('ADDRESS_EDIT', EditAddress);
  yield takeLatest('ADDRESS_DELETE', deleteAddress);
}

export default mySaga;