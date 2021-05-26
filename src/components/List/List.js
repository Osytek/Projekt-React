import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
      }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.imageSrc}/>
        <div className={styles.description}>
            {this.props.description}
        </div>
        <div className={styles.columns}>
            <Column columnTitle ='Animals'></Column>
            <Column columnTitle ='Minerals'></Column>
            <Column columnTitle ='Films'></Column>
        </div>
      </section>
    )
  }
}

export default List;