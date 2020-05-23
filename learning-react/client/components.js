import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(name) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <BeerList items={this.state.beers} />
      </div>
    );
  }
}

export class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.clearEvent = this.clearEvent.bind(this);
  }

  setText(event) {
    this.updateState(event.target.value);
  }

  handleClick(event) {
    this.handleEvent();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleEvent();
    }
  }

  handleEvent() {
    this.props.onSubmit(this.state.text);
    this.clearEvent()
  }

  clearEvent() {
    this.updateState('');
  }

  updateState(entry) {
    this.setState({text: entry});
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText} onKeyPress={this.handleKeyPress} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

InputArea.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isOptional
};

export class BeerList extends Component {
  render() {
    return this.props.items ?
      (<ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>)
      : null;
  }
}

BeerList.propTypes = {
  items: PropTypes.array.isRequired
};
