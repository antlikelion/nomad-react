import React from 'react'
import PropTypes from 'prop-types';

const Movie = ({ id, year, title, summary, medium_cover_image }) => {
    return (<div>
        <h1>{title}</h1>
    </div>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
}

export default Movie