import React from "react"
import { useState } from "react"
import "./styles.css"
const goTop = () => {
  const [appear, setAppear] = useState(false)
  const toggleAppear = () => {
    const scrolled = document.documentElement.scrollTop
    scrolled > 300 ? setAppear(true) : setAppear(false)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  window.addEventListener("scroll", toggleAppear)
  return (
    <div>
      <div
        onClick={scrollToTop}
        className={`scrollTop middle cursor ${appear ? "" : "disappear"}`}
      >
        <i className="fa-solid fa-arrow-up arrow-scroll-up"></i>
      </div>
    </div>
  )
}

export default goTop
