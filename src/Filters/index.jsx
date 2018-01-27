import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row as BasicRow } from 'react-flexbox-grid';
import DatePicker from './DatePicker';
import Guests from './Guests';
import Rooms from './Rooms';
import Price from './Price';
import InstantBook from './InstantBook';
import MoreFilters, { initialState as initialMoreState } from './MoreFilters';

const Wrapper = styled.div`
  position: fixed;
  top: 4.9675rem;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled(BasicRow)`
  flex-wrap: nowrap;
`;

const ButtonsWrapper = ({ children }) => (
  <Grid>
    <Col xs={12}>
      <Row>{children}</Row>
    </Col>
  </Grid>
);

const isOpen = (filter, openedFilter) => filter === openedFilter;

const Ingestor = ({
  onOpen, onClose, openedFilter, children, getSavedState, onSave,
}) =>
  React.Children.map(children, (child) => {
    const filterName = child.props.name;
    return React.cloneElement(child, {
      getSavedState: () => getSavedState(filterName),
      onSave: localState => onSave(filterName, localState),
      onOpen: () => onOpen(filterName),
      onClose: () => onClose(filterName),
      isOpen: isOpen(filterName, openedFilter),
      key: filterName,
    });
  });

class Filters extends React.Component {
  state = {
    openedFilter: null,
    dates: {
      startDate: null,
      endDate: null,
    },

    guests: {
      adultsCount: 0,
      childrenCount: 0,
      infantsCount: 0,
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

    instantBook: {
      activated: false,
    },

    moreFilters: {
      ...initialMoreState,
    },
  };

  onSave = (filterName, localFilterState) => {
    this.setState({ [filterName]: { ...localFilterState } });
  };

  getSavedState = filterName => this.state[filterName];

  open = (filterName) => {
    this.setState({ openedFilter: filterName });
  };

  close = () => {
    this.setState({ openedFilter: null });
  };

  render() {
    return (
      <Wrapper>
        <ButtonsWrapper>
          <Ingestor
            onOpen={this.open}
            onClose={this.close}
            onSave={this.onSave}
            openedFilter={this.state.openedFilter}
            getSavedState={this.getSavedState}
          >
            <DatePicker name="dates" />
            <Guests name="guests" />
            <Rooms name="homes" />
            <Price name="price" />
            <InstantBook name="instantBook" />
            <MoreFilters name="moreFilters" />
          </Ingestor>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

export default Filters;
