import React from 'react';
import styled from 'styled-components';
import Rooms from '../Rooms/PureFilter';
import { Title } from './styled';

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px rgba(72, 72, 72, 0.3) solid;
`;

export default ({ onCheck, values }) => (
  <Wrapper>
    <Title>Room type</Title>
    <Rooms onCheck={ev => onCheck('homes', ev)} values={values} />
  </Wrapper>
);
