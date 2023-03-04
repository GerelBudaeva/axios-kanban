import React from 'react';
import Card from './Card';

const Column = (props) => {
    return (
            <div className="col">
                <h3>{props.status.title.toUpperCase()}</h3>
                {props.cards.filter(card => card.status === props.status.title).map(card =>
                    <Card
                        key={card._id}
                        card={card}
                        deleteCard={props.deleteCard}
                        changePriority={props.changePriority}
                        priorities={props.priorities}
                        statuses={props.statuses}
                        editCard={props.editCard}
                        moveCard={props.moveCard}
                    />
                )}
            </div>
    );
};

export default Column;
