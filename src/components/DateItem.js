import PropTypes from 'prop-types'
import ModelDate from './ModelDate';

function DateItem(props)
 {
    const { book, onRemove: handleRemove } = props;
    
    return (
        <div className="itemContainer">
            <div className="dateText" key={book.id}>
                {book.name}
            </div>
            <div className="distText">
                {book.distance}
             </div>
             <div className="containerButton">
                <button className="deleteBtn" onClick={() => handleRemove(book.id)}>X</button>
             </div>
             
        </div>   
    )
 }

 DateItem.propTypes = {
     book: PropTypes.instanceOf(ModelDate).isRequired,
     onRemove: PropTypes.func.isRequired,
 }

 export default DateItem