import React from 'react';
import styled from 'styled-components';
import ModalContainer from '../Container';
import InfoPanel from '../InfoPanel';
import PriceSelector from './index';

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
        title="Price"
        buttonTitle="Price"
        onReset={this.reset}
        onSave={this.save}
        className="hidden-xs hidden-sm hidden-md"
      >
        <Wrapper>
          <PriceSelector onChange={this.onChange} min={this.state.min} max={this.state.max} />
        </Wrapper>
        <InfoPanel onCancel={this.props.onCancel} onApply={this.save} />
      </ModalContainer>
    );
  }
}
