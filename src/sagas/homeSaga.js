import { call, put, select, takeLatest } from 'redux-saga/effects';
import {getAdvList,getGoodsList,getGoodsCatagroryList} from '../service/home';

const authTokenSelector = state => state.auth.loginMessage.token;

function* getGoods(action) {
    try {
        const { payload } = action;

        const authToken = yield select(authTokenSelector);

        const res = yield call(getGoods, goodsName,isFeature,isHot,isNew,{
          Authorization: `Bearer ${authToken}`,
        });

        if (res.status === 0) {
            yield put({
              type: 'FETCH_GOODS_SUCCESS',
              payload: res.data.content,
            });
        } else {
          yield put({
            type: 'FETCH_GOODS_ERROR',
            payload: res.data.message,
          });
        }
    } catch (e) {
        yield put({
          type: 'FETCH_GOODS_ERROR',
          payload: e.data,
        });
    }
}

function* getGoodsCatagrory(action) {
    try {
        const { payload } = action;

        const authToken = yield select(authTokenSelector);

        const res = yield call(getGoodsCatagrory, {
          Authorization: `Bearer ${authToken}`,
        });

        if (res.status === 0) {
            yield put({
              type: 'FETCH_GOODS_CATAGRORY_SUCCESS',
              payload: res.data.content,
            });
        } else {
          yield put({
            type: 'FETCH_GOODS_CATAGRORY_ERROR',
            payload: res.data.message,
          });
        }
    } catch (e) {
        yield put({
          type: 'FETCH_GOODS_CATAGRORY_ERROR',
          payload: e.data,
        });
    }
}

function* getAdv(action) {
    try {
        const { payload } = action;

        const authToken = yield select(authTokenSelector);

        const res = yield call(getAdv, category,{
          Authorization: `Bearer ${authToken}`,
        });

        if (res.status === 0) {
            yield put({
              type: 'FETCH_ADV_SUCCESS',
              payload: res.data.content,
            });
        } else {
          yield put({
            type: 'FETCH_ADV_ERROR',
            payload: res.data.message,
          });
        }
    } catch (e) {
        yield put({
          type: 'FETCH_ADV_ERROR',
          payload: e.data,
        });
    }
}


function* homeSaga() {
  yield takeLatest('GET_ADV', getAdv);
  yield takeLatest('GET_GOODS', getGoods);
  yield takeLatest('GET_GOODS_CATAGRORY', getGoodsCatagrory);
}

export default homeSaga;