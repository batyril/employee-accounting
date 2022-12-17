import React from 'react';
import './app-filter.css';
import { v4 as uuidv4 } from 'uuid';
class AppFilter extends React.Component {
  handlerFilter = (event) => {
    const { onUpdateFilter } = this.props;
    const valueFilter = event.currentTarget.getAttribute('data-filter');
    onUpdateFilter(valueFilter);
  };

  render() {
    const { handlerFilter } = this;
    const { valuefilter } = this.props;
    const buttonsData = [
      { name: 'all', text: 'Все сотрудники' },
      {
        name: 'increase',
        text: 'На повышение',
      },
      {
        name: 'salary',
        text: 'З/П больше 1000$',
      },
    ];

    const buttons = buttonsData.map(({ name, text }) => {
      const atcive = valuefilter === name;
      const clazz = atcive ? 'btn btn-light' : 'btn btn-outline-light';
      return (
        <button
          data-filter={name}
          onClick={handlerFilter}
          className={clazz}
          type='button'
          key={uuidv4()}
        >
          {text}
        </button>
      );
    });

    return <div className='btn-group'>{buttons}</div>;
  }
}

export default AppFilter;
