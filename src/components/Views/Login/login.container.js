import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Login from './login.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
