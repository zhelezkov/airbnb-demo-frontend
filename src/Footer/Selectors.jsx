import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

import arrowDown from './images/arrow-down.svg';

const Dropdown = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  margin-bottom: 1rem;
  border-radius: 4px;
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
`;

const Option = styled.option`
  color: rgba(72, 72, 72, 0.2);
`;

const LanguageSelector = () => (
  <Dropdown>
    <Select>
      <Option>English</Option>
    </Select>
  </Dropdown>
);

const CurrencySelector = () => (
  <Dropdown>
    <Select>
      <Option>United States dollar</Option>
    </Select>
  </Dropdown>
);

export default () => (
  <Col sm={6} md={3} lg={3}>
    <LanguageSelector />
    <CurrencySelector />
  </Col>
);
