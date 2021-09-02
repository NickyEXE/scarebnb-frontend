class ApiService {

  constructor(api){
    this.api = api
  }

  getHouses = () => fetch(this.api + "/houses").then(res => res.json())

}
