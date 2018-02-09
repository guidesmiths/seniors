import { connect } from "react-redux";
import { withRouter } from 'react-router';

import {
	getValue
} from "../../../state/Search/selectors";

import {
	setValue
} from "../../../state/Search/actionCreators";

import Search from './search.component';

const mapStateToProps = (state, ownProps) => ({
	location: ownProps.location,
	value: getValue(state)
});

const mapDispatchToProps = {
	setValue
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
