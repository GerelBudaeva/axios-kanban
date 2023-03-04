import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateCard(props) {

    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState(props.statuses[0]);
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(props.priorities[0]);
    const [name, setName] = useState('');

    const toggle = () => {
        setModal(!modal)
        setStatus(props.statuses[0].title);
        setPriority(props.priorities[0]);
        setName('');
        setDescription('');
    };

    const onCreate = () => {
        toggle()
        const newTask = {name, status, description, priority}
        props.createCard(newTask);

    }

    return (
        <div>
            <Button color="success" onClick={toggle}>
                Create card
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create card</ModalHeader>
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
                    <Button color="primary" onClick={onCreate}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateCard;
