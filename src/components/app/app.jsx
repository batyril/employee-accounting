import './App.css';
import React, { Component } from 'react';
import AppInfo from '../app-info/app-info.jsx';
import SearchPanel from '../search-panel/search-panel.jsx';
import AppFilter from '../app-filter/app-filter.jsx';
import StaffList from '../staff-list/staff-list.jsx';
import StaffAddItem from '../staff-add-form/staff-add-item.jsx';

function App() {
  const data = [
    { name: 'Артем В.', salary: 800, increase: true, id: 1 },
    { name: 'Дмитрий Г.', salary: 30400, increase: false, id: 2 },
    { name: 'Иван С.', salary: 15500, increase: true, id: 3 },
  ];

  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>
      <StaffList staffData={data} />
      <StaffAddItem />
    </div>
  );
}

export default App;
