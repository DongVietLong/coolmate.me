import React from "react"
import VideoBanner from "./videoBanner"
import Content from "./content"
import Features from "./features"
import { useState, useEffect } from "react"
import Products from "./products"
const excoolPage = () => {
  const [Data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/excool")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <div>
      <VideoBanner Data={Data} />
      <Content Data={Data} />
      <Features Data={Data} />
      <Products Data={Data} />
    </div>
  )
}

export default excoolPage
