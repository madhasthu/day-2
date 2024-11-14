
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axios.get(`${API}/products/count`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)


const getOrders = () => axios.get(`${API}/Orders/all`)
const editOrder =(order,id) => axios.put(`${API}/Orders/edit/${id}`,order)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
const addOrders = (order) => axios.post(`${API}/Orders/add`, order)
const deleteOrder =(id) => axios.delete(`${API}/Orders/delete/${id}`)


// OrderEndPonts



//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const addUser =(users) => axios.post(`${API}/users/add`, users)
const getUsersCount = () => axios.get(`${API}/users/count`)
const deleteUser =(id) => axios.delete(`${API}/users/delete/${id}`)
const editUsers =(users,id) => axios.put(`${API}/users/edit/${id}`,users)

//AuthEndponts


const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)
export { getProducts, getOrders, getUsers, Login, Register ,addProduct,addUser,deleteProduct,editProduct,deleteUser,editUsers,editOrder,deleteOrder,addOrders,getProductsCount,getOrdersCount,getUsersCount}