import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';

import Icon from '../Icon/Icon.js';


class SearchResults extends React.Component {
  static propTypes = {
    addCard: PropTypes.func,
    cards: PropTypes.node,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {title, icon, cards} = this.props;
    return (       
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icons}><Icon name={icon} /></span>{title}</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}
SearchResults.propTypes = {
  columnTitle: PropTypes.node,
  icon: PropTypes.node,
  cards: PropTypes.node,
  title: PropTypes.node,
};


export default SearchResults;