import React from 'react';
import Picker from './Picker';

export default class Guests extends React.Component {
  increment = (ev) => {
    this.props.onIncrement(ev.target.name);
  };

  decrement = (ev) => {
    this.props.onDecrement(ev.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <Picker
          title="Adults"
          name="adultsCount"
          onIncrement={this.increment}
          onDecrement={this.decrement}
          value={this.props.adultsCount}
        />
        <Picker
          title="Children"
          description="Ages 2 – 12"
          name="childrenCount"
          onIncrement={this.increment}
          onDecrement={this.decrement}
          value={this.props.childrenCount}
        />
        <Picker
          title="Infants"
          description="Under 2"
          name="infantsCount"
          onIncrement={this.increment}
          onDecrement={this.decrement}
          value={this.props.infantsCount}
        />
      </React.Fragment>
    );
  }
}
