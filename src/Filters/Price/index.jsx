import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import InfoPanel from '../InfoPanel';
import PriceSelector from './PureFilter';

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default class PriceController extends React.Component {
  state = {
    min: 0,
    max: 100,
  };

  onChange = ({ values }) => {
    const [min, max] = values;
    this.setState({ min, max });
  };

  onCancel = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  reset = () => {
    this.setState({ min: 0, max: 100 });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  render() {
    return (
      <Modal
        {...this.props}
        title="Price"
        buttonTitle="Price"
        onCancel={this.onCancel}
        onReset={this.reset}
        onSave={this.save}
        className="hidden-xs hidden-sm hidden-md"
      >
        <Wrapper>
          <PriceSelector onChange={this.onChange} min={this.state.min} max={this.state.max} />
        </Wrapper>
        <InfoPanel />
      </Modal>
    );
  }
}
