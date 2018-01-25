import React from 'react';
import ModalContainer from '../Container';
import InfoPanel from '../InfoPanel';
import InstantBook from './index';

export default class InstantBookController extends React.Component {
  state = {
    activated: false,
  };

  reset = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  render() {
    return (
      <ModalContainer
        {...this.props}
        title="Instant book"
        buttonTitle="Instant book"
        onReset={this.reset}
        onSave={this.save}
        className="hidden-xs hidden-sm hidden-md"
      >
        <InstantBook />
        <InfoPanel onCancel={this.props.onCancel} onApply={this.save} />
      </ModalContainer>
    );
  }
}
