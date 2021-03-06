import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Header } from 'semantic-ui-react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { score } from '../_shared/services';
import './css/result.css';

interface Props {
	onClick: Function;
	open?: boolean;
	result?: { score: number };
	onClose: Function;
	grade: string;
}

const ResultModal = (props: Props) => (
	<Modal
		closeOnDimmerClick
		closeOnEscape
		closeOnDocumentClick
		onClose={props.onClose}
		open={props.open}
		basic
		className="result"
	>
		<Modal.Header style={styles.header}>Essay Score</Modal.Header>
		<Modal.Content>
			<Modal.Description style={{ textAlign: 'center' }}>
				<div>
					<Progress
						style={{ color: 'white' }}
						type="circle"
						percent={props.result ? score(props.result.score) : 0}
					/>
				</div>
				{props.grade && (
					<Header className="grade" size="large" inverted textAlign="center">
						<span style={styles.headerLabel}>grade: </span> {props.grade}
					</Header>
				)}
				<p className="desc">
					Your total score on your written essay. Click the link below to view the
					analysis on the essay
				</p>
				<Button basic className="btn" onClick={props.onClick}>
					Details
				</Button>
			</Modal.Description>
		</Modal.Content>
	</Modal>
);

ResultModal.propTypes = {
	onClick: PropTypes.func.isRequired,
	open: PropTypes.bool,
	result: PropTypes.shape({
		score: PropTypes.number
	}),
	onClose: PropTypes.func.isRequired,
	grade: PropTypes.string.isRequired
};

ResultModal.defaultProps = {
	open: false,
	result: null
};

const styles: { [key: string]: React.CSSProperties } = {
	header: {
		textAlign: 'center',
		fontWeight: 400,
		textTransform: 'uppercase',
		fontSize: '2.1rem',
		color: '#b4d4f1'
	},
	headerLabel: {
		textTransfrm: 'uppercase',
		fontSize: '1rem'
	}
};

export default ResultModal;
