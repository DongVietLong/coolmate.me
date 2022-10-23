import { useState } from "react"

export function useHover() {
  const [isHover, setIsHover] = useState(false)

  const onMouseOver = () => {
    setIsHover(true)
  }

  const onMouseOut = () => {
    setIsHover(false)
  }

  const hoverStatus = {
    onMouseOver,
    onMouseOut,
  }

  return [isHover, hoverStatus]
}
