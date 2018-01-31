import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SectionMore } from './Section';
import Card from '../Homes/Card';
import { retrieveHomesData } from '../Homes/api';

const Column = ({ children }) => (
  <Col xs={8} sm={8} md={5} lg={4}>
    {children}
  </Col>
);

const Home = ({ home }) => (
  <Column>
    <Card {...home} />
  </Column>
);

const Homes = ({ homes }) => homes.map(home => <Home home={home} key={home.id} />);

export default class HomesSection extends React.Component {
  state = {
    homes: null,
  };

  async componentWillMount() {
    const homes = await retrieveHomesData(0, 6);
    this.setState({ homes });
  }

  render() {
    return (
      <SectionMore title="Homes" to="/homes">
        {this.state.homes && <Homes homes={this.state.homes} />}
      </SectionMore>
    );
  }
}
