import React from 'react';
import StaffListItem from '../staff-list-item/staff-list-item.jsx';
import './staff-list.css';

function StaffList() {
  return (
    <ul className='app-list list-group'>
      <StaffListItem />
      <StaffListItem />
      <StaffListItem />
    </ul>
  );
}

export default StaffList;
