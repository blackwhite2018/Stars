import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from './Star/Star';
import './stars.css';

const Stars = ({ count }) => {
    if (count < 1 || count > 5 || (typeof count !== 'number' && Number.isNaN(count))) {
        return null;
    }

    const stars = new Array(count).fill(null);
    const generateIds = stars.map(star => {
        return {
            _id: shortid.generate(),
            value: star
        };
    });

    return (
        <ul className="card-body-stars">
            {
                generateIds.map(({ _id }) => {
                    return (
                        <li key={ _id }>
                            <Star />
                        </li>
                    );
                })
            }
        </ul>
    );
};

Stars.defaultProps = {
    count: 0
};

Stars.propTypes = {
    count: PropTypes.number
};

export default Stars;

