import React from "react"
import "./styles.css"
import CartBill from "../cartBill/index"
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  changeSizeItem,
} from "../../../redux/cartSlice"
import { useSelector, useDispatch } from "react-redux"

const CartItems = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const handleIncrease = (id, size) => {
    dispatch(incrementQuantity({ id, size }))
  }
  const handleDecrease = (id, size) => {
    dispatch(decrementQuantity({ id, size }))
  }
  const handleRemove = (id, size) => {
    dispatch(removeItem({ id, size }))
  }
  const handleChangeSize = (value, index) => {
    dispatch(changeSizeItem({ value, index }))
  }
  return (
    <div className="items-cart-payment">
      <h1>Giỏ hàng</h1>
      <div className="items-cart">
        {cart?.map((item, index) => (
          <div className="item-in-cart" key={JSON.stringify(item)}>
            <div className="item-cart-img">
              <img src={item.src} alt="" />
            </div>
            <div className="item-cart-info">
              <p className="item-in-cart-name">{item.name}</p>
              <div className="flex size-in-cart-holder">
                <p>Size: </p>
                <select
                  className="size-option-in-cart"
                  onChange={(e) => {
                    handleChangeSize(e.target.value, index)
                  }}
                  value={item.pickedSize}
                >
                  {item.sizes.map((size) => (
                    <option className="flex middle" value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex color-in-cart-holder">
                <p>Màu: </p>
                <div className="color-holder">
                  <img src={item.pickedColor} alt="" />
                </div>
              </div>
              <p>{item.price}</p>
              <div className="adjust adjust-in-cart">
                <div
                  className="decrease decrease-in-cart"
                  onClick={() => handleDecrease(item.id, item.pickedSize)}
                >
                  -
                </div>
                <div className="quantity-in-cart">{item.quantity}</div>
                <div
                  className="increase increase-in-cart"
                  onClick={() => handleIncrease(item.id, item.pickedSize)}
                >
                  +
                </div>
              </div>
              <div
                className="remove-item-in-cart flex middle cursor"
                onClick={() => handleRemove(item.id, item.pickedSize)}
              >
                <span>Xóa</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="discount-tag flex">
        <div className="head-tag"></div>
        <div className="content-tag">
          <p>COOLMATE</p>
          <p>Giảm 50% tối đa 100k cho đơn hàng đầu tiên tại Coolmate</p>
        </div>
      </div>
      <CartBill />
    </div>
  )
}

export default CartItems
