import request from './request';
import {GET_All_ADDRESS,GET_DAFAULT_ADDRESS,ADD_ADDRESS,EDIT_ADDRESS,DELETE_ADDRESS } from './api_constants';

const shopId = 2;

function getAllAddress(mid) {
   const data = {}
   const url = GET_All_ADDRESS + "/" +  mid
   return request({ url: url, method: 'GET', data });
}

function getDefaultAddress(mid) {
   const data = {}
   const url = GET_DAFAULT_ADDRESS + "/" +  mid
   return request({ url: url, method: 'GET', data });
}

// address  地址对象
function addAddress(address={}){
   return request({ url: ADD_ADDRESS, method: 'GET', address});
}

// address  地址对象
function editAddress(address={}){
   return request({ url: EDIT_ADDRESS, method: 'PUT', address});
}

function deleteAddress(mid){
   const data = {}
   let  url= DELETE_ADDRESS+"/"+mid
   return request({ mid: url, method: 'DELETE', data});
}

export default {
  getAllAddress,
  getDefaultAddress,
  addAddress,
  editAddress,
  deleteAddress
};
