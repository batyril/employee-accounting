import React from 'react';
import './staff-list-item.css';

class StaffListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
      like: false,
    };
  }

  handleIncrease = () => {
    this.setState((state) => ({
      increase: !state.increase,
    }));
  };

  handleLike = () => {
    this.setState((state) => ({
      like: !state.like,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, like } = this.state;
    const className = 'list-group-item d-flex justify-content-between';
    const classIncrease = increase ? ' increase' : ' ';
    const classLike = like ? ' like' : ' ';
    return (
      <li className={className + classIncrease + classLike}>
        <span onClick={this.handleLike} className='list-group-item-label'>
          {name}
        </span>
        <input
          type='text'
          className='list-group-item-input'
          defaultValue={`${salary}$`}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            onClick={this.handleIncrease}
            type='button'
            className='btn-cookie btn-sm '
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
