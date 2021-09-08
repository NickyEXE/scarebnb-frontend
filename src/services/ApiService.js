class ApiService {

  constructor(api){
    this.api = api
  }

  getHouses = () => fetch(this.api + "/houses").then(res => res.json())

  createHouse = (newHouse) => {
    newHouse.user_id = user.id
    return fetch(this.api + "/houses", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHouse),
    })
    .then(response => response.json())
  }

  findOrCreateUser = (username) => {
    return fetch(this.api + "/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username}),
    })
    .then(response => response.json())
  }

}
