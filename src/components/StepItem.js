import PropTypes from 'prop-types'
import ModelData from './ModelData';



function StepItem(props) {
    const { step, onRemove: handleRemove } = props;
    return (
        <div className="itemContainer">
            <div className="dateText" key={step.id}>
                {step.name}
            </div>
            <div className="distText">
                {step.distance}
            </div>
            <div className="containerButton">
                <button className="deleteBtn" onClick={() => handleRemove(step.id)}>X</button>
            </div>
        </div>
    )
}

 StepItem.propTypes = {
     step: PropTypes.instanceOf(ModelData).isRequired,
     onRemove: PropTypes.func.isRequired,
 }

 export default StepItem