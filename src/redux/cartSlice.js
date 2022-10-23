import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.pickedSize === action.payload.pickedSize
      )
      itemInCart
        ? itemInCart.quantity++
        : state.cart.push({ ...action.payload, quantity: 1 })
    },
    addToCartInDetail: (state, action) => {
      const itemInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.pickedSize === action.payload.pickedSize
      )
      itemInCart
        ? (itemInCart.quantity += action.payload.quantity)
        : state.cart.push({
            ...action.payload,
            quantity: action.payload.quantity,
          })
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.pickedSize === action.payload.size
      )
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.pickedSize === action.payload.size
      )
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    removeItem: (state, action) => {
      // const removeItemIndex = state.cart.findIndex(
      //   (item) =>
      //     item.id === action.payload.id &&
      //     item.pickedSize === action.payload.size
      // )
      // state.cart.splice(removeItemIndex, 1)
      const moveItems = state.cart.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.pickedSize !== action.payload.size
      )
      state.cart = moveItems
    },

    changeSizeItem: (state, action) => {
      state.cart[action.payload.index].pickedSize = action.payload.value
    },
  },
})
export const cartReducer = cartSlice.reducer
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  changeSizeItem,
  addToCartInDetail,
} = cartSlice.actions
