import React from "react"
import "./styles.css"
const VideoBanner = () => {
  return (
    <div className="video-banner">
      <div className="video-container">
        <video
          controls="controls"
          muted="muted"
          autoPlay="autoplay"
          loop="loop"
        >
          <source
            src="https://mcdn.coolmate.me/uploads/assets/Excool-24s_4.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="video-cover"></div>
      <div className="content">
        <p>Dòng sản phẩm công nghệ</p>
        <h1>EXCOOL</h1>
        <p>
          Một công nghệ mới được sáng tạo bởi người Việt, dành cho người Việt
          nhiều ưu điểm vượt trội
        </p>
      </div>
    </div>
  )
}

export default VideoBanner
