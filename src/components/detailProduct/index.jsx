import React from "react"
import Slider from "react-slick"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import "./styles.css"
import { addToCartInDetail } from "../../redux/cartSlice"

export default function DetailItem({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const features = [
    {
      title: "Đổi trả cực dễ\nchỉ cần số điện thoại",
      src: "https://www.coolmate.me/images/icons/icon3.svg",
    },
    ,
    {
      title: "Miễn phí vận chuyển\ncho đơn hàng trên 200k",
      src: "https://www.coolmate.me/images/icons/icon4.svg",
    },
    {
      title: "60 ngày đổi trả\nvì bất kỳ lý do gì",
      src: "https://www.coolmate.me/images/icons/icon5.svg",
    },
    {
      title: "Hotline 1900.27.27.37\nhỗ trợ từ 8h30 - 22h mỗi ngày",
      src: "https://www.coolmate.me/images/icons/icon2.svg",
    },
    {
      title: "Đến tận nơi nhận hàng trả,\nhoàn tiền trong 24h",
      src: "https://www.coolmate.me/images/icons/icon1.svg",
    },
    {
      title: "Giao hàng nhanh toàn quốc",
      src: "https://www.coolmate.me/images/icons/icon6.svg",
    },
  ]
  const outstanding = [
    "Chất liệu: 100% Poly kết hợp công nghệ xử lý hoàn … Quickdry (nhanh khô) và Wicking (thấm hút nhanh)",
    "Nhà cung cấp vải hàng đầu thế giới trong lĩnh vực vải thể thao; nhà cung cấp chính của Adidas, Nike",
    "Khả năng vải khử mùi tự nhiên",
    "Tạo cảm giác thoáng mát và thoải mái khi vận động",
    "Tự hào sản xuất tại Việt Nam",
  ]
  const [isClickSize, setIsClickSize] = useState(false)
  const [isClickColor, setIsClickColor] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [colorIndex, setColorIndex] = useState(0)
  const [sizeIndex, setSizeIndex] = useState(0)

  const handleDecrease = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : setQuantity(1)
  }
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleClickSize = (index) => {
    setIsClickSize(true)
    setSizeIndex(index)
  }
  const handleClickColor = (index) => {
    setIsClickColor(true)
    setColorIndex(index)
  }
  const dispatch = useDispatch()
  const handleAddToCart = (
    id,
    name,
    sizes,
    pickedSize,
    price,
    src,
    quantity,
    colors,
    pickedColor
  ) => {
    dispatch(
      addToCartInDetail({
        id,
        name,
        sizes,
        pickedSize,
        price,
        src,
        quantity,
        colors,
        pickedColor,
      })
    )
  }
  return (
    <div>
      {data && (
        <div className="detail-product-container">
          <div className="left-side-detail-product">
            <Slider {...settings} className="detail-product-slider">
              {data.src.map((image) => (
                <div
                  key={JSON.stringify(image)}
                  className="detail-product-holder"
                >
                  <img src={image} alt="" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="right-side-detail-product">
            <h1 className="detail-product-name">{data.name}</h1>
            <div className="flex rate">
              <p>{data.rate}</p>
              <i className="fa-solid fa-star"></i>
              <p className="rateNumber">({data.rateNumber})</p>
            </div>
            <p className="detail-product-price">{data.price}</p>
            <p className="detail-product-color">Màu sắc:</p>
            <div className="flex">
              {data.color.map((color, index) => (
                <div
                  className={`detail-product-color-holder color-holder ${
                    isClickColor && colorIndex === index
                      ? "color-holder-hover"
                      : ""
                  }`}
                  key={index}
                  onClick={() => handleClickColor(index)}
                >
                  <img className="color-item" src={color} alt="" />
                </div>
              ))}
            </div>
            <p className="detail-product-size">Kích thước quần:</p>
            <div className="flex detail-product-size-holder">
              {data.size.map((size, index) => (
                <div
                  className={`${
                    isClickSize && sizeIndex === index
                      ? "detail-product-size-item"
                      : "detail-product-size-item-hover"
                  }`}
                  key={index}
                  onClick={() => handleClickSize(index)}
                >
                  {size}
                </div>
              ))}
            </div>
            <div className="add-to-cart flex">
              <div className="adjust">
                <div className="decrease" onClick={handleDecrease}>
                  -
                </div>
                <div>{quantity}</div>
                <div className="increase" onClick={handleIncrease}>
                  +
                </div>
              </div>
              <div
                className="add-button-holder flex"
                onClick={() =>
                  handleAddToCart(
                    data.id,
                    data.name,
                    data.size,
                    data.size[sizeIndex],
                    data.price,
                    data.src[1],
                    quantity,
                    data.color,
                    data.color[colorIndex]
                  )
                }
              >
                <div className="add-button-icon">
                  <img src="https://www.coolmate.me/images/icon-cart.svg?708f2c22fb85099a3e6641a2a81b3b67" />
                </div>
                <div className="add-button">Thêm vào giỏ hàng</div>
              </div>
            </div>
            <hr />
            <div className="feature-holder">
              {features.map((feature, index) => (
                <div className="feature-item-detail flex middle" key={index}>
                  <div className="feature-item-icon">
                    <img src={feature.src} alt="" />
                  </div>
                  <div>{feature.title}</div>
                </div>
              ))}
            </div>
            <div className="outstanding-feature-holder">
              <p className="feature-item-title">Đặc điểm nổi bật:</p>
              {outstanding.map((item, index) => (
                <ul className="outstanding-content" key={index}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
