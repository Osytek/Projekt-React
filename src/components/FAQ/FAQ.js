import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {listData, faq} from '../../data/dataStore';



class FAQ extends React.Component {
  static defaultProps = {
    mainTitle: listData.title,
    image: listData.image,
  }
  render(){
    const {mainTitle, image} = this.props;
    return (
      <Container>
        <Hero titleText={mainTitle} image={image} />
        <h2>{faq.title}</h2>
        <p>{faq.description}</p>
      </Container>
    );
  }
}  
FAQ.propTypes = {
  mainTitle: PropTypes.node,
  image: PropTypes.node,
};

export default FAQ;