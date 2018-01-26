import React from 'react';
import styled from 'styled-components';
import { Grid, Row as BasicRow } from 'react-flexbox-grid';
import { MenuButton } from './styled';
import DatePicker from './DatePicker/Controller';
import Guests from './Guests/Controller';
import Rooms from './Rooms/Controller';
import Price from './Price/Controller';
import InstantBook from './InstantBook/Controller';

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

const isOpen = (filter, openedFilter) => filter === openedFilter;

const WrapperIngestor = ({
  onOpen, onClose, openedFilter, children, getSavedState, onSave,
}) =>
  children.map((child) => {
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
      min: 0,
      max: 100,
    },

    instantBook: {
      activated: false,
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
        <Grid>
          <Row>
            <WrapperIngestor
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
              {/*<InstantBook name="instantBook" />*/}
              {/*<MenuButton name="moreFilters">More filters</MenuButton>*/}
            </WrapperIngestor>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Filters;
