function ConfirmDelete({confirmDelete}) {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modal-title">Suppression</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Voulez-vous vraiment supprimer cette ligne?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete} data-bs-dismiss="modal">Valider</button>
            </div>
        </div>
    );
}

export default ConfirmDelete;
