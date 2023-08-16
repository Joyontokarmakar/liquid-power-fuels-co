
export const Input = (prop) => {
    let {id, label, type, value, onChange, disability} = prop
    return (
        <div className={'input-card'}>
            <label htmlFor={id} className={'input-label'}>{label}</label><br/>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                disabled={disability}
                className={'custom-input'}
            />
        </div>
    )
}
