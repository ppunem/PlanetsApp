// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {slidesToShow: 1, dots: false, slidesToScroll: 1}

  return (
    <div className="bg">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem planet={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
