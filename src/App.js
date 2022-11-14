import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Orders from './components/Orders'
import NewOrder from './components/NewOrder'
import About from './components/About'


const App = () => {

  const [showAddOrder, setShowAddOrder] = useState(false)
  const [orders, setOrders] = useState ([])

  //have to use asyn outside of function which is why we use const to call it
  useEffect (() => {
    const getOrders = async () => {
      const ordersFromServer = await fetchOrders()
      setOrders(ordersFromServer)
    }

    getOrders()
  }, [])

  //Fetch Orders 
  const fetchOrders = async () => {
    const res = await fetch ('http://localhost:5000/orders')
    const data = await res.json()

    return data
  }

  //Fetch Order
    const fetchOrder = async (id) => {
      const res = await fetch (`http://localhost:5000/orders/${id}`)
      const data = await res.json()
  
      return data
    }
  
  //Add
  const addOrder = async (order) => {
    const res = await fetch (`http://localhost:5000/orders`, { 
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })

    const data = await res.json()

    setOrders([...orders,data])


  //create random ID
  // const id = Math.floor(Math.random() * 10000) +1
  // const newOrder = {id, ...order}
  // setOrders([...orders, newOrder])
  }

  //Delete Task
  const deleteOrder = async (id) => {
    await fetch(`http://localhost:5000/orders/${id}`, { 
      method:'DELETE'})

  setOrders(orders.filter((order) => order.id !== id))
  }

  //Completion Status
  const toggleStatus = async (id) => {
    const orderToToggle = await fetchOrder(id)
    const updOrder = {...orderToToggle, status: !orderToToggle.status}

    const res = await fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updOrder)
    })

    const data = await res.json()

  setOrders(
    orders.map((order) => order.id === id ? {...order, status: data.status} : order))
  }

  return (
    <Router>
    <div className='container'>
      <Header onAdd ={() => setShowAddOrder(!showAddOrder)} showAdd ={showAddOrder}/>
        <Routes>
        <Route path ='/' 
        element = {
          <>
            {showAddOrder && <NewOrder onAdd={addOrder} />}
            {orders.length > 0 ? (<Orders orders ={orders} onDelete ={deleteOrder} onToggle={toggleStatus}/>) : ('You have no outstanding orders')}
          </>
        } 
        />
        <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  )
}



export default App
