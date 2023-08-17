
export const ChooseFile = (prop) => {
    let {id, label, type, onChange, disability} = prop
    return (
        <div className={'file-choose-card'}>
            <label htmlFor={id} className={'file-input-label'}>{label}</label>
            <input
                id={id}
                type={type}
                onChange={onChange}
                disabled={disability}
                className={ 'file-input' }
            />
        </div>
    )
}
