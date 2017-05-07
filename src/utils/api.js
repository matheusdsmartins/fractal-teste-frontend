import axios from 'axios'

const req = function (path) {
  return axios.get(`https://api.punkapi.com/v2/beers${path}`)
}

export { req }
