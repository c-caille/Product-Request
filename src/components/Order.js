import {FaTimes} from 'react-icons/fa'

const Order = ( {order, onDelete, onToggle}) => {
  return (
    <div className={`order ${order.status ? 'status' : ''}`} onDoubleClick= {() => onToggle(order.id)}>
        <h3> {order.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(order.id)} /> </h3>
        <p>{order.day}</p>
    </div>
  )
}

export default Order