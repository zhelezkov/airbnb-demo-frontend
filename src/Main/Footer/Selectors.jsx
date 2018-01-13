import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

import arrowDown from './images/arrowDownSelect.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  outline: none;
  appearance: none;

  background: url(${arrowDown}) right center no-repeat;
  background-origin: content-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  color: #383838;
`;

const LanguageSelector = () => (
  <Select>
    <option>English</option>
  </Select>
);

const CurrencySelector = () => (
  <Select>
    <option>United States dollar</option>
  </Select>
);

export default () => (
  <Col xs={12} md={3}>
    <Wrapper>
      <LanguageSelector />
      <CurrencySelector />
    </Wrapper>
  </Col>
);
