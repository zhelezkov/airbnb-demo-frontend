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
import RoomType from './RoomType';
import PriceRange from './PriceRange';

const Wrapper = ({ children, onCancel, onSave }) => (
  <Grid>
    <Col xs={12} lg={8}>
      <Content onCancel={onCancel}>
        {React.Children.map(children, (child) => {
          try {
            return React.cloneElement(child, {
              onCancel,
              onSave,
            });
          } catch (e) {
            return child;
          }
        })}
      </Content>
    </Col>
  </Grid>
);

export const initialState = {
  roomsAndBeds: {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  },
  moreOptions: {
    instantBook: false,
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
  homes: {
    entireHome: false,
    privateRoom: false,
    sharedRoom: false,
  },
  price: {
    min: 10,
    max: 1000,
  },
};

export default class MoreFiltersController extends React.Component {
  state = initialState;

  onCancel = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  onCheck = (groupName, ev) => {
    const filterName = ev.currentTarget.name;
    this.setState(prevState => ({
      [groupName]: {
        ...prevState[groupName],
        [filterName]: !prevState[groupName][filterName],
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

  onPriceChange = ({ values }) => {
    const [min, max] = values;
    this.setState({ price: { min, max } });
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  render() {
    const {
      roomsAndBeds, moreOptions, amenities, facilities, homes, price,
    } = this.state;
    const md = matchMedia('(min-width: 768px)').matches;
    const lg = matchMedia('(min-width: 992px)').matches;

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
          {!lg && <RoomType onCheck={this.onCheck} values={homes} />}
          {!lg && <PriceRange onChange={this.onPriceChange} {...price} />}
          <RoomsAndBeds
            onIncrement={this.onRoomsAndBedsIncrement}
            onDecrement={this.onRoomsAndBedsDecrement}
            values={roomsAndBeds}
          />
          <MoreOptions onToggle={ev => this.onCheck('moreOptions', ev)} values={moreOptions} />
          <Amenities onCheck={ev => this.onCheck('amenities', ev)} values={amenities} />
          <Facilities onCheck={ev => this.onCheck('facilities', ev)} values={facilities} />
          <InfoPanel />
          <ScrollLock />
        </Wrapper>
      </Modal>
    );
  }
}
