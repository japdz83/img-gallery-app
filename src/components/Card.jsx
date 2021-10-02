import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ img }) => {
    return (
        <>
            <div className="card mb-2 mt-2 " style={{ width:"19rem" }}>
                <img src={ img } className="card-img-top" alt="images.jpg" />
            </div>
        </>
    )
}

Card.propTypes = {
    img: PropTypes.string
}

export default Card
