import StepInput from './StepInput'
import React, { useState } from "react";
import StepList from './StepList';


function MySteps(prop) {
  const [books, setBooks] = useState([]);
  const handleAdd = book => { setBooks(prevBooks => [...prevBooks, book]); }
  const handleRemove = id => {
    setBooks(prevBooks => prevBooks.filter(o => o.id !== id));
    }

  return (
    <div className="container">
      
          <StepInput onAdd={handleAdd} />
      
      <div className="containerDiary">
        <div className="diaryHeaderContainer">
          <p className="diaryHeaderText">Дата (ДД.ММ.ГГ)</p>
          <p className="diaryHeaderText">Пройдено км</p>
          <p className="diaryHeaderText">Действия</p>
        </div>
        <StepList books={books} onRemove={ handleRemove} />
      </div>
    </div>
  )
}

export default MySteps