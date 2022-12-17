import React from 'react';
import StaffListItem from '../staff-list-item/staff-list-item.jsx';
import './staff-list.css';

function StaffList({
  staffData,
  onDelete,
  onToggleProp,
  onChangeSalary,
  onChangeName,
}) {
  const elements = staffData.map(({ name, salary, increase, like, id }) => (
    <StaffListItem
      onToggleProp={(event) =>
        onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))
      }
      onChangeSalary={(countSalary) => onChangeSalary(id, countSalary)}
      onChangeName={(inputName) => {
        onChangeName(id, inputName);
      }}
      onDelete={() => onDelete(id)}
      key={id}
      name={name}
      salary={salary}
      increase={increase}
      like={like}
    />
  ));
  return <ul className='app-list list-group'>{elements}</ul>;
}

export default StaffList;
