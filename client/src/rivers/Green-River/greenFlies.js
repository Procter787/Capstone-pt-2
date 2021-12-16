import React from "react";
import PropTypes from "prop-types"

export default function GreenFly({ greenfly }) {
    return(
        <tr>
            <td>
                {greenfly.fType}
            </td>
            <td>
                {greenfly.size}
            </td>
            <td>
                {greenfly.begin}
            </td>
            <td>
                {greenfly.end}
            </td>
        </tr>
    );
}

GreenFly.propTypes={fly:PropTypes.shape({fType:PropTypes.string})}