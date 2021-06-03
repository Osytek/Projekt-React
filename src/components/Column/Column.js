import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Column/Icon.js';


class Column extends React.Component {
  static propTypes = {
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    
  }
  render() {
    const {title, icon, cards, addCard} = this.props;
    return (       
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icons}><Icon name={icon} /></span>{title}</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}
Column.propTypes = {
  columnTitle: PropTypes.node,
  icon: PropTypes.node,
  cards: PropTypes.node,
  title: PropTypes.node,
  
};


export default Column;