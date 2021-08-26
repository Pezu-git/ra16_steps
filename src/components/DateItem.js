import PropTypes from 'prop-types'
import ModelDate from './ModelDate';

function DateItem(props)
 {
     const {book} = props;
     return (
         <li key={book.id}>
            {book.name}
         </li>
     )
 }

 DateItem.propTypes = {
     book: PropTypes.instanceOf(ModelDate).isRequired
 }

 export default DateItem