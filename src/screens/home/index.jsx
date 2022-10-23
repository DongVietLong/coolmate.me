import Carousel from "../../components/carousel"
import Category from "../../components/detailCategories"
import AboutCoolmate from "../../components/aboutCoolmate"
import Products from "../../components/products"
import HomeCaption from "../../components/homeCaption"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function HomeScreen() {
  return (
    <div className="home-container">
      <Carousel />
      <Category />
      <AboutCoolmate />
      <Products />
      <HomeCaption />
    </div>
  )
}

export default HomeScreen
