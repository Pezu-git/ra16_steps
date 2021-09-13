import PropTypes from 'prop-types'
import React, { useState } from "react";
import ModelData from './ModelData';
import { nanoid } from 'nanoid'
import StepForms from './StepForms'

function StepInput(props) {
    
    const {onAdd} = props;
    const [form, setFormDate] = useState({name: ''});
    const [forms, setFormDist] = useState({distance: ''});
    const handleChangeDate = evt => {
        const {name, value} = evt.target;
        setFormDate(prevForm => ({...prevForm, [name]: value}));
    }
    const handleChangeDist = evt => {
        const {name, value} = evt.target;
        setFormDist(prevForm => ({...prevForm, [name]: value}));
        
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        if (form.name !== '' && forms.distance !== '') {
            const step = new ModelData(nanoid(), form.name, forms.distance);
            onAdd(step);
            setFormDate({name: ''});
            setFormDist({distance: ''});
        }   
    }
    
    return (
        <React.Fragment>
            <StepForms 
                onSubmit={handleSubmit} 
                valueName={form.name}
                valueDistance={forms.distance} 
                onChangeDate={handleChangeDate}
                onChangeDist={handleChangeDist} />
        </React.Fragment>  
    )
}


StepInput.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default StepInput