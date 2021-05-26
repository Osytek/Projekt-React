import React from 'react';
import styles from './Column.scss';
import propTypes from 'prop-types';

class Column extends React.Component {
    render() {
      
      return (
          
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.columnTitle}</h3>
        </section>
      );
      
    }
}
Column.propTypes = {
    columnTitle: propTypes.node,
  };

export default Column;