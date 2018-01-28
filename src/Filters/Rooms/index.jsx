import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import Rooms from './PureFilter';
import InfoPanel from '../InfoPanel';
import { getButtonTitle } from './helpers';

const Wrapper = styled.div`
  width: 20.375rem;
  padding: 1rem;
`;

const initialState = {
  entireHome: false,
  privateRoom: false,
  sharedRoom: false,
};

export default class RoomsController extends React.Component {
  state = initialState;

  onCancel = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  selectHomeType = (ev) => {
    const homeType = ev.target.name;
    this.setState(prevState => ({ [homeType]: !prevState[homeType] }));
  };

  render() {
    const { entireHome, privateRoom, sharedRoom } = this.state;

    return (
      <Modal
        {...this.props}
        title="Room type"
        buttonTitle={getButtonTitle(entireHome, privateRoom, sharedRoom)}
        onCancel={this.onCancel}
        onReset={this.reset}
        onSave={this.save}
        className="hidden-xs hidden-sm hidden-md"
      >
        <Wrapper>
          <Rooms values={this.state} onCheck={this.selectHomeType} />
        </Wrapper>
        <InfoPanel />
      </Modal>
    );
  }
}
