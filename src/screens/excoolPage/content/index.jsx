import React from "react"
import "./styles.css"
const Content = () => {
  return (
    <div>
      <div className="excool">
        <h1>Công nghệ Excool là gì?</h1>
        <h2>“Một dòng sản phẩm công nghệ mới của Coolmate”</h2>
        <div className="discription ">
          <p className="flex">
            Excool là kết quả của gần 2 năm nghiên cứu và phát triển, liên tục
            thử nghiệm chất liệu mới của Coolmate và đối tác phát triển vải và
            Dupont (tập đoàn hóa chất may mặc số #1 thế giới). Vải Excool sử
            dụng sợi nền là sợi Sorona, một sợi mới, có nhiều tính năng ưu việt
            của Dupont. Các sản phẩm dòng Excool tập trung vào các tính năng mát
            mẻ, nhẹ, bền, dễ chăm sóc, không nhăn và đặc biệt là thân thiện với
            môi trường. Hãy cùng Coolmate khám phá những sự KHÁC BIỆT tới từ
            dòng sản phẩm này nhé.
          </p>
          <div>
            <img src="https://mcdn.coolmate.me/uploads/December2021/Group_73_(2)_(1).png" />
          </div>
        </div>
      </div>
      <div className="video-content">
        <div>
          <iframe
            width="1200"
            height="484"
            src="https://www.youtube.com/embed/tDT7ftJh-pI"
            title="COOLMATE EXCOOL | Chiếc áo Polo với công nghệ hiện đại"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="tech flex middle">
        <h2>Định Hướng cho sự nghiên cứu và phát triển dòng sản phẩm excool</h2>
        <div className="tech-image">
          <img src="https://mcdn.coolmate.me/uploads/December2021/Group_146_(2)_(1).png" />
        </div>
      </div>
    </div>
  )
}

export default Content
