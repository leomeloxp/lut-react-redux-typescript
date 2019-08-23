import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { IReduxToggleMessageAction, toggleMessage } from './actions';
import { AppState } from './rootReducer';

const Toggle: React.FC<{ messageVisibility: boolean } & DispatchProp<IReduxToggleMessageAction>> = ({
  messageVisibility,
  dispatch
}) => (
  <div>
    {messageVisibility && <p>You will be seeing this if redux action is toggled</p>}
    <button
      onClick={() => {
        dispatch(toggleMessage());
      }}
    >
      Toggle Me
    </button>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
