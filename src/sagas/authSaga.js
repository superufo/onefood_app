import { call, put, takeLatest } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';


import Auth from '../service/login';

function* loginTask(action) {
  try {
    yield put({
      type: 'AUTH_LOGIN_LOADING',
    });
    const { payload } = action;

    const res = yield call(Auth.doLogin, payload.email, payload.password);


    console.log();
    if (res.status === 200) {
      yield put({
        type: 'AUTH_LOGIN_SUCCESS',
        payload: res.data,
      });
    } else {
      yield put({
        type: 'AUTH_LOGIN_ERROR',
        payload: res.data,
      });
    }
  } catch (e) {
    console.log(e);
    const payload = typeof e === 'string' ? { message: e } : e.data;
    yield put({
      type: 'AUTH_LOGIN_ERROR',
      payload,
    });
  }
}

function* registerTask(action) {
  try {
    yield put({
      type: 'AUTH_REGISTER_LOADING',
    });

    const { payload } = action;

    const res = yield call(Auth.doRegister, payload.email, payload.password);

    if (res.status === 200) {
      yield put({
        type: 'AUTH_REGISTER_SUCCESS',
        payload: res.data,
      });
    } else {
      yield put({
        type: 'AUTH_REGISTER_ERROR',
        payload: res.data,
      });
    }
  } catch (e) {
    console.log(e);
    const payload = typeof e === 'string' ? { message: e } : e.data;
    yield put({
      type: 'AUTH_REGISTER_ERROR',
      payload,
    });
  }
}

function* logoutTask() {
  try {
    storage.removeItem('authToken');
    yield put({
      type: 'AUTH_LOGOUT_RESET',
    });
  } catch (e) {
    yield put({
      type: 'AUTH_LOGOUT_RESET',
    });
  }
}

function* loginCheck(action){
    const { payload } = action;
    console.log("loginCheck,payload:",payload);
    try {
        yield put({
          type: 'AUTH_INPUT_CHECK',
          payload,
        });
      } catch (e) {
        yield put({
          type: 'AUTH_INPUT_CHECK',
          payload,
        });
      }
}

// takeLatest 抛弃前面的正在执行的调用执行最后一个调用    takeEvery 不抛弃前面的正在执行的调用 挨个执行  主动不停的监听
// take 被动的监听一次 监听到后 主动执行 put 发起一次dispatch
//take方法类似于一次性使用得所以经常和while搭配，可以保持一直监听得状态，但是又可以有效的控制流程
// takeLatest 监听action AUTH_LOGIN  然后发起一个dispatch, 改变stat ,然后父组件(容器组件)同步stat到子组件(UI组件)props
function* authSaga() {
  yield takeLatest('AUTH_INPUT', loginCheck);

  yield takeLatest('AUTH_LOGIN', loginTask);
  yield takeLatest('AUTH_REGISTER', registerTask);
  yield takeLatest('AUTH_LOGOUT', logoutTask);
}

export default authSaga;
