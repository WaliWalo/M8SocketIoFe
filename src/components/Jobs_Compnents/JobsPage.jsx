import React, { PureComponent } from "react";
import "./Jobs_Styles/JobsPage.scss";
import SearchJob from "./SearchJob";
import { Container } from "react-bootstrap";
import AdsJobs from "./AdsJobs";
import Jobs from "./Jobs";

export default class JobsPage extends PureComponent {
	url = "https://striveschool-api.herokuapp.com/api/product/";
	state = {
		allJobs: [],
		search: "",
		filteredJobs: [],
	};

	fetchJobs = async () => {
		const { search } = this.state;

		let response = await fetch(this.url, {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM2MDE2YmVkMjY2ODAwMTcwZWEzZmMiLCJpYXQiOjE2MDY4MTIwMTEsImV4cCI6MTYwODAyMTYxMX0.-uMawwVYHlRY3cRlBmcTuo0dwpJc8TvXOECs4sxKYNg",
			},
		});
		let result = await response.json();
		console.log(result);
		return result;
	};

	componentDidMount = async () => {
		let allJobs = await this.fetchJobs();
		console.log("leon", allJobs);
		this.setState({ allJobs: allJobs });
	};

	onchange = (e) => {
		e.preventDefault();
		let searchValue = e.currentTarget.value;
		this.setState({ search: searchValue });
	};
	filterBySearch = () => {
		let filteredJobs = this.state.allJobs.filter((job) => {
			job.brand.includes(this.state.search);
		});
		this.setState({ filteredJobs });
		console.log("filtered jobs", filteredJobs, this.state.allJobs);
	};
	render() {
		return (
			<Container id='jobs-page'>
				<nav className='jobs-nav'>
					<ul className='jobs-nav-list'>
						<li>
							<i className='fas fa-bookmark'></i>
							My Jobs
						</li>
						<li>
							<i className='fas fa-bell'></i>
							Job Alerts
						</li>
						<li>
							<i className='fas fa-money-bill'></i>
							Salary
						</li>
						<li>
							<i className='fas fa-sticky-note'></i>
							Interview Prep
						</li>
						<li>
							More
							<i className='fas fa-sort-down'></i>
						</li>
					</ul>
					<button>
						<ion-icon name='create-outline'></ion-icon>
						Post a free job
					</button>
				</nav>
				<SearchJob
					onchange={this.onchange}
					filter={this.filterBySearch}
				/>
				<AdsJobs />
				<Jobs />
			</Container>
		);
	}
}
