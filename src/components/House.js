class House {

  static all = []

  constructor(data){
    this.data = data
    this.constructor.all.push(this)
  }

  renderShow = () => {
    const { name, address, city, state, haunting, imageUrl } = this.data
    document.getElementById("main").innerHTML = `
    <div class="show">
      <h1>${name}</h1>
      <img src="${imageUrl}" alt=${name}/>
      <p>${address}</p>
      <p>${city}, ${state}</p>
      <p>Lightly haunted by: ${haunting}</p>
    </div>
    <button id="goBack">Go Back</button>
    `
    document.getElementById("goBack").addEventListener("click", House.renderIndex)
  }

  renderCard = () => {
    const { name, city, state,  imageUrl, id } = this.data
    document.getElementById("house-container").innerHTML += `
    <div class="house-card" data-id=${id}>
      <img src=${imageUrl} alt=${name}/>
      <p class="title">${name}</p>
      <p>${city}, ${state}</p>
    </div>`
  }

  static find = (id) => this.all.find(house => house.data.id == id)

  static getHouses = () => {
    api.getHouses().then(houses => {
      houses.forEach(house => new House(house))
      this.renderIndex()
    })
  }

  static renderIndex = () => {
    const main = document.getElementById("main")
    main.innerHTML = ""
    const houseContainer = document.createElement("div")
    houseContainer.id = "house-container"
    const addHouse = document.createElement("button")
    addHouse.innerText = "List a New Haunted House"
    addHouse.addEventListener("click", modal.open)
    main.append(houseContainer, addHouse)
    this.all.forEach(house => house.renderCard())
    houseContainer.addEventListener("click", this.handleIndexClick)
  }

  static handleIndexClick = (e) => {
    if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
      const id = e.target.closest(".house-card").dataset.id
      this.find(id).renderShow()
    }
  }

}
