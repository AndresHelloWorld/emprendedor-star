import React from 'react';
import '../CSS/box.css'
const Box = (props) => {
    return(
        <div className="contenedorMain">
            {props.children}
        </div>
    )
}
export default Box