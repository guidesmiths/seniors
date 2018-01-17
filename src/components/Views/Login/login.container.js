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
	login: (email, password, onSuccess) => { dispatch(loginSubmit(email, password, onSuccess)); },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
