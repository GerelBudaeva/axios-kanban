import React, {useState} from 'react';
import EditCard from './EditCard';
import DeleteTaskModal from './DeleteTaskModal';

const Card = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5>{props.card.status}</h5>
            </div>
            <div className="card-body">
                <h6 className="card-title">{props.card.name}</h6>
                <p className="card-text">{props.card.description}</p>

                <p className="card-text">
                    Priority: {props.card.priority}
                    {' '}
                    <button type="button" className="btn btn-info"
                            disabled={+props.card.priority === props.priorities[props.priorities.length - 1]}
                            onClick={() => props.changePriority(props.card._id, +props.card.priority + 1)}
                    > ↑
                    </button>
                    {' '}
                    <button type="button" className="btn btn-info"
                            disabled={+props.card.priority === props.priorities[0]}
                            onClick={() => props.changePriority(props.card._id, +props.card.priority - 1)}
                    > ↓
                    </button>
                </p>

                <div>
                    <button type="button" className="btn btn-secondary"
                            disabled={props.statuses[0].title === props.card.status}
                            onClick={() => props.moveCard(props.card._id, props.card.status, - 1)}
                    > ←
                    </button>
                    {' '}
                    <DeleteTaskModal card={props.card}
                                     deleteCard={props.deleteCard}
                    />
                    {' '}
                    <button type="button" className="btn btn-success" onClick={toggle}> Edit</button>
                    {' '}
                    <button type="button" className="btn btn-secondary"
                            disabled={props.statuses[props.statuses.length - 1] === props.card.status}
                            onClick={() => props.moveCard(props.card._id, props.card.status, + 1)}
                    > →
                    </button>

                    <EditCard
                        priorities={props.priorities}
                        toggle={toggle}
                        modal={modal}
                        statuses={props.statuses}
                        card={props.card}
                        editCard={props.editCard}
                    />

                </div>
            </div>
        </div>
    );
};

export default Card;
