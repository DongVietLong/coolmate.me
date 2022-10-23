import React from "react"
import TemplateTypes from "../templateTypes"
const Usual = () => {
  const h1 = "Đồ mặc hàng ngày"
  const getData = "daily"
  const src =
    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Mac_hang_ngay.jpg"
  return (
    <div>
      <TemplateTypes h1={h1} getData={getData} src={src}/>
    </div>
  )
}

export default Usual
