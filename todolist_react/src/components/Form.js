import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress, onUpdate, color }) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
            
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
            {/* <div className="update-button" onClick={onUpdate}>
                Update
            </div> */}
        </div>
        

        
        //버튼을 추가할 메서드?
    )
}

export default Form;