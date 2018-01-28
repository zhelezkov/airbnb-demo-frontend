import styled from 'styled-components';
import checkbox from './checkbox.svg';

export default styled.input.attrs({
  type: 'checkbox',
})`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  appearance: none;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background: url(${checkbox}) no-repeat center center;
  background-size: 0.875rem 0.625rem;
  cursor: pointer;
  
  &:checked {
    background-color: #008489;  
  }
`;
