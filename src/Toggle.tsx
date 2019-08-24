import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';
import { IReduxToggleMessageAction, toggleMessage } from './actions';
import { AppState } from './rootReducer';

const Toggle: React.FC<{ messageVisibility: boolean; toggleMessage: ActionCreator<IReduxToggleMessageAction> }> = ({
  messageVisibility,
  toggleMessage
}) => (
  <div>
    {messageVisibility && <p>You will be seeing this if redux action is toggled</p>}
    <button onClick={toggleMessage}>Toggle Me</button>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = (dispatch: Dispatch<IReduxToggleMessageAction>) =>
  bindActionCreators({ toggleMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
