import React, { PureComponent } from "react";
import "../css/AboutBlock.scss";
import { Modal, Button } from "react-bootstrap";

export default class AboutBlock extends PureComponent {
	state = {
		showModal: true,
		about: "",
	};

	about = "";

	showModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	fillAbout = (event) => {
		this.setState({ about: event.currentTarget.value });
	};

	save = () => {
		this.about = this.state.about;
		this.showModal();
	};

	render() {
		let show = this.state.showModal ? "-150vh" : "";
		return (
			<div id='about'>
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
							placeholder='Talk about you...'
							value={this.state.about}
							onChange={this.fillAbout}></textarea>
					</Modal.Body>

					<Modal.Footer>
						<Button
							variant='primary'
							onClick={this.save.bind(this)}>
							Save
						</Button>
					</Modal.Footer>
				</Modal.Dialog>
				<header>
					<span>About</span>
					<i
						style={{
							display: this.props.isShowEditBtn
								? "block"
								: "none",
						}}
						className='fas fa-pencil-alt'
						onClick={this.showModal.bind(this)}></i>
				</header>
				<div className='about-body'>
					<p>{this.about}</p>
				</div>
			</div>
		);
	}
}
