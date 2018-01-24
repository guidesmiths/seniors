import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Filter from './filter.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));
