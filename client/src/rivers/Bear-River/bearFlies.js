import React from "react";
import PropTypes from "prop-types"

export default function BearFly({ bearfly }) {
    return(
        <tr>
            <td>
                {bearfly.fType}
            </td>
            <td>
                {bearfly.size}
            </td>
            <td>
                {bearfly.begin}
            </td>
            <td>
                {bearfly.end}
            </td>
        </tr>
    );
}

BearFly.propTypes={fly:PropTypes.shape({fType:PropTypes.string})}