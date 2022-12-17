import { v4 as uuidv4 } from 'uuid';
import './App.css';
import React from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      searchValue: '',
      data: [
        {
          name: 'Артем В.',
          salary: 800,
          increase: false,
          like: true,
          id: uuidv4(),
        },
        {
          name: 'Дмитрий Г.',
          salary: 30400,
          increase: true,
          like: false,
          id: uuidv4(),
        },
        {
          name: 'Иван С.',
          salary: 15500,
          increase: false,
          like: false,
          id: uuidv4(),
        },
      ],
    };
  }

  deleteStaff = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((staff) => staff.id !== id),
      };
    });
  };

  addStaff = (name, salary) => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        { name, salary, increase: false, like: false, id: uuidv4() },
      ],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  onChangeSalary = (id, countSalary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: +countSalary };
        }
        return item;
      }),
    }));
  };

  onChangeName = (id, name) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, name };
        }
        return item;
      }),
    }));
  };

  searchStaff = (items, data) => {
    if (items.length === 0) {
      return data;
    }
    return data.filter((obj) => obj.name.indexOf(items) > -1);
  };

  filterStaff = (data, filter) => {
    switch (filter) {
      case 'increase':
        return data.filter((obj) => obj.increase);
      case 'salary':
        return data.filter((obj) => obj.salary > 1000);
      default:
        return data;
    }
  };

  onUpdateSearch = (string) => {
    this.setState({
      searchValue: string,
    });
  };

  onUpdateFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    const { data, searchValue, filter } = this.state;
    const {
      addStaff,
      filterStaff,
      searchStaff,
      onChangeSalary,
      onToggleProp,
      deleteStaff,
      onUpdateFilter,
      onUpdateSearch,
      onChangeName,
    } = this;
    const countStaff = data.length;
    const countIncrease = data.filter((obj) => obj.increase).length;
    const visibleData = filterStaff(searchStaff(searchValue, data), filter);
    return (
      <div className='app'>
        <AppInfo
          dataStaff={data}
          countStaff={countStaff}
          countIncrease={countIncrease}
        />
        <div className='search-panel'>
          <SearchPanel onUpdateSearch={onUpdateSearch} />
          <AppFilter valuefilter={filter} onUpdateFilter={onUpdateFilter} />
        </div>
        <StaffList
          onChangeName={onChangeName}
          onChangeSalary={onChangeSalary}
          onToggleProp={onToggleProp}
          onDelete={deleteStaff}
          staffData={visibleData}
        />
        <StaffAddForm onAdd={addStaff} />
      </div>
    );
  }
}

export default App;
