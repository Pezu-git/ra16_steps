import PropTypes from 'prop-types'
import DateItem from './DateItem';
import ModelDate from './ModelDate';

function DateList(props) {
    
    const { books, onRemove: handleRemove } = props;
    const sortBooks =books.sort((prev, next) => prev.name < next.name ? 1 : -1);
    return (
        <div className="myStepContainer">
            {sortBooks.map(o => <DateItem key={o.id} book={o} onRemove={handleRemove}/>)}
        </div>
    )
}

DateList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(ModelDate)).isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default DateList

