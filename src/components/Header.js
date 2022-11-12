import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
    return (
    <header className ='header'>
        <h1>{title}</h1>
        <Button 
            color ={showAdd ? 'red' : 'green'} 
            text ={showAdd ? 'Close' : 'Make Request'} 
            onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title:'Product App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// Can do CSS in JS
// const headingStyle = {
//     const headingStyle = {
//         color: 'red',
//         backgroundColor: 'black',
//     }
// }

export default Header