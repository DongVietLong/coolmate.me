import "./styles.css"
import { useState, useEffect } from "react"
import Types from "./types.jsx"

export default function Products() {
  const [Data, setData] = useState({})
  useEffect(() => {
    fetch("http://localhost:3000/productsTypes")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])
  const basics = Data.basics
  const choices = Data.choices

  return (
    <div className="products flex">
      <div className="basics flex">
        <p>Coolmate Basics</p>
        <div className="basics-holder flex">
          {basics?.map((product, index) => (
            <div key={index} className="basic-item">
              <img src={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="exp-holder">
        <p className="text">
          Dòng sản phảm mặc cơ bản <span>chất lượng tốt</span> và{" "}
          <span>giá rẻ</span> của Coolmate
        </p>
        <button className="flex middle">Trải nghiệm</button>
      </div>
      <div className="choices-holder flex">
        {choices?.map((choice, index) => (
          <Types choice={choice} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
