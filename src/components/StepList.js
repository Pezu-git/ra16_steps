import PropTypes from 'prop-types'
import StepItem from './StepItem';
import ModelData from './ModelData';

function StepList(props) {
    
    const { steps, onRemove: handleRemove } = props;
    const sortSteps = [...steps].sort((prev, next) => prev.name < next.name ? 1 : -1);
    
    return (
        <div className="myStepContainer">
            {sortSteps.map(o => <StepItem key={o.id} stepName = {o.name} step={o} onRemove={handleRemove}/>)}
        </div>
    )
}

StepList.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.instanceOf(ModelData)).isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default StepList

