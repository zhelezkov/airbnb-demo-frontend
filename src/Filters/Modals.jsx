import React from 'react';
import Guests from './Guests';
import Rooms from './Rooms';
import Price from './Price';
import InstantBook from './InstantBook';
import { MenuButton } from './styled';
import DatePickerContainer from './DatePicker/Container';

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

export default class Modals extends React.Component {
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
        <DatePickerContainer onSave={this.props.onDatesSave} />
        <Guests onSave={this.props.onGuestsSave} />
        <Rooms onSave={this.props.onRoomTypesSave} />
        <Price />
        <InstantBook />
        <MenuButton>More filters</MenuButton>
      </WrapperIngestor>
    );
  }
}
