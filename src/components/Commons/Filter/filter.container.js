import { connect } from "react-redux";
import { withRouter } from 'react-router';

import {
	setFilter
} from "../../../state/Filter/actionCreators";

import {
	getFilters
} from "../../../state/Filter/selectors";

import Filter from './filter.component';

const mapStateToProps = (state, ownProps) => ({
	filter: getFilters(state)
});

const mapDispatchToProps = {
	setFilter
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));
