import { call, put, select, takeLatest } from 'redux-saga/effects';
import API from '../service/home';

const authTokenSelector = state => state.auth.loginMessage.token;

function* getGoods(action) {
    try {
        const { payload } = action;

        const authToken = yield select(authTokenSelector);

        let page = 0
        if (typeof payload.page != undefined || typeof payload.page !=null ){
            page = payload.page
        }

        let size = 2
        if ( typeof payload.size  != undefined  ||  payload.size != null  ){
            size = payload.size
        }

        let sort = 'id,desc'
        if ( typeof payload.sort  != undefined  ||  payload.sort != null  ){
            sort = payload.sort
        }

        const res = yield call(API.getGoodsList,payload.catagrory,payload.goodsName,payload.isFeature,payload.isHot,payload.isNew,page,size,sort,{
          Authorization: `Bearer ${authToken}`,
        });

        //console.log("res.data.data.content:",res.data.data.content)
        if (res.data.status === 0) {
            yield put({
              type: 'FETCH_GOODS_SUCCESS',
              payload: {response:res.data.data.content,...payload}
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
        const { payload } = action

        const authToken = yield select(authTokenSelector)

        const res = yield call(API.getGoodsCatagroryList, {
          Authorization: `Bearer ${authToken}`,
        })

        if (res.data.status === 0) {
            yield put({
              type: 'FETCH_GOODS_CATAGRORY_SUCCESS',
              payload: res.data.data.content,
            });
        } else {
          yield put({
            type: 'FETCH_GOODS_CATAGRORY_ERROR',
            payload: res.data.message,
          });
        }
    } catch (e) {
        console.log("home saga exception:",e)
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

        const res = yield call(API.getAdvList, payload.category,{
          Authorization: `Bearer ${authToken}`,
        });

        //console.log("res.data.data.content:",res.data.data.content)
        if (res.data.status === 0) {
            yield put({
              type: 'FETCH_ADV_SUCCESS',
              payload: res.data.data.content,
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