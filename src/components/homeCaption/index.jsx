import "./styles.css"

export default function HomeCaption() {
  return (
    <div className="home-caption flex middle">
      <div className="caption-holder flex middle">
        <marquee>
          CoolClub - Ưu đãi nhiều hơn, mua sắm vui hơn. Nhận ngay ưu đãi 7% cho
          lần mua sắm tiếp theo
        </marquee>
        <div className="register flex">Gia nhập ngay</div>
      </div>
      <div className="about-coolmate-footer">
        <div className="coolmate-story">
          <img src="https://mcdn.coolmate.me/uploads/November2021/image1_59.jpg" />
        </div>
        <div className="coolmate-service">
          <img src="https://mcdn.coolmate.me/uploads/November2021/image2.jpg" />
        </div>
      </div>
    </div>
  )
}
