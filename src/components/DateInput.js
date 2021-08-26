import PropTypes from 'prop-types'
import { useState } from "react";
import ModelDate from './ModelDate';
import { nanoid } from 'nanoid'

function DateInput(props) {
    
    const {onAdd} = props;
    const [form, setForm] = useState({name: ''});
    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        const book = new ModelDate(nanoid(), form.name);
        onAdd(book);
        setForm({name: ''});
    }
console.log(form)
    return (
        <form className="containerInputDate" onSubmit={handleSubmit}>
            <label htmlFor="dateInput">Дата (ДД.ММ.ГГ)</label>
            <input className="input" id="dateInput" name="name" value={form.name} onChange={handleChange} />
        </form>)
}

DateInput.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default DateInput