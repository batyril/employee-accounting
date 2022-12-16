import React from 'react';
import './app-info.css';

function AppInfo(props) {
  const { countStaff, countIncrease } = props;
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании </h1>
      <h2>Общее количество сотрудников: {countStaff} </h2>
      <h2>Премию получать: {countIncrease} </h2>
    </div>
  );
}

export default AppInfo;
