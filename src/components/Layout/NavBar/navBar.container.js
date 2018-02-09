import { connect } from "react-redux";
import { withRouter } from 'react-router';

import {
	getValue
} from "../../../state/Search/selectors";

import {
	setValue
} from "../../../state/Search/actionCreators";

import {
	logoutSubmit
} from "../../../state/Login/actionCreators";

import MyNavBar from './navBar.component';

const mapStateToProps = (state, ownProps) => ({
	location: ownProps.location,
	value: getValue(state)
});

const mapDispatchToProps = (dispatch) => ({
	setValue,
	logout: (onSuccess) => { dispatch(logoutSubmit(onSuccess)); }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyNavBar));
