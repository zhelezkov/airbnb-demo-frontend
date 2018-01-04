import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Col sm={6} md={3} lg={3}>
    <Container>
      <select>
        <option>English</option>
      </select>
      <select>
        <option>United States dollar</option>
      </select>
    </Container>
  </Col>
);
