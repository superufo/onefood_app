import request from './request';
import { GET_GOODS, GET_ADV,GET_GOODS_CATAGRORY } from './api_constants';

const shopId = 2;

function getGoodsList(goodsName=null,isFeature=null,isHot=null,isNew=null,headers = null) {
  const data = {
    goodsName,
    isFeature,
    isHot,
    isNew,
    shopId:shopId
  };

  console.log("service getGoodsList:",GET_GOODS,"data:",data,"headers:",headers)
  return request({ url: GET_GOODS, method: 'GET', data,headers });
}

function getAdvList(category=null,headers = null) {
  const data = {
    category,
    shopId:shopId
  };
  return request({ url: GET_ADV, method: 'GET', data });
}

//shopId:shopId
function getGoodsCatagroryList(headers = null) {
  const data = {
    //shopId:shopId
  };
  return request({ url: GET_GOODS_CATAGRORY, method: 'GET', headers });
}

export default {
  getAdvList,
  getGoodsList,
  getGoodsCatagroryList,
};
