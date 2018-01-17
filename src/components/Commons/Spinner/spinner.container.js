import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Spinner from './spinner.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spinner));
