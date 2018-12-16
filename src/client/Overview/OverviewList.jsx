import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { OverviewListView } from './OverviewListView';
import { Overall } from './_helpers';

interface OverviewListProps {
	data: Array<Overall>;
	onSelect: Function;
}

export const OverviewList: FunctionComponent<OverviewListProps> = props => {
	if (!props.data) {
		return <div>No data</div>;
	}

	return <OverviewListView data={props.data} onSelect={props.onSelect} />;
};

OverviewList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func.isRequired
};

OverviewList.defaultProps = {
	data: null
};