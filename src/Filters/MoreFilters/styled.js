import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

import arrowDown from '../../assets/arrowDown.svg';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  border-bottom: 1px rgba(72, 72, 72, 0.3) solid;
`;

export const Title = styled.h3`
  color: #383838;
  font-weight: 400;
  margin: 0 0 1.5rem;
  align-self: flex-start;
`;

export const CenterRow = styled(Row)`
  align-items: center;
  flex-wrap: nowrap;
`;

export const SeeAll = styled.div`
  color: #0f7276;
  padding-bottom: 2rem;

  ::after {
    content: '';
    color: #0f7276;
    display: inline-block;
    margin-left: 0.5rem;
    background-image: url(${arrowDown});
    background-size: 12px 7px;
    width: 12px;
    height: 7px;
    ${({ isOpen }) => !isOpen && 'transform: rotate(180deg);'};
  }
`;
