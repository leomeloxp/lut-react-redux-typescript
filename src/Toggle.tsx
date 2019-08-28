import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getMovies, IReduxGetMoviesAction, IReduxToggleMessageAction, toggleMessage } from './actions';
import { IReduxState } from './reducer';
import { AppState } from './rootReducer';

const Toggle: React.FC<{
  messageVisibility: boolean;
  toggleMessage: ActionCreator<IReduxToggleMessageAction>;
  getMovies: () => ThunkAction<Promise<IReduxGetMoviesAction>, IReduxState, undefined, IReduxGetMoviesAction>;
}> = ({ getMovies, messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && <p>You will be seeing this if redux action is toggled</p>}
    <button onClick={toggleMessage}>Toggle Me</button>
    <button onClick={getMovies}>Load Movies</button>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = (dispatch: Dispatch<IReduxToggleMessageAction>) =>
  bindActionCreators({ toggleMessage, getMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
