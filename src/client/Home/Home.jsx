import React from 'react';
import { Header, Segment, Grid, Icon } from 'semantic-ui-react';
import { RouteComponentProps, Link } from 'react-router-dom';
import './css/home.css';
import image from '../_shared/assets/imgs/firs.jpg';
import Footer from './Footer';

interface Styles {
	[key: string]: React.CSSProperties;
}

const Home: React.FunctionComponent<RouteComponentProps> = () => {
	return (
		<div className="home">
			<div className="banner" style={styles.wrapper}>
				<div className="overlay" />
				<div className="content">
					<Header className="title" textAlign="center">
						Score, Grade and Analyse Essays
						<Header.Subheader className="desc">
							Welcome to the new and improved Essay Grading System. An innovative
							solution to grading essays
						</Header.Subheader>
					</Header>
					<Link to="/dashboard/" className="cta">
						Continue
					</Link>
				</div>
			</div>
			<Segment className="services" padded>
				<Grid>
					<Grid.Row columns="3">
						<Grid.Column>
							<Header>Scoring</Header>
							<Icon name="check" className="service-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem, minus hic error
							</p>
						</Grid.Column>
						<Grid.Column>
							<Header>Grading</Header>
							<Icon name="file alternate outline" className="service-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem, minus hic error
							</p>
						</Grid.Column>
						<Grid.Column>
							<Header>Analysis</Header>
							<Icon name="area chart" className="service-icon" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem, minus hic error
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<p style={{ padding: '0 1rem' }}>
				AMA is an AI agent trained to access and score english essays with selected criteria
				standards for essay scoring. Click here to view criteria. <br />
				The title of the essay is required and must be entered in the input field below,
				else AMA cannot fully access the essay. Type in your essay in the provided text
				editor, then click on submit button to submit the essay for marking.
			</p>
			<Footer />
		</div>
	);
};

const styles: Styles = {
	wrapper: {
		backgroundImage: `url(${image})`
	}
};

export default Home;
