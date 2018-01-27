import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../UI/Checkbox';

const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #383838;
  cursor: pointer;
  margin: 0 0 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-weight: 100;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 0.875rem;
  margin: 0;
`;

const Icon = styled.img`
  margin-left: 1rem;
`;

export default ({
  title, description, icon, checked, onChange, name,
}) => (
  <Wrapper>
    <Content>
      <Checkbox checked={checked} onChange={onChange} name={name} />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Content>
    <Icon src={icon} alt="Icon" />
  </Wrapper>
);
