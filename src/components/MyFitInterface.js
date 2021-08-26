

import MyFitActivity from "./MyFitActivity"

function MyFitInterface(prop) {


  return (
    <div>
      <div className="containerHeader">
        <form className="containerInputDate">
          <label htmlFor="dateInput">Дата (ДД.ММ.ГГ)</label>
          <input className="input" type="text" id="dateInput"></input>
        </form>
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