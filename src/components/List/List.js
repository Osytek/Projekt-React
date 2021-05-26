import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.imageSrc}/>
        <div className={styles.description}>
            {this.props.children}
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