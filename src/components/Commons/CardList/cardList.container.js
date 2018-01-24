import { connect } from "react-redux";
import { withRouter } from 'react-router';

import CardList from './cardList.component';

import data from './mock-data.json';

const mapStateToProps = (state, ownProps) => ({
	data
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));
