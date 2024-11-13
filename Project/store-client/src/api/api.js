
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const addUsers =(users) => axios.post(`${API}/users/add`, users)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)



// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)

//AuthEndponts


const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)
export { getProducts, getOrders, getUsers, Login, Register ,addProduct,addUsers,deleteProduct,editProduct}