import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function EditCard(props) {

    const [status, setStatus] = useState(props.card.status);
    const [description, setDescription] = useState(props.card.description);
    const [priority, setPriority] = useState(props.card.priority);
    const [name, setName] = useState(props.card.name);

    const onSave = () => {
        const newTask = {status, priority, name, description};
        props.editCard(props.card._id, newTask)
        props.toggle()
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
                <ModalHeader toggle={props.toggle}>Edit card</ModalHeader>
                <ModalBody>
                    <label htmlFor="inputPassword5" className="form-label">Card name</label>
                    <input type="text" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock"
                           value={name} onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="inputPassword5" className="form-label">Card description</label>
                    <input type="text" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />

                    <br/>
                    <label htmlFor="floatingSelect">Priority</label>
                    <select className="form-select" aria-label="Default select example"
                            value={priority}
                            onChange={setPriority}
                    >
                        {props.priorities.map((el, index) => <option value={el} key={index}>{el}</option>)}
                    </select>

                    <br/>
                    <label htmlFor="floatingSelect">Statuses</label>
                    <select className="form-select" aria-label="Default select example"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                    >
                        {props.statuses.map(el => <option value={el.title} key={el._id}>{el.title}</option>)}
                    </select>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSave}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditCard;
