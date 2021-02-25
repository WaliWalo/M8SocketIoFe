import React, { Component } from "react";
import { Button, Form, Modal, Alert, Spinner } from "react-bootstrap";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
class PostImage extends Component {
	state = { isImage: false };

	styles = {
		largeIcon: {
			width: "50px",
			height: "50px",
		},

		imagePreview: {
			width: "150px",
			height: "150px",
			borderRadius: "10px",
			marginLeft: "25%",
			backgroundColor: "gray",
			border: "3px",
		},
	};

	preview_image = (event) => {
		let reader = new FileReader();
		reader.onload = function () {
			let output = document.getElementById("output_image");
			let modal = document.querySelector(".modal-image-preview");
			output.src = reader.result;
			modal.src = reader.result;
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
						<Form className='profile-image-upload'>
							<Form.Group>
								<Form.File
									onChange={this.preview_image}
									id='post-image-upload-file'
									type='file'
								/>
								<Form.Label
									style={{
										marginLeft: "40%",
										marginTop: "5%",
									}}
									htmlFor='post-image-upload-file'>
									<AddAPhotoIcon
										className='add-photo-icon'
										style={this.styles.largeIcon}
									/>
								</Form.Label>
							</Form.Group>

							<img
								style={this.styles.imagePreview}
								id='output_image'
							/>

							{this.props.isImageLoading && (
								<Spinner
									style={{ marginLeft: "40%" }}
									animation='border'
									variant='primary'
								/>
							)}

							<Button
								className={
									this.state.isImage
										? "d-block save-image-button"
										: "d-none"
								}
								style={{ marginLeft: "30%", marginTop: "10%" }}
								onClick={this.props.saveImage}
								variant='primary'>
								Save Image
							</Button>
						</Form>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default PostImage;
