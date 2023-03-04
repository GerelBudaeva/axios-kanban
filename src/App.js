import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from './components/Column';
import CreateCard from './components/CreateCard';

function App() {

    const [statuses, setStatuses] = useState([]);
    const [cards, setCards] = useState([]);
    const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const getStatuses = () => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then((res) => {
                setStatuses(res.data)
            })
            .catch((error) => {
                alert('Error')
            })
    }

    const getCards = () => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then((res) => {
                setCards(res.data)
            })
            .catch((error) => {
                alert('error')
            })
    }

    useEffect(() => {
        getStatuses();
        getCards();
    }, []);

    const editCard = (id, newTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, newTask)
            .then(res => {
                getCards()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteCard = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res => {
                getCards()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const changePriority = (id, priority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
            priority
        })
            .then(res => {
                getCards()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const createCard = (newTask) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => {
                getCards()
            })
            .catch(err => {
                console.log(err)
            })

    }

    const moveCard = (id, oldStatus, direction) => {
        const newStatuses = statuses.map(el => el.title); // create arr of statuses
        const oldStatusIndex = newStatuses.indexOf(oldStatus); // find old status index
        const newStatusIndex = oldStatusIndex + direction; // change direction
        const newStatus = newStatuses[newStatusIndex]; // get new status of task
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
            status: newStatus
        })
            .then(res => {
                getCards()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <h1>Kanban Board</h1>
                <hr/>
                <CreateCard
                    statuses={statuses}
                    priorities={priorities}
                    createCard={createCard}
                />
                <br/>
                {statuses.map(status =>
                    <Column
                        key={status._id}
                        status={status}
                        cards={cards}
                        deleteCard={deleteCard}
                        changePriority={changePriority}
                        priorities={priorities}
                        statuses={statuses}
                        editCard={editCard}
                        moveCard={moveCard}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
