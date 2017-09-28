import React from 'react';
import TableBody from 'react-md/lib/DataTables/TableBody';
import PropTypes from 'prop-types';

import Row from './Row';

const Body = ({ facts }) =>
  <TableBody>
    {facts.map(fact => <Row key={fact.triggerID} {...fact} />)}
  </TableBody>;

Body.propTypes = {
  facts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Body;
