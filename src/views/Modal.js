import ConfirmDelete from "./Modal/ConfirmDelete";
import Edit from "./Modal/Edit";

function Modal({currentAction, confirmAction}) {
    let component;

    switch(currentAction) {
        case 'delete':
            component = (
                <ConfirmDelete confirmDelete={confirmAction} />
            )
            break;
        case 'edit':
            component = (
                <Edit confirmEdit={confirmAction} />
            )
            break;
        default:
            component = null
            break;
    }

    return (
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
            <div className="modal-dialog">
                {component}
            </div>
        </div>
    );
}

export default Modal;
