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

  static handleSubmit = (e) => {
    e.preventDefault()
    const newHouse = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      haunting: e.target.haunting.value,
      image_url: e.target.imageUrl.value
    }
    api.createHouse(newHouse).then(house => {
      new House(house).renderCard()
    })
    modal.close()
    e.target.reset()
  }


  static openHouseForm = () => {
    modal.main.innerHTML = `
    <h1>Add Your Haunted House</h1>
    <h3>If you're Nicolas Cage looking to unload some bad purchases, contact us directly.</h3>
    <form>
      <label for="name">Name:</label><br>
      <input type="text" name="name"><br>
      <label for"address">Address:</label><br>
      <input type="text" name="address"><br>
      <label for="city">City:</label><br>
      <input type="text" name="city"><br>
      <label for="state">State:</label><br>
      <input type="text" name="state"><br>
      <label for="haunting">How it's haunted:</label><br>
      <input type="text" name="haunting"><br>
      <label for="imageUrl">Image:</label><br>
      <input type="text" name="imageUrl"><br>
      <input type="submit" value="List this House!"><br>
    </form>
    `
    modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
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
    addHouse.addEventListener("click", this.openHouseForm)
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
