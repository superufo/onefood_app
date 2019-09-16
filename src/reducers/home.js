const initialState = {
  catagroryFullList: [],
  advList:[],
  goodsList:[],
  homeError: null,
};

export default (state = initialState, { type, payload }) => {
  console.log("home.js type:",type,"payload:",payload)
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
          return {
              ...state,
              goodsList: payload,
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
