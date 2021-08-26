import PropTypes from 'prop-types'
import DateItem from './DateItem';
import ModelDate from './ModelDate';

function DateList(props) {
    console.log(props)
    const {books} = props;
    return (
        <ul>
            {books.map(o => <DateItem key={o.id} book={o} />)}
        </ul>
    )
}

DateList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(ModelDate)).isRequired
}

export default DateList

