import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
    render() {
      return (       
        <section className={styles.component}>
          <ul>
              <li>{this.props.title}</li>
          </ul>
        </section>
      );
    }
}

export default Card;