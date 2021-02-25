import React, { PureComponent } from "react";
import "../css/Skills.scss";
import SkillsData from "../dataExamples/SkillsData.json";
import { Modal, Button } from "react-bootstrap";

export default class Skills extends PureComponent {
	state = {
		showModal: true,
	};

	showModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	render() {
		let show = this.state.showModal ? "-150vh" : "";
		return (
			<div id='skills'>
				<Modal.Dialog style={{ marginTop: `${show}` }}>
					<Modal.Header
						closeButton
						onClick={this.showModal.bind(this)}>
						<Modal.Title>Edit About</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>Summary</p>
						<textarea
							name='about'
							id='about'
							cols='30'
							rows='5'
							placeholder='Talk about you...'></textarea>
					</Modal.Body>

					<Modal.Footer>
						<Button
							variant='primary'
							onClick={this.showModal.bind(this)}>
							Save
						</Button>
					</Modal.Footer>
				</Modal.Dialog>
				<header>
					<span>Skills & endorements</span>
					<span>
						<input
							type='button'
							value='Add a new skill'
							onClick={this.showModal.bind(this)}></input>
						<i
							style={{
								display: this.props.isShowEditBtn
									? "block"
									: "none",
							}}
							className='fas fa-pencil-alt'></i>
					</span>
				</header>
				<input type='button' value='View Skill Assessments' />
			</div>
		);
	}
}
