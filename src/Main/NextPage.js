import styled from 'styled-components';

import nextPageIcon from './assets/next-page.svg';

export default styled.button`
  display: none;

  @media (min-width: 992px) {
    position: absolute;
    display: block;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    margin-top: -1.75rem;
    align-self: center;
    border: none;
    background: url(${nextPageIcon}) no-repeat;
    outline: none;
    cursor: pointer;
    overflow: hidden;
  }
`;
