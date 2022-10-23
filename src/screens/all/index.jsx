import React from "react"
import TemplateTypes from "../templateTypes"
const All = () => {
  const h1_1 = "Đồ mặc hàng ngày"
  const getData_1 = "daily"
  const src_1 =
    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Mac_hang_ngay.jpg"
  const h1_2 = "Đồ mặc hoạt động thể thao"
  const getData_2 = "sport"
  const src_2 =
    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/AntismellTANKTOP.jpg"
  const h1_3 = "Đồ mặc trong và mặc nhà"
  const getData_3 = "underwear"
  const src_3 =
    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/do-mac-nha-va-mac-trong.jpg"
  return (
    <div>
      <TemplateTypes h1={h1_1} getData={getData_1} src={src_1} />
      <TemplateTypes h1={h1_2} getData={getData_2} src={src_2} />
      <TemplateTypes h1={h1_3} getData={getData_3} src={src_3} />
    </div>
  )
}

export default All
