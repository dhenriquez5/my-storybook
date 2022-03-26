import React from 'react'
import './mylabel.css';
import PropTypes from 'prop-types';
export const MyLabel = ({ label, size, allCaps, color,fontColor, ...props }) => {
    return (
        <span className={`label ${size} text-${color}  `}   style={{color :fontColor }} >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}

MyLabel.propTypes = {
    /**
   * Nombre del Label
   */
    label: PropTypes.string.isRequired,
    /**
   * Tamaño del label
   */
    size: PropTypes.oneOf(['normal', 'h1', 'h2', 'h3']),
    /**
  * Color del texto
  */
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    /**
    * Tamaño del label?
    */
    allCaps: PropTypes.bool,

    /**
    * Color Perzonalizado?
    */
    fontColor:PropTypes.string


}

MyLabel.defaultProps = {
    label: 'No Label',
    size: 'normal',
    color: 'primary',
    allCaps: false
}

