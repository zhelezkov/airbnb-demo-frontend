import React from 'react';
import ModalContainer from '../Container';
import Rooms from './index';
import InfoPanel from '../InfoPanel';

export default class RoomsController extends React.Component {
  state = {
    entireHome: false,
    privateRoom: false,
    sharedRoom: false,
  };

  reset = () => {
    this.setState({
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
    });
  };

  save = () => {
    const { entireHome, privateRoom, sharedRoom } = this.state;
    this.props.onSave(entireHome, privateRoom, sharedRoom);
    this.props.onClose();
  };

  selectHomeType = (homeType) => {
    this.setState(prevState => ({ [homeType]: !prevState[homeType] }));
  };

  render() {
    return (
      <ModalContainer
        {...this.props}
        title="Room type"
        buttonTitle="Room type"
        onReset={this.reset}
        onSave={this.save}
      >
        <Rooms
          {...this.state}
          onSelect={this.selectHomeType}
        />
        <InfoPanel onCancel={this.props.onCancel} onApply={this.save} />
      </ModalContainer>
    );
  }
}
