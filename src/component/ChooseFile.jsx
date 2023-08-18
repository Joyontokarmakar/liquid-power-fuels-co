
export const ChooseFile = (prop) => {
    let {id, label, type, accept, onChange, isDisable} = prop
    return (
        <div className={'file-choose-card'}>
            <label htmlFor={id} className={'file-input-label'}>{label}</label>
            <input
                id={id}
                type={type}
                accept={accept}
                onChange={onChange}
                disabled={isDisable}
                className={ 'file-input' }
            />
        </div>
    )
}
