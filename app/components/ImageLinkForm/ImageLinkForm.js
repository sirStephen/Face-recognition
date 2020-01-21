import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className='image-form-container'>
            <p className='center'>
                This Magic Brain will detect faces in your pictures. Give it a try.
            </p>
            <div className='center'>
                <form className='pa4 br3 shadow-5'>
                    <input 
                        className='pa2 w-70' 
                        type="text"
                        onChange={onInputChange}
                    />
                    <button 
                        className='w-30 link ph3 pv2 dib white btn-black pointer dim'
                        onClick={onButtonSubmit}
                    >
                        Detect
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ImageLinkForm;