import React from "react"
import TemplateTypes from "../templateTypes"
const Usual = () => {
  const h1 = "Đồ mặc hoạt động thể thao"
  const getData = "sport"
  const src =
    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/AntismellTANKTOP.jpg"
  return (
    <div>
      <TemplateTypes h1={h1} getData={getData} src={src} />
    </div>
  )
}

export default Usual
