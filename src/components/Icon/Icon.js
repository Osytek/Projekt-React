import { checkPropTypes } from 'prop-types';
import React from 'react';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

export default Icon;

Icon.propTypes = {
  name: checkPropTypes.node,
};