import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import InfoPanel from '../InfoPanel';
import Facilities from './Facilities';
import { Col, Grid, Row } from 'react-flexbox-grid';

const Wrapper = styled.div`
  margin-left: 5.0625rem;
  margin-right: 5.0625rem;
`;

const initialState = {
  facilities: {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  },
};

export default class MoreFiltersController extends React.Component {
  state = {
    ...initialState,
  };

  onCancel = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  getSavedState = filterName => this.state[filterName];

  reset = () => {
    this.setState({ ...initialState });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  increment = (type) => {
    this.setState(prevState => ({
      facilities: {
        ...prevState.facilities,
        [type]: prevState.facilities[type] + 1,
      },
    }));
  };

  decrement = (type) => {
    this.setState(prevState => ({
      facilities: {
        ...prevState.facilities,
        [type]: prevState.facilities[type] - 1,
      },
    }));
  };

  render() {
    const { facilities } = this.state;

    return (
      <Modal
        {...this.props}
        title="More filters"
        buttonTitle="More filters"
        onCancel={this.onCancel}
        onReset={this.reset}
        onSave={this.save}
        fillAllSpace
      >
        <Facilities
          onIncrement={this.increment}
          onDecrement={this.decrement}
          bedrooms={facilities.bedrooms}
          beds={facilities.beds}
          bathrooms={facilities.bathrooms}
        />
        <InfoPanel />
      </Modal>
    );
  }
}
