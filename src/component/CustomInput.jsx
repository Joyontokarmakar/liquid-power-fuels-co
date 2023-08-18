
export const CustomInput = (prop) => {
    let {id, label, placeholder,  type, value, defaultValue, onChange, isDisable} = prop
    return (
        <div className={'input-card'}>
            <label htmlFor={id} className={'input-label'}>{label}</label><br/>
            {
                isDisable ?
                    <input
                        id={id}
                        type={type}
                        disabled={isDisable}
                        defaultValue={defaultValue}
                        className={'custom-input cursor-not-allowed'}
                    />
                    :
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className={'custom-input cursor-text'}
                    />
            }
        </div>
    )
}
