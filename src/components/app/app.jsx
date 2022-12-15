import { v4 as uuidv4 } from 'uuid';
import './App.css';
import React from 'react';
import AppInfo from '../app-info/app-info.jsx';
import SearchPanel from '../search-panel/search-panel.jsx';
import AppFilter from '../app-filter/app-filter.jsx';
import StaffList from '../staff-list/staff-list.jsx';
import StaffAddForm from '../staff-add-form/staff-add-form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Артем В.', salary: 800, increase: true, id: uuidv4() },
        { name: 'Дмитрий Г.', salary: 30400, increase: false, id: uuidv4() },
        { name: 'Иван С.', salary: 15500, increase: true, id: uuidv4() },
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
      data: [...data, { name, salary, increase: false, id: uuidv4() }],
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className='app'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <StaffList onDelete={this.deleteStaff} staffData={data} />
        <StaffAddForm onAdd={this.addStaff} />
      </div>
    );
  }
}

export default App;
