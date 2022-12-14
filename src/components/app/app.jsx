import './App.css';
import React from 'react';
import AppInfo from '../app-info/app-info.jsx';
import SearchPanel from '../search-panel/search-panel.jsx';
import AppFilter from '../app-filter/app-filter.jsx';
import StaffList from '../staff-list/staff-list.jsx';
import StaffAddItem from '../staff-add-form/staff-add-item.jsx';

function App() {
  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>
      <StaffList />
      <StaffAddItem />
    </div>
  );
}

export default App;
