import {CustomInput} from "./CustomInput.jsx";
import {useState} from "react";

export const StepOne = (prop) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredDes, setEnteredDes] = useState("");
    const [enteredClient, setEnteredClient] = useState("");
    const [enteredContractor, setEnteredContractor] = useState("");

    const inputChangeHandler = (type, value) => {
        let formData = {
            name: enteredName,
            description: enteredDes,
            client: enteredClient,
            contractor: enteredContractor
        }
        if (type === 'name') {
            setEnteredName(value);
            formData.name = value
        } else if (type === 'des') {
            setEnteredDes(value);
            formData.description =  value
        } else if (type === 'client') {
            setEnteredClient(value);
            formData.client = value
        } else if (type === 'contractor') {
            setEnteredContractor(value);
            formData.contractor = value
        }
        prop.onInputChangeData(formData)
    }
    return (
        <div>
            <div className={'bg-primaryColor form-card'}>
                <p className={'form-title text-white'}>Step-1: Project Data</p>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4'}>
                    <CustomInput
                        id={'pn'}
                        label={'Project Name'}
                        placeholder={'Enter Project Name'}
                        type={'text'}
                        value={enteredName}
                        onChange={(e) => inputChangeHandler('name', e.target.value)}
                        isDisable={false}
                    />
                    <CustomInput
                        id={'pd'}
                        label={'Project Description'}
                        placeholder={'Enter Project Description'}
                        type={'text'}
                        value={enteredDes}
                        onChange={(e) => inputChangeHandler('des', e.target.value)}
                        isDisable={false}
                    />
                    <CustomInput
                        id={'cl'}
                        label={'Client'}
                        placeholder={'Enter Client Name'}
                        type={'text'}
                        value={enteredClient}
                        onChange={(e) => inputChangeHandler('client', e.target.value)}
                        isDisable={false}
                    />
                    <CustomInput
                        id={'cn'}
                        label={'Contractor'}
                        placeholder={'Enter Contractor Name'}
                        type={'text'}
                        value={enteredContractor}
                        onChange={(e) => inputChangeHandler('contractor', e.target.value)}
                        isDisable={false}
                    />
                </div>
            </div>
        </div>
    )
}
