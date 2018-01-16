import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Login from './login.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		login: () => {
			dispatch({type:'SUBMIT_LOGIN'});
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
