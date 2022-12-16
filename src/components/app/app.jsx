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

  render() {
    const { data } = this.state;
    const countStaff = data.length;
    const countIncrease = data.filter((obj) => obj.increase).length;
    return (
      <div className='app'>
        <AppInfo
          dataStaff={data}
          countStaff={countStaff}
          countIncrease={countIncrease}
        />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <StaffList
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteStaff}
          staffData={data}
        />
        <StaffAddForm onAdd={this.addStaff} />
      </div>
    );
  }
}

export default App;
