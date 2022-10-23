import "./styles.css"
import { Link } from "react-router-dom"
export default function AboutCoolmate() {
  return (
    <div className="about-coolmate">
      <div className="about-coolmate-part1 flex">
        <div className="background">
          <div className="illustration-photo">
            <img src="https://mcdn.coolmate.me/image/August2022/mceclip0.jpg" />
          </div>
          <div className="infor flex">
            <h1 className="title">
              Coolmate's <br /> CLEAN DENIM
            </h1>
            <p className="description">
              Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu
              là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng
              và trồng bằng quy trình sạch, bền vững. Chiếc quần với vải Denim
              được dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng Nai của Saitex - nhà
              máy với nhiều trang máy móc, thiết bị hiện đại với quy trình sản
              xuất khép kín, giảm thiểu CO2 và nước thải ra môi trường.
            </p>
            <Link to="/cleanDenim">
              <button className="for-more">Tìm hiểu thêm</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="about-coolmate-part2 flex">
        <div className="background2 flex">
          <div className="infor flex">
            <h1 className="title">
              Dòng sản phẩm
              <br /> công nghệ
              <br /> EXCOOL
            </h1>
            <p className="description">
              Công nghệ Việt cho người Việt. <br /> Với hơn <b>100.000</b> sản
              phẩm đã được gửi đến tay khách hàng sử dụng và hài lòng.
            </p>
            <Link to="/excool">
              <button className="for-more">Tìm hiểu thêm</button>
            </Link>
          </div>
          <div className="illustration-photo2">
            <div className="img-holder"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
