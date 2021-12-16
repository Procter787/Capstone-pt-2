import React from "react";
import PropTypes from "prop-types"

export default function LoganFly({ loganfly }) {
    return(
        <tr>
            <td>
                {loganfly.fType}
            </td>
            <td>
                {loganfly.size}
            </td>
            <td>
                {loganfly.begin}
            </td>
            <td>
                {loganfly.end}
            </td>
        </tr>
    );
}

LoganFly.propTypes={fly:PropTypes.shape({fType:PropTypes.string})}