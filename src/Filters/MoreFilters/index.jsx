import React from 'react';
import styled from 'styled-components';
import { Col, Grid } from 'react-flexbox-grid';
import Modal from '../Modal';
import RoomsAndBeds from './RoomsAndBeds';
import MoreOptions from './MoreOptions';
import Amenities from './Amenities';
import Facilities from './Facilities';

const Content = styled.div`
  background-color: #fff;
  padding-top: 3rem;
`;

const Wrapper = ({ children }) => (
  <Grid>
    <Col xs={12} lg={8}>
      <Content>{children}</Content>
    </Col>
  </Grid>
);

const initialState = {
  facilities: {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  },
  moreOptions: {
    superhost: false,
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

  superhostToggle = () => {
    this.setState(prevState => ({
      moreOptions: {
        ...prevState.moreOptions,
        superhost: !prevState.moreOptions.superhost,
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
        <Wrapper>
          <RoomsAndBeds
            onIncrement={this.increment}
            onDecrement={this.decrement}
            bedrooms={facilities.bedrooms}
            beds={facilities.beds}
            bathrooms={facilities.bathrooms}
          />
          <MoreOptions onToggle={this.superhostToggle} on={this.state.moreOptions.superhost} />
          <Amenities />
          <Facilities />
        </Wrapper>
      </Modal>
    );
  }
}
