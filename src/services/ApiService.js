class ApiService {

  constructor(api){
    this.api = api
  }

  getHouses = () => fetch(this.api + "/houses").then(res => res.json())

  createHouse = (newHouse) => {
    return fetch(this.api + "/houses", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHouse),
    })
    .then(response => response.json())
  }

}
