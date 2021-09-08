import PropTypes from 'prop-types'

function StepForms(props) {
  const {onSubmit, valueName, valueDistance, onChangeDate, onChangeDist} = props

   return (
        <div className="containerHeader">
            <form className="containerInputDate">
                <label htmlFor="dateInput">Дата (ДД.ММ.ГГ)</label>
                <input className="input" type="date" name="name" value={valueName} onChange={onChangeDate} />
            </form>
            <form className="containerInputDistance">
                <label htmlFor="distanceInput">Пройдено км</label>
                <input className="input" type="number" name="distance" value={valueDistance} onChange={onChangeDist} />
            </form>
            <button className='buttonOk' onClick={onSubmit} type='submit'>Ok</button>
        </div>
    )
}

StepForms.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  valueDistance: PropTypes.string.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  onChangeDist: PropTypes.func.isRequired,
}

export default StepForms