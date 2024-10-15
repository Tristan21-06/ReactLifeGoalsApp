import {useState} from "react";
import LifeListForm from "./LifeListForm";
import Modal from "./Modal";

function LifeList() {
    const [list, setList] = useState([
        "Faire les courses",
        "Aller à la salle de sport 3 fois par semaine",
        "Monter à plus de 5000m d altitude",
        "Acheter mon premier appartement",
        "Perdre 5 kgs",
        "Gagner en productivité",
        "Apprendre un nouveau langage",
        "Faire une mission en freelance",
        "Organiser un meetup autour de la tech",
        "Faire un triathlon",
    ]);

    const [actionIndex, setActionindex] = useState(null)
    const [currentAction, setCurrentAction] = useState(null)

    const beginAction = (action, index) => {
        setCurrentAction(action);
        setActionindex(index);

        document.querySelector('#display-modal').click();
    };

    const removeFromList = () => {
        list.splice(actionIndex, 1);

        setList([
            ...list
        ]);
    }

    const editFromList = (event) => {
        let formData = new FormData(event.target);
        list[actionIndex] = formData.get('editedValue');

        setList([
            ...list
        ]);
    }

    const confirmAction = (event) => {
        event.preventDefault();

        switch (currentAction) {
            case 'delete':
                removeFromList();
                break;
            case 'edit':
                editFromList(event);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <LifeListForm list={list} setList={setList}/>
            <table>
                <tbody>
                {
                    list.map(
                        (el, index) =>
                            <tr key={index}>
                                <td>{el}</td>
                                <td className="actions">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => beginAction('edit', index)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => beginAction('delete', index)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>

            <button className="visually-hidden" id="display-modal" data-bs-toggle="modal" data-bs-target="#modal">
                Afficher la modale
            </button>
            <Modal currentAction={currentAction} confirmAction={confirmAction}/>
        </>
    );
}

export default LifeList;
