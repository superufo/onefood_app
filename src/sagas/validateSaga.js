import { call, put, takeLatest } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';

import DeviceStorage from '../utils/DeviceStorage';
import {hex_md5} from '../utils/Md5';

function* choiceVdType(action){
    const { payload } = action;
    console.log("loginCheck,payload:",payload);
    try {
        yield put({
          type: 'GET_SEND_TYPE',
          payload,
        });
      } catch (e) {
        yield put({
          type: 'GET_SEND_TYPE',
          payload,
        });
      }
}

// takeLatest 抛弃前面的正在执行的调用执行最后一个调用    takeEvery 不抛弃前面的正在执行的调用 挨个执行  主动不停的监听
// take 被动的监听一次 监听到后 主动执行 put 发起一次dispatch
// take方法类似于一次性使用得所以经常和while搭配，可以保持一直监听得状态，但是又可以有效的控制流程
// takeLatest 监听action AUTH_LOGIN  然后发起一个dispatch, 改变stat ,然后父组件(容器组件)同步stat到子组件(UI组件)props
function* validateSaga() {
  yield takeLatest('CHOICE_VALIDATE_TYPE', choiceVdType);
}

export default validateSaga;
