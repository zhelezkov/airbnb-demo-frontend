import React from 'react';
import styled from 'styled-components';
import ModalContainer from '../Container';
import Rooms from './index';
import InfoPanel from '../InfoPanel';
import { getButtonTitle } from './helpers';

const Wrapper = styled.div`
  width: 20.375rem;
`;

export default class RoomsController extends React.Component {
  state = {
    entireHome: false,
    privateRoom: false,
    sharedRoom: false,
  };

  reset = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  selectHomeType = (homeType) => {
    this.setState(prevState => ({ [homeType]: !prevState[homeType] }));
  };

  render() {
    const { entireHome, privateRoom, sharedRoom } = this.state;

    return (
      <ModalContainer
        {...this.props}
        title="Room type"
        buttonTitle={getButtonTitle(entireHome, privateRoom, sharedRoom)}
        onReset={this.reset}
        onSave={this.save}
        className="hidden-xs hidden-sm hidden-md"
      >
        <Wrapper>
          <Rooms {...this.state} onSelect={this.selectHomeType} />
        </Wrapper>
        <InfoPanel onCancel={this.props.onCancel} onApply={this.save} />
      </ModalContainer>
    );
  }
}
