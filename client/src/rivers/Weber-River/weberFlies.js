import React from "react";
import PropTypes from "prop-types"

export default function WeberFly ({ weberfly }) {
    return(
        <tr>
            <td>
                {weberfly.fType}
            </td>
            <td>
                {weberfly.size}
            </td>
            <td>
                {weberfly.begin}
            </td>
            <td>
                {weberfly.end}
            </td>
        </tr>
    );
}

WeberFly.propTypes={fly:PropTypes.shape({fType:PropTypes.string,})}