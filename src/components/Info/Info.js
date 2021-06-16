import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {listData, info} from '../../data/dataStore';


class Info extends React.Component {
  static defaultProps = {
    title: listData.title,
    image: listData.image,
  }
  render(){
    const {title, image} = this.props;
    return (
      <Container>
        <Hero titleText={title} image={image} />
        <h2>{info.title}</h2>
        <p>{info.description}</p>
      </Container>
    );
  }
}  
Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
};

export default Info;