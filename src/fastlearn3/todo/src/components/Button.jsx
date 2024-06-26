import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text,color,onClick}) => {
  return (
    <button 
    onClick={onClick} 
    style={{backgroundColor:color}}  
    className='btn'>{text} </button>
  )
}

Button.defaultProps = {
    color : 'steelblue',
    text : 'add'
}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button