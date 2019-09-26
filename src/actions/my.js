export const fetchAddress = (mid) => ({
  type: 'GET_ADDRESS_ALL',
  payload: {
      mid:mid
  },
});

export const fetchDefaultAddress = (mid) => ({
  type: 'GET_ADDRESS_DEFAULT',
  payload: {
        mid:mid
  },
});


export const addAddress = (address) => ({
  type: 'ADDRESS_ADD',
  payload: {
    ...address,
  },
});

export const deleteAddress = (mid) => ({
  type: 'ADDRESS_DELETE',
  payload: {
     mid:mid
  },
});
