import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
   
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color = {showAdd ? 'red' : 'darkblue'} text={showAdd ? 'Close' : 'Add'} onClick ={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'HearSync Tracker'
}

Header.propTypes={
    title: PropTypes.string,
}

// You can style stuff inline with variables if you want to
// const headingStyle ={
//     color:'red',
//     backgroundColor: 'black'
// }

export default Header