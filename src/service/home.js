import request from './request';
import { GET_GOODS_URL, GET_ADV_URL,GET_GOODS_CATAGRORY_URL } from './api_constants';

const shopId = 2;

function getGoodsList(catagrory=null,goodsName=null,isFeature=null,isHot=null,isNew=null,page=0,size=10,sort='id,desc',headers = {}) {
  //todo add catagrory filter
  const data = {
    shopId:shopId
  };

  let query = '?page=' + page + '&size=' + size +  '&sort=' + sort
  if (catagrory!=null){
       query +=  '&catagroryId=' + catagrory
  }

  if (goodsName!=null){
       query +=  '&ename=' + goodsName
  }

  if (isFeature!=null){
       query +=  '&isFeature=' + isFeature
  }

  if (isHot!=null){
       query +=  '&isHot=' + isHot
  }

  if (isNew!=null){
      query +=  '&isNew=' + isNew
  }

  let SUBMIT_URL = GET_GOODS_URL + encodeURI(query)
  console.log("service getGoodsList:",SUBMIT_URL,"data:",data,"headers:",headers)
  return request({ url: SUBMIT_URL, method: 'GET', data,headers });
}

function getAdvList(category=null,headers = {}) {
  const data = {
    category,
    shopId:shopId
  };
  console.log("service getAdvList:",GET_ADV_URL,"data:",data,"headers:",headers)
  return request({ url: GET_ADV_URL, method: 'GET', data,headers});
}

//shopId:shopId
function getGoodsCatagroryList(headers = {}) {
  const data = {
    //shopId:shopId
  };
  console.log("service getGoodsCatagroryList:",GET_GOODS_CATAGRORY_URL,"data:",data,"headers:",headers)
  return request({ url: GET_GOODS_CATAGRORY_URL, method: 'GET', data, headers });
}

export default {
  getGoodsList,
  getAdvList,
  getGoodsCatagroryList
};