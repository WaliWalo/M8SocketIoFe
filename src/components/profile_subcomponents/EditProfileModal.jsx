import React, { Component } from "react";

import { Button, Modal, Row, Col } from "react-bootstrap";

import EditProfileForm from "./EditProfileForm";
import ProfileImage from "./ProfileImage";
class EditProfileModal extends Component {
	state = { show: false, modalShow: false };

	componentDidMount() {
		this.setState({ show: this.props.show });
	}
	render() {
		const { user } = this.props;
		return (
			<>
				<Modal
					{...this.props}
					className='edit-profile-modal'
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Edit intro
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ProfileImage
							message={this.props.message}
							isLoading={this.props.isLoading}
							uploadImage={this.props.uploadImage}
							show={this.state.modalShow}
							onHide={() => this.setState({ modalShow: false })}
						/>

						<Row className='mb-5'>
							<Col md={12} className='images-container '>
								<img
									className='header-img'
									src='https://media-exp1.licdn.com/dms/image/C4D16AQGmIeY20UG-TA/profile-displaybackgroundimage-shrink_200_800/0/1601315645175?e=1612396800&v=beta&t=AbFSYaklOIuXGuLEY-usz4EZRg1rbhXC_jLq1X22GDI'
									alt='top-image'
								/>
								<img
									style={{ width: "18%", height: "70%" }}
									className='profile-img mt-4 ml-3 mb-5 '
									src={user.image}
									alt='profile-pic'
								/>
								<div
									className='edit-profile-img'
									onClick={() =>
										this.setState({ modalShow: true })
									}>
									<i className='fas fa-pencil-alt '></i>
								</div>
							</Col>
						</Row>
						<div>
							<EditProfileForm
								modalShow={this.state.modalShow}
								user={user}
							/>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default EditProfileModal;
