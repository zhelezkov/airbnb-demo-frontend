import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-between;
  color: #383838;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;  
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  margin-right: 0.75rem;
`;

const Title = styled.p`
  font-weight: 100;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-weight: 100;
  margin: 0;
`;

const Icon = styled.img`
  margin-left: 2rem;
`;

export default ({
  title, description, icon, checked, onChange,
}) => (
  <Wrapper>
    <Content>
      <Checkbox checked={checked} onChange={onChange} />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Content>
    <Icon src={icon} alt="Icon" />
  </Wrapper>
);
