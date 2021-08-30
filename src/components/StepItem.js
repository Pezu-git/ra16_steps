import PropTypes from 'prop-types'
import ModelData from './ModelData';

function StepItem(props)
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

 StepItem.propTypes = {
     book: PropTypes.instanceOf(ModelData).isRequired,
     onRemove: PropTypes.func.isRequired,
 }

 export default StepItem