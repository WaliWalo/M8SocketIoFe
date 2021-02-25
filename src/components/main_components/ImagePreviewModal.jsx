import React, { Component } from "react";
import { Modal } from "react-bootstrap";
const ImagePreviewModal = (props) => {
	const style = {
		img: {
			width: "100%",
			height: "100%",
			//objectFit: "cover",
			borderRadius: "10px",
		},
	};
	{
		return (
			<Modal
				{...props}
				className='preview-image-modal img-fluid'
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Body>
					<img style={style.img} src={props.image} alt='preview' />
				</Modal.Body>
			</Modal>
		);
	}
};

export default ImagePreviewModal;
