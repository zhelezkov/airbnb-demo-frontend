import React from 'react';
import styled from 'styled-components';
import Counter from '../../UI/Counter';
import { SectionWrapper, Title } from './styled';

const Picker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Description = styled.span`
  font-weight: 100;
  width: 5rem;
`;

export default class RoomsAndBeds extends React.Component {
  increment = (ev) => {
    this.props.onIncrement(ev.target.name);
  };

  decrement = (ev) => {
    this.props.onDecrement(ev.target.name);
  };

  render() {
    const { bedrooms, beds, bathrooms } = this.props.values;

    return (
      <SectionWrapper>
        <Title>Rooms and beds</Title>
        <Picker>
          <Description>Bedrooms</Description>
          <Counter
            onIncrement={this.increment}
            onDecrement={this.decrement}
            value={bedrooms}
            name="bedrooms"
            decrementDisabled={bedrooms <= 0}
          />
        </Picker>
        <Picker>
          <Description>Beds</Description>
          <Counter
            onIncrement={this.increment}
            onDecrement={this.decrement}
            value={beds}
            name="beds"
            decrementDisabled={beds <= 0}
          />
        </Picker>
        <Picker>
          <Description>Bathrooms</Description>
          <Counter
            onIncrement={this.increment}
            onDecrement={this.decrement}
            value={bathrooms}
            name="bathrooms"
            decrementDisabled={bathrooms <= 0}
          />
        </Picker>
      </SectionWrapper>
    );
  }
}
