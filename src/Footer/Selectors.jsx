import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

import arrowDown from '../assets/arrow-down.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Dropdown = styled.div`
  width: 100%;
  flex: 1 1 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  margin-bottom: 1rem;
  border-radius: 4px;
  margin-right: 1rem;
`;

const Select = styled.select`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  outline: none;
  box-sizing: padding-box;
  appearance: none;
  background: url(${arrowDown}) right center no-repeat;
  background-origin: content-box;
  color: #383838;
`;

const LanguageSelector = () => (
  <Dropdown>
    <Select>
      <option>English</option>
    </Select>
  </Dropdown>
);

const CurrencySelector = () => (
  <Dropdown>
    <Select>
      <option>United States dollar</option>
    </Select>
  </Dropdown>
);

export default () => (
  <Col xs={12} md={3}>
    <Wrapper>
      <LanguageSelector />
      <CurrencySelector />
    </Wrapper>
  </Col>
);
