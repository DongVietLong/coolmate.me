import "./styles.css"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import CategoryItem from "./categoryItem"
import { useWindowSize } from "../hooks/windowSize"
export default function Category() {
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

  const [isSelected, setIsSelected] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedData = Data[selectedIndex]
  const handleChangeType = (index) => {
    setIsSelected(true)
    setSelectedIndex(index)
  }
  const countWidth = useWindowSize().width <= 850 ? 2 : 4
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: countWidth,
    slidesToScroll: countWidth,
    swipeToSlide: true,
  }
  return (
    <div className="category-container">
      <div className="second-slogan">Mặc Ngay, Yêu Luôn</div>
      <div className="category-name flex">
        {Data.map((type, index) => (
          <div
            className={`name flex middle ${
              isSelected && selectedIndex === index
                ? "on-click"
                : "not-on-click"
            }`}
            key={type.id}
            onClick={() => handleChangeType(index)}
          >
            {type.name}
            {type.type && <span className="tag">{type.type}</span>}
          </div>
        ))}
      </div>
      {isSelected && (
        <div className="slick-container">
          <Slider {...settings}>
            {selectedData?.children1?.map((child1, index) => (
              <CategoryItem
                key={JSON.stringify(child1)}
                child1={child1}
                index={index}
                selectedIndex={selectedIndex}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  )
}
