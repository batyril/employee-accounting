import React from 'react';
import './staff-list-item.css';

class StaffListItem extends React.Component {
  onChangeSalary = (event) => {
    const { onChangeSalary } = this.props;
    onChangeSalary(event.target.value);
  };
  onChangeName = (event) => {
    const { onChangeName } = this.props;
    onChangeName(event.target.value);
  };
  render() {
    const { name, salary, onDelete, onToggleProp, increase, like } = this.props;
    const className = 'list-group-item d-flex justify-content-between';
    const classIncrease = increase ? ' increase' : ' ';
    const classLike = like ? ' like' : ' ';
    return (
      <li className={className + classIncrease + classLike}>
        <input
          onChange={this.onChangeName}
          onClick={onToggleProp}
          className='list-group-item-label'
          data-toggle='like'
          value={name}
        />
        <input
          onChange={this.onChangeSalary}
          type='number'
          className='list-group-item-input'
          value={salary}
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

          <button
            onClick={onDelete}
            type='button'
            className='btn-trash btn-sm '
          >
            <i className='fas fa-trash' />
          </button>
          <i className='fas fa-star' />
        </div>
      </li>
    );
  }
}

export default StaffListItem;
