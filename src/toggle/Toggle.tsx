import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../helpers/rootReducer';
import { getMovies } from '../movies/actions';
import { IReduxToggleMessageAction, toggleMessage } from './actions';

const Toggle: React.FC<{
  messageVisibility: boolean;
  toggleMessage: ActionCreator<IReduxToggleMessageAction>;
  getMovies: typeof getMovies;
}> = ({ getMovies, messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && <p>You will be seeing this if redux action is toggled</p>}
    <button onClick={toggleMessage}>Toggle Me</button>
    <button onClick={getMovies}>Load Movies</button>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = (dispatch: Dispatch<IReduxToggleMessageAction>) =>
  bindActionCreators({ toggleMessage, getMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
