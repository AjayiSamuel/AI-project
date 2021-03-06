import React from 'react';
import PropTypes from 'prop-types';
import { Header, Grid } from 'semantic-ui-react';
import AnalysisTable from './AnalysisTable';
import AnalysisChart from './AnalysisChart';
import {
	Analysis,
	POSDetails,
	dataAnalysis,
	getDataValues,
	getDataKeys,
	overallScores,
	miscScores
} from './_helpers';
import './css/view.css';
import { score } from '../_shared/services';

interface Props {
	essay: Analysis;
	pos: Analysis;
	onSideBarView: Function;
	details: Array<POSDetails>;
	score: number;
	data: {};
	grade: string;
}

const AnalysisView = (props: Props) => {
	const wordVals = dataAnalysis(props.data, 'words');
	const overall = overallScores(props.essay);
	const miscs = miscScores(props.essay);
	return (
		<React.Fragment>
			<div className="analysis">
				<Header size="huge" className="main-header">
					<span style={{ fontSize: 12 }}>Score :</span> {score(props.score)}
					<span style={{ fontSize: 12, marginLeft: '1.25rem' }}>Grade :</span>{' '}
					{props.grade}
				</Header>
				<p className="analysis-desc">
					In analyzing the content of the essay, irrelevant words and text were removed
					such as of, is, etc. This ensures that the essay written is to the title chosen.
				</p>
				<Grid>
					<Grid.Row>
						<Grid.Column width={5}>
							<div className="widget">
								<AnalysisChart
									type="pie"
									title="Overall Scores"
									data={overall.value}
									labels={overall.label}
									width="270"
								/>
							</div>
							<small className="widget-info">
								The overiew chart shows the percentage scores for each category in
								the essay.
							</small>
						</Grid.Column>
						<Grid.Column width={5}>
							<div className="widget">
								<AnalysisChart
									type="pie"
									title="Word Analysis"
									data={getDataValues(wordVals)}
									labels={getDataKeys(wordVals)}
									width="270"
								/>
							</div>
							<small className="widget-info">
								The chart shows the analysis on the words written in the essay.
							</small>
						</Grid.Column>
						<Grid.Column width={6}>
							<div className="widget">
								<AnalysisChart
									type="pie"
									title="Miscellaneous Scores"
									data={miscs.value}
									labels={miscs.label}
									width="300"
								/>
							</div>
							<small className="widget-info">
								The miscellaneous chart shows the scores given to sentence, words
								and charater relations.
							</small>
						</Grid.Column>
						<Grid.Column width={10}>
							<div className="widget">
								<AnalysisChart
									type="line"
									title="Parts Of Speech"
									data={[{ name: 'POS', data: props.pos.series }]}
									labels={props.pos.labels}
									width={540}
								/>
							</div>
							<small className="widget-info">
								The chart shows the various scores on the parts of speech in the
								essay.
							</small>
						</Grid.Column>
						<Grid.Column width={6}>
							<div className="responsive-col">
								<div className="widget widget--table">
									<AnalysisTable values={props.details} extend />
								</div>
							</div>
							<small className="widget-info">
								Table shows the scores and description for the part of speech.
							</small>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</React.Fragment>
	);
};

AnalysisView.propTypes = {
	essay: PropTypes.shape({
		series: PropTypes.arrayOf(PropTypes.number),
		labels: PropTypes.arrayOf(PropTypes.string)
	}),
	pos: PropTypes.shape({
		series: PropTypes.arrayOf(PropTypes.number),
		labels: PropTypes.arrayOf(PropTypes.string)
	}),
	details: PropTypes.arrayOf(PropTypes.object),
	score: PropTypes.number.isRequired,
	data: PropTypes.shape({}).isRequired,
	grade: PropTypes.string.isRequired
};

AnalysisView.defaultProps = {
	essay: null,
	pos: null,
	details: null
};

export default AnalysisView;
