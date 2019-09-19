//goodsList 首页
const initialState = {
  catagroryFullList: [],
  advList:[],
  goodsList:[],
  searchList:[],
  catagroryList:[],
  homeError: null,
};

export default (state = initialState, { type, payload }) => {
  //console.log("home.js type:",type,"payload:",payload)
  switch (type) {
    case 'FETCH_GOODS_CATAGRORY_SUCCESS':
      return {
        ...state,
        catagroryFullList: payload,
        homeError: null,
      };
    case 'FETCH_ADV_SUCCESS':
      return {
          ...state,
          advList: payload,
          homeError: null,
      };
    case 'FETCH_GOODS_SUCCESS':
           if  ( typeof payload.goodsName!=undefined &&  payload.goodsName!=null ){
               return {
                    ...state,
                    searchList: payload.response,
                    homeError: null,
               };
           }else if  ( typeof payload.catagrory!=undefined &&  payload.catagrory!=null ){
              //let map = new Map();
              //let key = payload.catagrory+"_"+payload.size
              //map.set(key,payload.response);
              return {
                    ...state,
                    catagroryList:payload.response,
                    homeError: null,
               };
           }
          return {
              ...state,
              goodsList: payload.response,
              homeError: null,
          };
    case 'FETCH_ADV_ERROR':
    case 'FETCH_GOODS_ERROR':
    case 'FETCH_GOODS_CATAGRORY_ERROR':
      return {
        ...state,
        homeError: payload,
      };
    default:
      return state;
  }
};
