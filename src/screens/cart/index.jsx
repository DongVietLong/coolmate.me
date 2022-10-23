import React from "react"
import { useState } from "react"
import Data from ".././cart/cart.json"
import CartItems from "./cartItems"
import "./styles.css"
const Cart = () => {
  const [checked, setChecked] = useState(0)
  const handleChoosePaymentMethod = (index) => {
    setChecked(index)
  }
  return (
    <div>
      <div className="cart-container">
        <div className="cart-pay-infor">
          <h1>Thông tin vận chuyển</h1>
          <div className="delivery personal-infor flex">
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <div className="delivery email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="delivery address">
            <input type="text" placeholder="Địa chỉ (Ví dụ: 91 Chùa Láng)" />
          </div>
          <div className="delivery address-option flex">
            <div>
              <select name="calc_shipping_provinces" required="">
                <option value="">Chọn Tỉnh/Thành phố</option>
              </select>
            </div>
            <div>
              <select name="calc_shipping_district" required="">
                <option value="">Chọn Quận/Huyện</option>
              </select>
            </div>
            <div>
              <select name="calc_shipping_district" required="">
                <option value="">Chọn Phường/Xã</option>
              </select>
            </div>
          </div>
          <div className="delivery note">
            <input
              type="text"
              placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính"
            />
          </div>
          <h1>Hình thức thanh toán</h1>
          {Data.cart.map((item, index) => (
            <div
              key={JSON.stringify(item)}
              className="cart-payment flex center"
              onClick={() => handleChoosePaymentMethod(index)}
            >
              <input
                type="radio"
                checked={checked === index}
                onChange={() => handleChoosePaymentMethod(index)}
              />
              <div className="payment-method flex">
                <div className="logoItem-container">
                  <img src={item.logo} />
                </div>
                <div className="paymentName-container flex column center">
                  <p>{item.name}</p>
                  <p>{item?.sub}</p>
                </div>
              </div>
            </div>
          ))}
          <button className="pay">Thanh toán</button>
        </div>
        <div className="cart-items">
          <CartItems />
        </div>
      </div>
    </div>
  )
}

export default Cart
