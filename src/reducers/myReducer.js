const initialState = {
  someKey: [],
  address:[],
  defaultAddress:{},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADRESS_SUCCESS':
    case 'ADD_ADRESS_SUCCESS':
    case 'DELETE_ADRESS_SUCCESS':
      return {
         address: payload,
      };
    case 'DEFAULT_ADRESS_SUCCESS':
      return {
         defaultAddress: payload,
      };
    case 'ACTION':
      return {
        someKey: payload,
      };
    default:
      return state;
  }
};