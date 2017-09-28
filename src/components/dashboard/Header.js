/* Header.jsx */
import React from 'react';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
const Header = () =>
  <TableHeader>
    <TableRow autoAdjust={false}>
      <TableColumn adjusted={true}>
        <label className="table-header-select-all">All</label> GUEST TRIGGERS
      </TableColumn>
      <TableColumn adjusted={true}>ACTIONS</TableColumn>
      <TableColumn adjusted={true}>STAFF TARGET</TableColumn>
      <TableColumn adjusted={true}>SETTINGS</TableColumn>
      <TableColumn adjusted={true}>ON/OFF</TableColumn>
    </TableRow>
  </TableHeader>;

export default Header;
