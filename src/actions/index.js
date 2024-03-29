export const authLogin = (email, password) => ({
  type: 'AUTH_LOGIN',
  payload: {
    email,
    password,
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

export const authRegister = (email, password) => ({
  type: 'AUTH_REGISTER',
  payload: {
    email,
    password,
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

