import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteTaskModal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onDelete = () => {
        toggle()
        props.deleteCard(props.card._id)
    }

    return (
        <>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete card</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this {props.card.name}?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDelete}>
                        Yes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteTaskModal;
