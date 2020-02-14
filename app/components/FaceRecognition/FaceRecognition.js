import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    const displayMultipleBoxes = boxes.map((box, i) => {
            return(
                <div 
                    key={i}
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                    className='bounding-box'
                ></div>
            );
        });
    
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img 
                    id='inputImage'
                    src={imageUrl}  
                    alt="" 
                    width='500px'
                    height='auto'
                />
                {displayMultipleBoxes}
            </div>
        </div>
    )
}

export default FaceRecognition;