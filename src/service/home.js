import request from './request';
import { GET_GOODS_URL, GET_ADV_URL,GET_GOODS_CATAGRORY_URL,GET_GOODSBYID_URL } from './api_constants';

const shopId = 2;

function getGoodsList(catagrory=null,goodsName=null,isFeature=null,isHot=null,isNew=null,page=0,size=10,sort='id,desc') {
  //todo add catagrory filter
  const data = {
    shopId:shopId
  };

  let query = '?shopId='+ shopId +'&page=' + page + '&size=' + size +  '&sort=' + sort
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
  return request({ url: SUBMIT_URL, method: 'GET', data});
}

function getGoodsInfo(id=null) {
  query = '?shopId='+ shopId
  if (id!=null){
      query +=  '&id=' + id
  }

  const data = {
      shopId:shopId
  };

  let SUBMIT_URL = GET_GOODS_URL + encodeURI(query)
  return request({ url: SUBMIT_URL, method: 'GET', data});
}

function getAdvList(category=null,headers = {}) {
  const data = {
    category,
    shopId:shopId
  };

  return request({ url: GET_ADV_URL, method: 'GET', data});
}

//shopId:shopId
function getGoodsCatagroryList() {
  const data = {
    //shopId:shopId
  };

  return request({ url: GET_GOODS_CATAGRORY_URL, method: 'GET', data});
}

export default {
  getGoodsList,
  getAdvList,
  getGoodsCatagroryList,
  getGoodsInfo
};