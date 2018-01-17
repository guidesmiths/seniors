import { connect } from "react-redux";
import { withRouter } from 'react-router';

import {
	getIsChecking,
	getError
} from '../../../state/Login/selectors';

import {
	loginSubmit 
} from '../../../state/Login/actionCreators';

import Login from './login.component';

const mapStateToProps = (state, ownProps) => ({
	isChecking: getIsChecking(state),
	error: getError(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	login: (email, password) => { dispatch(loginSubmit(email, password)); },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
