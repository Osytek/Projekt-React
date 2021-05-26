import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class Hero extends React.Component {
  render() {
    const props = this;
    return (
        
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={styles.image} src={this.props.imageSrc}></img>
      </header>
    );
    
  }
}
Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
  };
export default Hero;