import React from "react"
import { useState, useEffect } from "react"
import CategoryItem from "../../components/detailCategories/categoryItem"
import "./styles.css"

const templateTypes = ({ h1, getData, src }) => {
  const [Data, setData] = useState({})
  useEffect(() => {
    fetch("http://localhost:3000/productCategories")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])
  const [items, setItems] = useState(6)
  console.log("items", items)
  const moreItem = () => {
    setItems((prev) => prev + 4)
  }

  return (
    <div className="templateTypes">
      <h1>{h1}</h1>
      <div className="template-container flex">
        <div className="template-holder flex">
          <div className="template">
            <img src={src} />
          </div>
          {Data[getData]?.slice(0, items).map((product, index) => (
            <div key={JSON.stringify(product)} className="template-item">
              <CategoryItem
                disableOnclick={true}
                child1={product}
                index={index}
              />
            </div>
          ))}
          <div className="template-item see-more">
            <button onClick={moreItem}>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default templateTypes
