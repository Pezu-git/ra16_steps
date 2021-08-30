import PropTypes from 'prop-types'
import StepItem from './StepItem';
import ModelData from './ModelData';

function StepList(props) {
    
    const { books, onRemove: handleRemove } = props;
    const sortBooks =books.sort((prev, next) => prev.name < next.name ? 1 : -1);
    return (
        <div className="myStepContainer">
            {sortBooks.map(o => <StepItem key={o.id} book={o} onRemove={handleRemove}/>)}
        </div>
    )
}

StepList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(ModelData)).isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default StepList

