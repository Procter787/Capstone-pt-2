import React from "react";
import PropTypes from "prop-types"

export default function Fish({ fish }) {
    return(
        <tr>
            <td>
                {fish.fType}
            </td>
            <td>
                <img src={fish.imageUrl} alt="fish" height="80" />
            </td>
        </tr>
    );
}

Fish.propTypes={fish:PropTypes.shape({fType:PropTypes.string,imageUrl:PropTypes.string})}