import request from './request';
import { LOGIN_URL, REGISTER_URL,GET_SHOP_URL } from './api_constants';

const shopId = 2;

function doLogin(email, password,loginType) {
  const data = {
    useremail:email,
    password,
    loginType,
    shopId:shopId
  };
  return request({ url: LOGIN_URL, method: 'POST', data });
}

//{"account":"test000081", "useremail":"liu0214065121@qq.com","mobile":"13549748857","password":"123456","firstname":"jim","lastname":"green","shopId":"2"}
function doRegister(account, useremail,mobile,password,firstname,lastname) {
  const data = {
    account,
    useremail,
    mobile,
    password,
    firstname,
    lastname,
    shopId:shopId
  };
  return request({ url: REGISTER_URL, method: 'POST', data });
}

function getShop() {
   const data = {}
   const url = GET_SHOP_URL + "/" +  shopId
   return request({ url: url, method: 'GET', data });
}


export default {
  doLogin,
  doRegister,
  getShop
};
