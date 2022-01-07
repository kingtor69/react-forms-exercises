import React, {useState} from 'react';

const Box = ({ color, width, height, testId }) => {
    return (
        <div 
            className="Box"
            style={{
                backgroundColor: color,
                width: `${width}px`,
                height: `${height}px`
            }}
            data-testid={testId}
        >
        </div>
    )
}

export default Box;
