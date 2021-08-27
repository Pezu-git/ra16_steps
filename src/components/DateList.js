import PropTypes from 'prop-types'
import DateItem from './DateItem';
import ModelDate from './ModelDate';

function DateList(props) {
    console.log(props)
    const {books} = props;
    return (
        <div className="myStepContainer">
            {books.map(o => <DateItem key={o.id} book={o} />)}
        </div>
    )
}

DateList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(ModelDate)).isRequired
}

export default DateList

