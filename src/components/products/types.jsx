import { useState } from "react"
import { Link } from "react-router-dom"
import { useHover } from "../hooks/useHover"

export default function Types({ choice, index }) {
  const [isHover, hoverConfig] = useHover()

  const goTo = () => {
    if (index === 0) return "/underwear"
    if (index === 1) return "/usual"
    if (index === 2) return "/sport"
    if (index === 3) return "/all"
  }
  // to={(index) => goTo()}
  return (
    <div className="choice-item" {...hoverConfig}>
      <img className={`${isHover ? "zoom" : "normal"}`} src={choice.src} />
      <Link className="goto" to={goTo()}>
        <div>{choice.name}</div>
      </Link>
    </div>
  )
}
