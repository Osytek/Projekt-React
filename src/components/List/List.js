import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import propTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
    static propTypes = {
        title: propTypes.node.isRequired,
        description: propTypes.node,
        columns: propTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
      }
  render() {
    const props = this;
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(props.description)}
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