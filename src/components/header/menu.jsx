import { useState, useEffect } from "react"
import { useHover } from "../hooks/useHover"
import { Link } from "react-router-dom"

export default function Menu({ id, item, aboutCoolmate }) {
  const [isHover, hoverConfig] = useHover()
  const categoryGo = (child3) => {
    if (child3.includes("Áo")) {
      return "/usual"
    } else if (child3.includes("Quần")) {
      return "/underwear"
    } else return "/all"
  }
  const handleExit = () => {
    hoverConfig.onMouseOut()
  }
  return (
    <div className="menu-item" {...hoverConfig}>
      <li>{item.name}</li>
      {isHover && id === 3 && (
        <div className="submenu">
          <div className="submenu-container">
            <div className="submenu-part">
              {item?.children?.map((child1) => (
                <div key={child1.id} className="child">
                  <p className="child-1">{child1.name}</p>
                  <div className="divide-column">
                    {child1.children.map((child2) => (
                      <div key={child2.id}>
                        <p className="child-2">{child2.name}</p>
                        {child2.src && (
                          <img className="child-2-img" src={child2.src} />
                        )}
                        <div>
                          {child2?.children?.map((child3) => (
                            <Link
                              to={categoryGo(child3)}
                              className="child3-link"
                              onClick={handleExit}
                              key={JSON.stringify(child3)}
                            >
                              <div key={child3.id} className="child child-3">
                                {child3}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="opacity-part" onMouseOver={handleExit}></div>
        </div>
      )}
      {isHover && id === 5 && (
        <div className="submenu flex column">
          <div className="submenu-container">
            <div className="flex column">
              <div className="coolmate">
                {aboutCoolmate.map((item) => (
                  <div
                    key={item.id}
                    className="flex aboutCoolmate-container column"
                  >
                    <img className="aboutCoolmate" src={item.src} />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="opacity-part"></div>
        </div>
      )}
    </div>
  )
}
