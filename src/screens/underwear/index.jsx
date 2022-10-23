import React from "react"
import TemplateTypes from "../templateTypes"
const Underwear = () => {
  const h1 = "Đồ mặc trong và mặc nhà"
  const getData = "underwear"
  const src =
    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/do-mac-nha-va-mac-trong.jpg"
  return (
    <div>
      <TemplateTypes h1={h1} getData={getData} src={src} />
    </div>
  )
}

export default Underwear
