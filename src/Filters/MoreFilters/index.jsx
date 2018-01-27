import React from 'react';
import { Col, Grid } from 'react-flexbox-grid';
import Modal from '../Modal';
import RoomsAndBeds from './RoomsAndBeds';
import MoreOptions from './MoreOptions';
import Amenities from './Amenities';
import Facilities from './Facilities';
import InfoPanel from './InfoPanel';
import ScrollLock from '../../UI/ModalWindow/ScrollLock';
import Content from './icons/Content';

const Wrapper = ({ children, onCancel, onSave }) => (
  <Grid>
    <Col xs={12} lg={8}>
      <Content onCancel={onCancel}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            onCancel,
            onSave,
          }))}
      </Content>
    </Col>
  </Grid>
);

const initialState = {
  roomsAndBeds: {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  },
  moreOptions: {
    superhost: false,
  },
  amenities: {
    heating: false,
    kitchen: false,
    tv: false,
    wifi: false,
    iron: false,
    washer: false,
  },
  facilities: {
    elebator: false,
    pool: false,
    freeParking: false,
    wheelchair: false,
    garden: false,
    bathhouse: false,
  },
};

export default class MoreFiltersController extends React.Component {
  state = initialState;

  onCancel = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  onAmenitiesCheck = (ev) => {
    const amenityName = ev.target.name;
    this.setState(prevState => ({
      amenities: {
        ...prevState.amenities,
        [amenityName]: !prevState.amenities[amenityName],
      },
    }));
  };

  onFacilitiesCheck = (ev) => {
    const facilityName = ev.target.name;
    this.setState(prevState => ({
      facilities: {
        ...prevState.facilities,
        [facilityName]: !prevState.facilities[facilityName],
      },
    }));
  };

  onRoomsAndBedsIncrement = (type) => {
    this.setState(prevState => ({
      roomsAndBeds: {
        ...prevState.roomsAndBeds,
        [type]: prevState.roomsAndBeds[type] + 1,
      },
    }));
  };

  onRoomsAndBedsDecrement = (type) => {
    this.setState(prevState => ({
      roomsAndBeds: {
        ...prevState.roomsAndBeds,
        [type]: prevState.roomsAndBeds[type] - 1,
      },
    }));
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
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
    const {
      roomsAndBeds, moreOptions, amenities, facilities,
    } = this.state;

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
            onIncrement={this.onRoomsAndBedsIncrement}
            onDecrement={this.onRoomsAndBedsDecrement}
            values={roomsAndBeds}
          />
          <MoreOptions onToggle={this.superhostToggle} on={moreOptions.superhost} />
          <Amenities onCheck={this.onAmenitiesCheck} values={amenities} />
          <Facilities onCheck={this.onFacilitiesCheck} values={facilities} />
          <InfoPanel />
          <ScrollLock />
        </Wrapper>
      </Modal>
    );
  }
}
