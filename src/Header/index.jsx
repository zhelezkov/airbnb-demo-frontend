import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-flexbox-grid';
import SearchBar from './SearchBar';

import Menu from './Menu';

import logo from './icons/logo.svg';
import arrowDown from '../assets/arrow-down.svg';

const Wrapper = styled.div`
  height: 5rem;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  padding-top: 1rem;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 0.5rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Content>
          <Col xs={2} md={1}>
            <Content>
              <Logo src={logo} alt="Logo" />
              <a className="hidden-lg hidden-xl">
                <img src={arrowDown} alt="Dropdown"/>
              </a>
            </Content>
          </Col>
          <Col xs={10} md={7} lg={5}>
            <SearchBar />
          </Col>
          <Menu />
        </Content>
      </Row>
    </Grid>
  </Wrapper>
);
