import React from "react"
import "./styles.css"

const Features = ({ Data }) => {
  return (
    <div className="excool-container">
      <div className="difference flex column">
        <h1>Tại Sao Excool Lại Khác Biệt</h1>
        <p>
          “Công nghệ với sợi Sorona tạo sự khác biệt đem đến cảm giác thoải mái
          tuyệt vời"
        </p>
        <div className="flex dif-container">
          {Data.difference?.map((dif, index) => (
            <div className="dif-item" key={dif.id}>
              <div>
                <img src={dif.src} alt={dif.name} />
              </div>
              <p>{dif.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="features flex column">
        <div className="feature-background">
          <img src="https://mcdn.coolmate.me/uploads/December2021/Group_54_(1).jpg" />
        </div>
        <div className="feature-infor">
          <h1>8 tính năng nổi bật của dòng sản phẩm excool</h1>
          <div className="flex feature-container">
            {Data.features?.map((feature, index) => (
              <div className="feature-item" key={feature.id}>
                <div className="feature-img">
                  <img src={feature.src} alt={feature.sub} />
                </div>
                <p className="name-feature english">{feature.english}</p>
                <p className="name-feature sub">{feature.sub}</p>
              </div>
            ))}
          </div>
          <p className="check">
            (*) Các tính năng đều được kiểm định bởi đơn vị độc lập chuyên
            nghiệp Intertek.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
