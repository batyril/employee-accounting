import React from 'react';
import StaffListItem from '../staff-list-item/staff-list-item.jsx';
import './staff-list.css';

function StaffList({ staffData, onDelete }) {
  const elements = staffData.map(({ name, salary, increase, id }) => (
    <StaffListItem
      onDelete={() => onDelete(id)}
      key={id}
      name={name}
      salary={salary}
      increase={increase}
    />
  ));
  return <ul className='app-list list-group'>{elements}</ul>;
}

export default StaffList;
