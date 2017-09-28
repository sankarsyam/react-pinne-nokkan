/* TableActions.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import TableCardHeader from 'react-md/lib/DataTables/TableCardHeader';
import '../../assets/stylesheets/viewDashboard.scss';

const TableActions = ({
  mobile,
  count,
  openAddRowDialog,
  openDialog,
  renderEdit,
  testFlowDialog,
}) =>
  <TableCardHeader
    id="table-actions"
    visible={count > 0}
    contextualTitle={`${count} flow ${count > 1 ? 's' : ''} selected`}
    actions={[
      <div className="delete-update-area">
        <Button
          key="delete"
          icon
          onClick={openDialog}
          tooltipLabel="Remove selected rows"
          tooltipDelay={300}
          tooltipPosition="right"
          className="dashbord-delete-button"
        >
          delete
        </Button>
        <Button
          key="edit"
          icon
          tooltipLabel="Edit selected row"
          tooltipDelay={300}
          className={count < 2 ? 'flow-edit-btn-show' : 'flow-edit-btn-hide'}
          onClick={renderEdit}
        >
          edit
        </Button>
        <Button
          key="test"
          id="submit-test-button"
          icon
          tooltipLabel="Test selected row"
          tooltipDelay={300}
          className={count < 2 ? 'flow-edit-btn-show' : 'flow-edit-btn-hide'}
          onClick={testFlowDialog}
        >
          done
        </Button>
      </div>,
    ]}
  >
    <Button
      id="dashbord-flow-add-button"
      key="add"
      icon
      onClick={openAddRowDialog}
      tooltipLabel="Add more rows"
      tooltipDelay={300}
      className="dashbord-add-button"
    >
      add
    </Button>
  </TableCardHeader>;

TableActions.propTypes = {
  count: PropTypes.number.isRequired,
  mobile: PropTypes.bool,
  openAddRowDialog: PropTypes.func,
  openDialog: PropTypes.func,
};

export default TableActions;
