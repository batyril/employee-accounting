import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  onUpdateSearch = (event) => {
    const searchValue = event.target.value;
    this.setState({
      searchValue,
    });
    this.props.onUpdateSearch(searchValue);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='найти сотрудника'
        value={this.state.searchValue}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
