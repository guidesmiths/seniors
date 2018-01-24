import { connect } from "react-redux";
import { withRouter } from 'react-router';

import FilterHor from './filterHor.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterHor));
