import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import '../../assets/stylesheets/rowDialog.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../../assets/stylesheets/rowDialog.scss';
import { loadDirectiveList, loadFlow } from '../../actions/createDashBoard';

export class CreateAction extends Component {
  componentDidMount() {
    if (this.props.directiveList.length < 1) {
      return this.props.dispatch(loadDirectiveList(this.state.directiveList));
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      actionName: '',
      scriptSample: '',
      description: '',
      directiveList: [
        {
          name: 'directive 1',
          value: '',
        },
      ],
    };
    this.addToDirective = this.addToDirective.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.handleDirectiveChange = this.handleDirectiveChange.bind(this);
    this.showCreatActionDetails();
  }

  showCreatActionDetails() {
    let directiveList = [];
    if (this.props.flow && this.props.flow._id) {
      if (
        this.props.flow.action.directives &&
        this.props.flow.action.directives.length > 0
      ) {
        for (let i = 0; i < this.props.flow.action.directives.length; i++) {
          let directive = {};
          directive.name = 'directive' + [i + 1];
          directive.value = this.props.flow.action.directives[i]
            ? this.props.flow.action.directives[i]
            : undefined;
          directiveList.push(directive);
        }
      } else {
        directiveList.push({
          name: 'directive 1',
          value: '',
        });
      }
      this.state = {
        description: this.props.flow.action.description,
        scriptSample: this.props.flow.action.scriptSample,
        directiveList: directiveList,
      };
    }
  }

  addToDirective = () => {
    let directiveList = this.state.directiveList;
    const inc = directiveList.length;
    directiveList.push({
      name: 'directive ' + (inc + 1),
      value: '',
    });
    this.setState({
      directiveList: directiveList,
    });
  };

  handleDirectiveChange(index, value) {
    let directiveList = this.state.directiveList;
    directiveList[index].value = value;
    this.setState({
      directiveList: directiveList,
    });
  }

  validateCreateAction = () => {
    if (
      this.state.description.length > 0 ||
      this.state.scriptSample.length > 0 ||
      this.state.directiveList.length > 1
    ) {
      return true;
    }
  };

  handleSubmitButtonClick(event) {
    event.preventDefault();
    let directives = [];
    this.state.directiveList.map(directive => {
      return directives.push(directive.value);
    });
    let flow = Object.assign({}, this.props.flow);
    flow.action.description = this.state.description;
    flow.action.scriptSample = this.state.scriptSample;
    flow.action.directives = directives;

    this.props.dispatch(loadFlow(flow));
    this.setState({
      directiveList: [
        {
          name: 'directive 1',
          value: undefined,
        },
      ],
    });
    this.props.updateCreatActionNameState();
  }

  render() {
    return (
      <div className="createAction">
        <div className="create-action-comp-title">CREATE YOUR ACTION</div>
        <div className="create-action-action-name">
          {this.props.flow.action.name}{' '}
        </div>
        <div className="createAction-disp-table">
          <div className="createAction-disp-table-cardPosition-left">
            <TextField
              id="description"
              label="Description"
              className="createAction-disp-table-cardPosition-item"
              onChange={description => this.setState({ description })}
              value={this.state.description}
            />
            <TextField
              id="scriptSample"
              label="Script Sample"
              className="md-cell md-cell--top"
              rows={2}
              onChange={scriptSample => this.setState({ scriptSample })}
              value={this.state.scriptSample}
            />
          </div>
          <div className="createAction-disp-table-cardPosition-right">
            {this.state.directiveList.map((directive, index) => {
              return (
                <TextField
                  id="directive"
                  label={directive.name}
                  value={directive.value}
                  key={directive.name}
                  onChange={this.handleDirectiveChange.bind(null, index)}
                  className="create-action-directive"
                />
              );
            })}
            <button
              className="create-action-directive-add-btn"
              onClick={this.addToDirective}
            >
              +
            </button>
          </div>
        </div>
        <div className="create-action-btn">
          <Button
            id="action-button"
            disabled={!this.validateCreateAction()}
            label="NEXT"
            raised
            primary
            type="submit"
            onClick={this.handleSubmitButtonClick}
          />
        </div>
      </div>
    );
  }
}

CreateAction.propTypes = {
  flow: PropTypes.object,
  dispatch: PropTypes.func,
  directiveList: PropTypes.array,
  updateCreatActionNameState: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    directiveList: state.createdashboard.directiveList,
  };
}
export default withRouter(connect(mapStateToProps)(CreateAction));
