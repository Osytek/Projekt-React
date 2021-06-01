import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  render() {
    const {title} = this.props;
    return (       
      <section className={styles.component}>
        <ul>
          <li>{title}</li>
        </ul>
      </section>
    );
  }
}
Card.propTypes = {
  title: PropTypes.node,
};

export default Card;