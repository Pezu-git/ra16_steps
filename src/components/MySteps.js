import StepInput from './StepInput'
import React, { useState } from "react";
import StepList from './StepList';


function MySteps(prop) {
  const [steps, setSteps] = useState([]);
  const handleAdd = step => {
    setSteps(prevSteps => {
      const prevStepsFilter = prevSteps.filter(o => {
        if(o.name === step.name) {
          step.distance = Number(step.distance) + Number(o.distance)
        }
        return o.name !== step.name
      })
      return [...prevStepsFilter, step]
    });
  }
  const handleRemove = id => {
    setSteps(prevSteps => prevSteps.filter(o => o.id !== id));
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
        <StepList steps={steps} onRemove={ handleRemove} />
      </div>
    </div>
  )
}

export default MySteps