import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

import logo from './icons/logo.svg';
import Menu from './Menu';
import { Col, Grid, Row } from 'react-flexbox-grid';

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

const Logo = styled.img``;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Content>
          <Col xs={2} md={1}>
            <Logo src={logo} />
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
