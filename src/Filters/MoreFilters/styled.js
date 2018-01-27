import styled from 'styled-components';

import arrowDown from './icons/arrowDown.svg';
import { Row } from 'react-flexbox-grid';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  border-bottom: 1px rgba(72, 72, 72, 0.3) solid;
`;

export const Title = styled.h3`
  font-weight: 400;
  margin: 0 0 1.5rem;
  align-self: flex-start;
`;

export const CenterRow = styled(Row)`
  align-items: center;
`;

export const SeeAll = styled.p`
  margin-bottom: 2rem;
  color: #008489;
  cursor: pointer;

  ::after {
    margin-left: 0.5rem;
    display: inline-block;
    content: '';
    color: #0f7276;
    background-image: url(${arrowDown});
    background-size: 12px 7px;
    width: 12px;
    height: 7px;
  }
`;
