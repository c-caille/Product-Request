import { useState } from 'react'

const NewOrder = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [status, setStatus] = useState(false)

  const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please start your order')
            return
        }

        onAdd({text, day, status})

        setText('')
        setDay('')
        setStatus(false)
    }
  
    return (
    <form className='add-form' onSubmit= {onSubmit}>
        <div className= 'form-control'>
            <label> Request Product </label>
            <input type="text" placeholder="Make Order" value={text} onChange={(e) => setText(e.target.value) }  />
        </div>
        <div className= 'form-control'>
            <label> Day and Time </label>
            <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value) } />
        </div>
        <div className= 'form-control form-control-check'>
            <label> Completion Status </label>
            <input type="checkbox" 
            checked={status}
            value={status} 
            onChange={(e) => setStatus(e.currentTarget.checked) } />
        </div>

    <input type="submit" value='Save Order' className='btn btn-block' />
    </form>
  )
}

export default NewOrder