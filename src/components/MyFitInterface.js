import DateInput from './DateInput'
import React, { useState } from "react";
import DateList from './DateList';


function MyFitInterface(prop) {
  const [books, setBooks] = useState([]);
  const handleAdd = book => { setBooks(prevBooks => [...prevBooks, book]);}
  const [filter, setFilter] = useState('');

  const filtered = books.filter( o => o.name.toLowerCase().includes(filter.trim().toLowerCase()))

  return (
    <div>
      <div className="containerHeader">
          <DateInput onAdd={handleAdd} />
        <form className="containerInputDistance">
          <label htmlFor="distanceInput">Пройдено км</label>
          <input className="input" type="text" id="distanceInput"></input>
        </form>
        <div className="buttonOkContainer">
          <button className="buttonOk" id="buttonOk">Ok</button>
        </div>
      </div>
      <div className="containerDiary">
        <div className="diaryHeaderContainer">
          <p className="diaryHeaderText">Дата (ДД.ММ.ГГ)</p>
          <p className="diaryHeaderText">Пройдено км</p>
          <p className="diaryHeaderText">Действия</p>
        </div>
        <DateList books={filtered} />

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