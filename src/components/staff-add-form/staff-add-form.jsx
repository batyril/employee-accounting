import React from 'react';
import './staff-add-form.sass';

class StaffAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, salary } = this.state;
    const { onAdd } = this.props;
    onAdd(name, salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  handleValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.handleSubmit} className='add-form d-flex'>
          <input
            required
            name='name'
            value={name}
            onChange={this.handleValueChange}
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
          />
          <input
            required
            name='salary'
            value={salary}
            onChange={this.handleValueChange}
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default StaffAddForm;
