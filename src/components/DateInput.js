import PropTypes from 'prop-types'
import { useState } from "react";
import ModelDate from './ModelDate';
import { nanoid } from 'nanoid'

function DateInput(props) {
    
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
        const book = new ModelDate(nanoid(), form.name, forms.distance);
        console.log(book)
        onAdd(book);
        setFormDate({name: ''});
        setFormDist({distance: ''});
    }
    
    return (
        <div className="containerHeader">
            <form className="containerInputDate" onSubmit={handleSubmit}>
                <label htmlFor="dateInput">Дата (ДД.ММ.ГГ)</label>
                <input className="input"  name="name" value={form.name} onChange={handleChangeDate} />
            </form>
            <form className="containerInputDistance" onSubmit={handleSubmit}>
                <label htmlFor="distanceInput">Пройдено км</label>
                <input className="input"  name="distance" value={forms.distance} onChange={handleChangeDist} />
            </form>
            <button className='buttonOk' onClick={handleSubmit}>Ok</button>
        </div>
    )
}


DateInput.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default DateInput