import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

const CartBill = () => {
  const [coupon, setCoupon] = useState(0)
  const [couponValue, setCouponValue] = useState("")
  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      totalQuantity += item.quantity
      totalPrice +=
        parseInt(item.price.slice(0, item.price.length - 1).replace(".", "")) *
        item.quantity
    })
    return totalPrice
  }
  const handleCoupon = (e) => {
    setCouponValue(e.target.value)
  }
  const handleApply = () => {
    couponValue === "COOLMATE"
      ? setCoupon(getTotal() * 0.5 > 100000 ? 100000 : getTotal() * 0.5)
      : setCoupon(0)
  }
  return (
    <div className="total-price-container">
      <div
        className={`coupon-apply ${
          couponValue === "" ? "" : "coupon-apply-change-color"
        }`}
      >
        <input
          type="text"
          placeholder="Nhập mã giảm giá"
          onChange={(e) => handleCoupon(e)}
        />
        <div className="cursor" onClick={handleApply}>
          <p>Áp dụng</p>
        </div>
      </div>
      <hr />
      <div className="flex space-btw fee">
        <p>Tạm tính</p>
        <p>
          {getTotal().toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
      <div className="flex space-btw fee">
        <p>Giảm giá</p>
        <p>
          -
          {coupon.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
      <div className="flex space-btw fee">
        <p>Phí giao hàng</p>
        <p>+ 25.000₫</p>
      </div>
      <hr />
      <div className="flex space-btw fee">
        <p>Tổng</p>
        <p>
          {(getTotal() + 25000 - coupon).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
    </div>
  )
}

export default CartBill
