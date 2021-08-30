import DateInput from './DateInput'
import React, { useState } from "react";
import DateList from './DateList';


function MyFitInterface(prop) {
  const [books, setBooks] = useState([]);
  const handleAdd = book => { setBooks(prevBooks => [...prevBooks, book]); }
  const handleRemove = id => {
    setBooks(prevBooks => prevBooks.filter(o => o.id !== id));
    }

  return (
    <div className="container">
      
          <DateInput onAdd={handleAdd} />
      
      <div className="containerDiary">
        <div className="diaryHeaderContainer">
          <p className="diaryHeaderText">Дата (ДД.ММ.ГГ)</p>
          <p className="diaryHeaderText">Пройдено км</p>
          <p className="diaryHeaderText">Действия</p>
        </div>
        <DateList books={books} onRemove={ handleRemove} />
      </div>
    </div>
  )
}

export default MyFitInterface