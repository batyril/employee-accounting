import React from 'react';
import './staff-list-item.css';

function StaffListItem(props) {
  const { name, salary, onDelete, onToggleProp, increase, like } = props;
  const className = 'list-group-item d-flex justify-content-between';
  const classIncrease = increase ? ' increase' : ' ';
  const classLike = like ? ' like' : ' ';
  return (
    <li className={className + classIncrease + classLike}>
      <span
        onClick={onToggleProp}
        className='list-group-item-label'
        data-toggle='like'
      >
        {name}
      </span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={`${salary}$`}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          onClick={onToggleProp}
          type='button'
          className='btn-cookie btn-sm '
          data-toggle='increase'
        >
          <i className='fas fa-cookie' />
        </button>

        <button onClick={onDelete} type='button' className='btn-trash btn-sm '>
          <i className='fas fa-trash' />
        </button>
        <i className='fas fa-star' />
      </div>
    </li>
  );
}

export default StaffListItem;
