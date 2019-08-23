import React from 'react';
import { connect } from 'react-redux';
import { AppState } from './rootReducer';

const Toggle: React.FC<{ messageVisibility: boolean }> = ({ messageVisibility }) => (
  <div>
    {messageVisibility && <p>You will be seeing this if redux action is toggled</p>}
    <button>Toggle Me</button>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
