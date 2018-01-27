import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const Content = styled.div`
  background-color: #fff;
  padding-top: 3rem;
  @media (min-width: 768px) {
    overflow: auto;
    height: calc(100vh - 8.5rem);
  }
`;

class ContentOnClickOutside extends React.Component {
  handleClickOutside = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <Content>{this.props.children}</Content>
    );
  }
}

export default onClickOutside(ContentOnClickOutside);
