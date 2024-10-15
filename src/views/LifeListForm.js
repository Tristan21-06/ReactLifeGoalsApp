function LifeListForm({list, setList}) {
    const addToList = (event) => {
        event.preventDefault();

        let formData = new FormData(event.target);

        list.push(formData.get('newValue'));
        setList([
            ...list
        ]);
    }

    return (
        <>
            <form onSubmit={addToList}>
                <input name={"newValue"} id={"newValue"} className="form-control" type="text"/>
                <button className={"btn btn-success"} type={"submit"}>+ Ajouter</button>
            </form>
        </>
    );
}

export default LifeListForm;
