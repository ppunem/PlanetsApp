// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props

  return (
    <div className="planet-container">
      <img src={planet.imageUrl} alt={planet.name} className="image" />
      <h1 className="name">{planet.name}</h1>
      <p className="description">{planet.description}</p>
    </div>
  )
}

export default PlanetItem
