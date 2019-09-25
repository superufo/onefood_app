export const authLogin = (email, password,loginType) => ({
  type: 'AUTH_LOGIN',
  payload: {
    email,
    password,
    loginType
  },
});

//被 Saga 的  take 监听到 执行新的dispatch,取数据或者传递数据
export const loginCheck = (loginError, registerError) => ({
  type: 'AUTH_INPUT',
  payload: {
    loginError: loginError,
    registerError: registerError,
  },
});

export const authRegister = (account,useremail,mobile,password,firstname,lastname) => ({
  type: 'AUTH_REGISTER',
  payload: {
      account,
      useremail,
      mobile,
      password,
      firstname,
      lastname,
  },
});

export const authLogout = () => ({
  type: 'AUTH_LOGOUT',
});

export const fetchCuisineTypes = () => ({
  type: 'FETCH_CUISINE_TYPES',
});

export const fetchRestaurant = (id = null) => ({
  type: 'FETCH_RESTAURANT',
  payload: {
    id,
  },
});

export const getShop = () => ({
  type: 'GET_SHOP',
});

export const fetchRestaurantByType = (type = null, isFromCuisine = false) => ({
  type: 'FETCH_RESTAURANT_TYPE',
  payload: {
    type,
    isFromCuisine,
  },
});

export const fetchOrders = () => ({
  type: 'FETCH_ORDERS',
});

export const doCancelOrder = () => ({
  type: 'CANCEL_ORDER',
});

export const createOrder = (items, total) => ({
  type: 'CREATE_ORDER',
  payload: {
    items,
    total,
  },
});

export const choiceVd = (useremail, mobile,choice) => ({
  type: 'CHOICE_VALIDATE_TYPE',
  payload: {
    useremail,
    mobile,
    choice
  },
});

//homepage
export const getGoods = (catagrory,goodsName,isFeature,isHot,isNew,page,size,sort) => ({
  type: 'GET_GOODS',
  payload: {
    catagrory,
    goodsName,
    isFeature,
    isHot,
    isNew,
    page,
    size,
    sort
  },
});

export const getAdv= (category) => ({
  type: 'GET_ADV',
  payload: {
   category:1
  },
});

export const getGoodsCatagrory= () => ({
  type: 'GET_GOODS_CATAGRORY',
  payload: {
  },
});