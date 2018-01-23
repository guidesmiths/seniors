import { connect } from "react-redux";
import { withRouter } from 'react-router';

import CardList from './CardList.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));
