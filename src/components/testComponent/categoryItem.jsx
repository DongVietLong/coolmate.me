// import { useState } from "react"

// export default function CategoryItem({ child1, index }) {
//   const [isHovered, setIsHover] = useState(false)

//   const handleUnChange = () => {
//     setIsHover(false)
//   }
//   const handleChange = () => {
//     setIsHover(true)
//   }
//   const handleStopChange = () => {}
//   return (
//     <div className="item-holder">
//       <div
//         className="image-holder"
//         onMouseOver={handleChange}
//         onMouseOut={handleUnChange}
//       >
//         <img src={`${isHovered ? child1.src[1] : child1.src[0]}`} />
//         <div className="flex rate-infor">
//           <div className="rate flex">
//             <div>{child1.rate}</div>
//             <i className="fa-solid fa-star"></i>
//             <div className="rateNumber">({child1.rateNumber})</div>
//           </div>
//           {child1.type && <div className="type">{child1.type}</div>}
//         </div>
//         <div className="price">Chỉ {child1.price}</div>
//         {
//           <div className={`size-holder ${isHovered ? "flex" : "none"}`}>
//             {child1.size.map((sizeNumber, index) => (
//               <div
//                 key={index}
//                 className="size flex center"
//               >
//                 {sizeNumber}
//               </div>
//             ))}
//           </div>
//         }
//       </div>
//       <div className="color-choice flex">
//         {child1.color.map((colorItem, index) => (
//           <div key={index} className="color-holder">
//             <img className="color-item" src={colorItem} />
//           </div>
//         ))}
//       </div>
//       <div className="name">{child1.name}</div>
//       <div className="all-price flex">
//         <div className="discount-price">{child1.price}</div>
//         <div className="original-price">{child1.originalPrice}</div>
//         <div className="discount-price">{child1.discount}</div>
//       </div>
//     </div>
//   )
// }
