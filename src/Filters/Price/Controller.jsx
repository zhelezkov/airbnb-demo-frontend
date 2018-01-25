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
    max: 0,
  };

  reset = () => {
    this.setState({ min: Number.NEGATIVE_INFINITY, max: Number.POSITIVE_INFINITY });
  };

  save = () => {
    const { min, max } = this.state;
    this.props.onSave(min, max);
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
      >
        <Wrapper>
          <PriceSelector />
        </Wrapper>
        <InfoPanel onCancel={this.props.onCancel} onApply={this.save} />
      </ModalContainer>
    );
  }
}
