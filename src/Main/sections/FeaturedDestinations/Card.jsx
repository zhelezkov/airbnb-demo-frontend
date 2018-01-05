import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { ColumnWrapper, Image } from '../common';

const Title = styled.a`
  font-weight: bold;
  font-size: 1.125rem;  
`;

export default props => (
  <Col xs={4} sm={4} md={3} lg={2}>
    <ColumnWrapper>
      <Image src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
    </ColumnWrapper>
  </Col>
);
