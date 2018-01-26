import React from 'react';
import styled from 'styled-components';
import ValueChanger from '../../UI/ValueChanger';
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

export default class Facilities extends React.Component {
  increment = (ev) => {
    this.props.onIncrement(ev.target.name);
  };

  decrement = (ev) => {
    this.props.onDecrement(ev.target.name);
  };

  render() {
    const { bedrooms, beds, bathrooms } = this.props;

    return (
      <SectionWrapper>
        <Title>Rooms and beds</Title>
        <Picker>
          <Description>Bedrooms</Description>
          <ValueChanger
            onIncrement={this.increment}
            onDecrement={this.decrement}
            value={bedrooms}
            name="bedrooms"
          />
        </Picker>
        <Picker>
          <Description>Beds</Description>
          <ValueChanger
            onIncrement={this.increment}
            onDecrement={this.decrement}
            value={beds}
            name="beds"
          />
        </Picker>
        <Picker>
          <Description>Bathrooms</Description>
          <ValueChanger
            onIncrement={this.increment}
            onDecrement={this.decrement}
            value={bathrooms}
            name="bathrooms"
          />
        </Picker>
      </SectionWrapper>
    );
  }
}
