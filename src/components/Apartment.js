class Apartment {

  constructor(data, house){
    this.data = data
    this.house = house
  }

  render = () => {
    const { unit, bedrooms, bathrooms, rent, image, hazards } = this.data
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <h1>${unit}</h1>
      <img src=${image} alt=${unit}/>
      <p>$${rent}</p>
      <p>${bedrooms} bedrooms, ${bathrooms} bathrooms</p>
      <p>Hazards: ${hazards}</p>
    </div>
    `
  }

}
