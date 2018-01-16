import { connect } from "react-redux";
import { withRouter } from 'react-router';

import MainLayoutRouter from './mainLayoutRouter.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayoutRouter));
