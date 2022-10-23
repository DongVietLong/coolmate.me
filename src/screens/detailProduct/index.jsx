import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailItem from "../../components/detailProduct"

export default function DetailProduct() {
  const [Data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])
  const { productId, selectedIndex } = useParams()
  const thisProduct = Data[selectedIndex]?.children1

  const productDetail = thisProduct?.find(
    (product) => product.id.toString() === productId.toString()
  )

  return (
    <div>
      <DetailItem data={productDetail} />
    </div>
  )
}
