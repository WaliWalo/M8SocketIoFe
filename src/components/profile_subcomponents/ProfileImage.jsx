import React, { Component } from "react";
import { Button, Form, Modal, Alert, Spinner } from "react-bootstrap";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
class ProfileImage extends Component {
	state = { isImage: false };

	styles = {
		largeIcon: {
			width: "50px",
			height: "50px",
		},

		imagePreview: {
			width: "150px",
			height: "150px",
			borderRadius: "50%",
			marginLeft: "25%",
			backgroundColor: "gray",
			border: "3px",
		},
	};

	preview_image = (event) => {
		let reader = new FileReader();
		reader.onload = function () {
			let output = document.getElementById("output_image_user");
			output.src = reader.result;
		};
		reader.readAsDataURL(event.target.files[0]);
		this.setState({ isImage: true });
	};

	render() {
		return (
			<Modal
				{...this.props}
				className='edit-image-modal'
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Body>
					<div>
						<Form
							onSubmit={this.props.uploadImage}
							className='profile-image-upload'>
							<Form.Group>
								<Form.File
									onChange={this.preview_image}
									id='profile-image-upload-file'
									type='file'
								/>
								<Form.Label
									style={{
										marginLeft: "40%",
										marginTop: "5%",
									}}
									htmlFor='profile-image-upload-file'>
									<AddAPhotoIcon
										className='add-photo-icon'
										style={this.styles.largeIcon}
									/>
								</Form.Label>
							</Form.Group>

							<img
								style={this.styles.imagePreview}
								id='output_image_user'
							/>
							<Button
								className={
									this.state.isImage ? "d-block" : "d-none"
								}
								style={{ marginLeft: "30%", marginTop: "10%" }}
								type='submit'
								variant='primary'>
								Save Image
							</Button>
						</Form>
						{this.props.isLoading && (
							<Spinner
								style={{ marginLeft: "40%" }}
								className='main-page-spinner'
								animation='border'
								variant='primary'
							/>
						)}
						<div>
							{this.props.message.length > 3 && (
								<Alert variant='secondary' className='mt-2'>
									{this.props.message}
								</Alert>
							)}
						</div>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default ProfileImage;
