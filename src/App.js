import { useState, useEffect } from 'react'
import Header from './components/Header'
import Orders from './components/Orders'
import NewOrder from './components/NewOrder'


const App = () => {

  const [showAddOrder, setShowAddOrder] = useState(false)

  const [orders, setOrders] = useState ([])

  useEffect(() =>{
    const fetchOrders = asyn () 
  } )

//Add
const addOrder = (order) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newOrder = {id, ...order}
  setOrders([...orders, newOrder])
}

//Delete Task
const deleteOrder = (id) => {
  setOrders(orders.filter((order) => order.id !== id))
}

//Completion Status
const toggleStatus = (id) => {
  setOrders(
    orders.map((order) => order.id === id ? {...order, status: !order.status} : order))
}

  return (
    <div className='container'>
      <Header onAdd ={() => setShowAddOrder(!showAddOrder)} showAdd ={showAddOrder}/>
     {/* note && short form of ternary  */}
        {showAddOrder && <NewOrder onAdd={addOrder} />}
        {orders.length > 0 ? (<Orders orders ={orders} onDelete ={deleteOrder} onToggle={toggleStatus} />) : ('You have no outstanding orders')}
    </div>
  );
}


export default App;
