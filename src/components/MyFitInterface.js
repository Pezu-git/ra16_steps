import DateInput from './DateInput'
import React, { useState } from "react";
import DateList from './DateList';


function MyFitInterface(prop) {
  const [books, setBooks] = useState([]);
  const handleAdd = book => { setBooks(prevBooks => [...prevBooks, book]);}
  const [filter, setFilter] = useState('');
  console.log(books)

  return (
    <div className="container">
      
          <DateInput onAdd={handleAdd} />
      
      <div className="containerDiary">
        <div className="diaryHeaderContainer">
          <p className="diaryHeaderText">Дата (ДД.ММ.ГГ)</p>
          <p className="diaryHeaderText">Пройдено км</p>
          <p className="diaryHeaderText">Действия</p>
        </div>
        <DateList books={books} />

        <div className="diaryTableContainer">
          <div className="dateColumn">

          </div>
          <div className="distanceColumn">
            
          </div>
          <div className="todoColumn">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyFitInterface