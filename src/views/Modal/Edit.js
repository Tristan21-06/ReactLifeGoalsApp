function Edit({confirmEdit}) {
    return (
        <form className="modal-content" onSubmit={confirmEdit}>
            <div className="modal-header">
                <h5 className="modal-title" id="modal-title">Suppression</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                    <input name={"editedValue"} id={"editedValue"} className="form-control" type="text"/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Modifier</button>
            </div>
        </form>
    );
}

export default Edit;
