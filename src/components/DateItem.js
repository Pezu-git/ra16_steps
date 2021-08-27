import PropTypes from 'prop-types'
import ModelDate from './ModelDate';

function DateItem(props)
 {
     const {book} = props;
     return (
         <div className="itemContainer">
            <div className="dateText" key={book.id}>
                {book.name}
            </div>
            <div className="distText">
                {book.distance}
            </div>
            <button className="deleteBtn"></button>
         </div>
         
     )
 }

 DateItem.propTypes = {
     book: PropTypes.instanceOf(ModelDate).isRequired
 }

 export default DateItem