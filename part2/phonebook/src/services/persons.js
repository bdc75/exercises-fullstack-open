import axios from 'axios'
// OLD:   const baseUrl = 'http://localhost:3001/persons'
// worked for when we deployed just the backend:  const baseUrl = 'http://localhost:3001/api'
// now we have to define baseUrl to be a relative URL since the backend and frontend exist at same URL
const baseUrl = '/api'
const personsUrl = `${baseUrl}/persons`

const getAll = () => {
  return axios.get(personsUrl)
//   return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
  const request = axios.post(personsUrl, newObject)
  return request.then(response => response.data)
}


const update = (id, newObject) => {
  const request = axios.put(`${personsUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteService = id => {
  return axios.delete(`${personsUrl}/${id}`)
}

export default { 
  getAll, create, update, deleteService 
}