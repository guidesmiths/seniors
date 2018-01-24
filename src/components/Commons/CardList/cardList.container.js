import { connect } from "react-redux";
import { withRouter } from 'react-router';

import CardList from './cardList.component';

import {
	getAssistants
} from "../../../state/Assistants/selectors";

const mapStateToProps = (state, ownProps) => ({
	assistants: getAssistants(state)
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));
