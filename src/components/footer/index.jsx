import "./styles.css"
import { useState, useEffect } from "react"
export default function Footer() {
  const [Data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/footer")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <div className="footer-web">
      <div className="footer-container">
        <div className="footer-category flex">
          {Data?.map((item) => (
            <div className="footer-category-holder" key={item.id}>
              <div className="footer-item flex">{item.name}</div>
              {item.children1.map((child, index) => (
                <div className="item-content" key={index}>
                  {child}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="contact-infor">
          <h1>COOLMATE lắng nghe bạn!</h1>
          <p>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </p>
          <button>Gửi ý kiến</button>
          <div className="contact">
            <div className="flex phone">
              <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" />
              <div>
                <p>Hotline</p>
                <p>1900.272737 (028.7777.2737)</p>
              </div>
            </div>
            <div className="flex email">
              <img src="https://www.coolmate.me/images/footer/icon-email.svg" />
              <div>
                <p>Email</p>
                <p>Cool@coolmate.me</p>
              </div>
            </div>
            <div className="social flex">
              <a href="https://www.facebook.com/coolmate.me" target="_blank">
                <img src="https://www.coolmate.me/images/footer/icon-facebook.svg" />
              </a>
              <a href="https://www.instagram.com/coolmate.me/" target="_blank">
                <img src="https://www.coolmate.me/images/footer/icon-instar.svg" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCWw8wLlodKBtEvVt1tTAsMA"
                target="_blank"
              >
                <img src="https://www.coolmate.me/images/footer/icon-youtube.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="company flex">
        <p>
          @ CÔNG TY TNHH FASTECH ASIA
          <br />
          Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp
          do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
        </p>
        <div className="corporators flex">
          <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/March2022/handle_cert.png" />
          <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/March2022/dmca_protected_15_120.png" />
          <img src="https://www.coolmate.me/images/footer/Coolmate-info.png" />
          <img src="https://www.coolmate.me/images/footer/logoSaleNoti.png" />
        </div>
      </div>
    </div>
  )
}
