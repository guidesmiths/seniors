import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Blog from './blog.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));
