import React from 'react';
import InstantBook from './InstantBook';
import { MenuButton } from './styled';
import DatePicker from './DatePicker/Controller';
import Guests from './Guests/Controller';
import Rooms from './Rooms/Controller';
import Price from './Price/Controller';

const isOpen = (filter, openedFilter) => filter === openedFilter;

const WrapperIngestor = ({
  onOpen, onClose, openedFilter, children,
}) =>
  children.map((child) => {
    const childName = child.type.name;
    return React.cloneElement(child, {
      onOpen: () => onOpen(childName),
      onClose: () => onClose(childName),
      isOpen: isOpen(childName, openedFilter),
      key: childName,
    });
  });

export default class Containers extends React.Component {
  state = {
    openedFilter: null,
  };

  open = (filterName) => {
    this.setState({ openedFilter: filterName });
  };

  close = () => {
    this.setState({ openedFilter: null });
  };

  render() {
    return (
      <WrapperIngestor
        onOpen={this.open}
        onClose={this.close}
        openedFilter={this.state.openedFilter}
      >
        <DatePicker onSave={this.props.onDatesSave} />
        <Guests onSave={this.props.onGuestsSave} />
        <Rooms onSave={this.props.onRoomsSave} />
        <Price onSave={this.props.onPriceSave} />
        <InstantBook />
        <MenuButton>More filters</MenuButton>
      </WrapperIngestor>
    );
  }
}
