import { useState } from "react"
import { useHover } from "../hooks/useHover"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/cartSlice"

export default function CategoryItem({
  child1,
  selectedIndex,
  disableOnclick,
}) {
  const [isHover, hoverConfig] = useHover()
  const dispatch = useDispatch()
  const handleAddItem = (
    id,
    name,
    sizes,
    pickedSize,
    price,
    src,
    colors,
    pickedColor
  ) => {
    dispatch(
      addToCart({
        id,
        name,
        sizes,
        pickedSize,
        price,
        src,
        colors,
        pickedColor,
      })
    )
  }
  const [colorIndex, setColorIndex] = useState(0)
  const handleChooseColor = (index) => {
    setIsClick(true)
    setColorIndex(index)
  }
  const [isClick, setIsClick] = useState(false)

  return (
    <div className="item-holder">
      <div className="image-holder" {...hoverConfig}>
        {disableOnclick ? (
          <img src={`${!isHover ? child1?.src[1] : child1?.src[0]}`} />
        ) : (
          <Link to={`/detailProduct/${selectedIndex}/${child1.id}`}>
            <img src={`${!isHover ? child1?.src[1] : child1?.src[0]}`} />
          </Link>
        )}
        <div className="flex rate-infor">
          <div className="rate flex">
            <div className="rateScore">{child1?.rate}</div>
            <i className="fa-solid fa-star"></i>
            <div className="rateNumber">({child1?.rateNumber})</div>
          </div>
          {child1?.type && <div className="type">{child1?.type}</div>}
        </div>
        <div className="price">Chỉ {child1?.price}</div>
        {
          <div className={`size-holder ${isHover ? "flex" : "none"}`}>
            {child1?.size.map((sizeNumber, index) => (
              <div
                key={index}
                className="size flex middle cursor"
                onClick={() =>
                  handleAddItem(
                    child1.id,
                    child1.name,
                    child1.size,
                    child1.size[index],
                    child1.price,
                    child1.src[1],
                    child1.color,
                    child1.color[colorIndex]
                  )
                }
              >
                {sizeNumber}
              </div>
            ))}
          </div>
        }
      </div>
      {child1?.color && (
        <div className="color-choice flex">
          {child1.color.map((colorItem, index) => (
            <div
              key={index}
              className={`${
                isClick && colorIndex === index
                  ? "color-holder-hover"
                  : "color-holder"
              }`}
              onClick={() => handleChooseColor(index)}
            >
              <img className="color-item" src={colorItem} />
            </div>
          ))}
        </div>
      )}
      <div className="name">{child1?.name}</div>
      <div className="all-price flex">
        <div className="discount-price">{child1?.price}</div>
        <div className="original-price">{child1?.originalPrice}</div>
        <div className="discount-price">{child1?.discount}</div>
      </div>
    </div>
  )
}
