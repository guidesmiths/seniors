import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Register from './register.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
