/* Row.jsx */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import Switch from 'react-md/lib/SelectionControls/Switch';
import Chip from 'react-md/lib/Chips';
import ChipList from './ChipList';
import Settings from './Settings';
import '../../assets/stylesheets/viewDashboard.scss';
import { editFlow } from '../../services/flowApi';
export default class Row extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    triggerName: PropTypes.string.isRequired,
    actionName: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    className: PropTypes.string,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = { highlight: props.isNew ? true : null };
    this.handleChangeTableSelectChange = this.handleChangeTableSelectChange.bind(
      this
    );
  }

  componentDidMount() {
    if (this.props.isNew) {
      this._timeout = setTimeout(() => {
        this._timeout = setTimeout(() => {
          this._timeout = null;
          this.setState({ highlight: null });
        }, 2000);

        this.setState({ highlight: false });
      }, 4000);
    }
  }

  componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }

  createTriggerColumn = triggerName =>
    <TableColumn className="column-one">
      <span className="trigger-name-column-text">
        {triggerName}
      </span>
    </TableColumn>;

  createActionColumn = actionName =>
    <TableColumn className="table-column">
      <Chip label={actionName} />
    </TableColumn>;

  createStaffTargetColumn = (actors, triggerID) =>
    <TableColumn className="table-column-actors">
      <ChipList actors={actors} triggerID={triggerID} />
    </TableColumn>;

  createSettingsColumn = settings =>
    <TableColumn>
      <Settings settings={settings} />
    </TableColumn>;

  async handleChangeTableSelectChange(triggerID, event) {
    try {
      await editFlow({ isActive: event }, triggerID);
    } catch (error) {
      console.error('Failed to update flow on/off');
    }
  }

  createActiveColumn = (isActive, triggerID) =>
    <TableColumn>
      <Switch
        id={`switch1-${triggerID}`}
        name="switch"
        defaultChecked={isActive}
        onChange={this.handleChangeTableSelectChange.bind(null, triggerID)}
      />
    </TableColumn>;

  render() {
    const {
      className,
      triggerName,
      actionName,
      actors,
      settings,
      isActive,
      triggerID,
      ...props
    } = this.props;

    const { highlight } = this.state;

    return (
      <TableRow
        {...props}
        className={cn(className, {
          'table-row': highlight !== null,
          'table-row--highlight': highlight,
        })}
      >
        {this.createTriggerColumn(triggerName)}
        {this.createActionColumn(actionName)}
        {this.createStaffTargetColumn(actors, triggerID)}
        {this.createSettingsColumn(settings)}
        {this.createActiveColumn(isActive, triggerID)}
      </TableRow>
    );
  }
}
