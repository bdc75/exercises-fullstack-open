import axios from 'axios'
// OLD:   const baseUrl = 'http://localhost:3001/persons'
const baseUrl = 'http://localhost:3001/api'
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