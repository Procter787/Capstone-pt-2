import React from "react";
import PropTypes from "prop-types"

export default function ProvoFly({ provofly }) {
    return(
        <tr>
            <td>
                {provofly.fType}
            </td>
            <td>
                {provofly.size}
            </td>
            <td>
                {provofly.begin}
            </td>
            <td>
                {provofly.end}
            </td>
        </tr>
    );
}

ProvoFly.propTypes={fly:PropTypes.shape({fType:PropTypes.string})}