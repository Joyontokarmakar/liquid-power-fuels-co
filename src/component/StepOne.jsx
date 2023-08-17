import {Input} from "./card/input.jsx";
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
            <form className={'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300 rounded'}>
                <p className={'mb-3 text-lg font-bold'}>Step-1:</p>
                <div className={'grid grid-cols-2 gap-2'}>
                    <Input
                        id={'pn'}
                        label={'Project Name'}
                        type={'text'}
                        value={enteredName}
                        onChange={(e) => inputChangeHandler('name', e.target.value)}
                        disability={false}
                    />
                    <Input
                        id={'pd'}
                        label={'Project Description'}
                        type={'text'}
                        value={enteredDes}
                        onChange={(e) => inputChangeHandler('des', e.target.value)}
                        disability={false}
                    />
                    <Input
                        id={'cl'}
                        label={'Client'}
                        type={'text'}
                        value={enteredClient}
                        onChange={(e) => inputChangeHandler('client', e.target.value)}
                        disability={false}
                    />
                    <Input
                        id={'cn'}
                        label={'Contractor'}
                        type={'text'}
                        value={enteredContractor}
                        onChange={(e) => inputChangeHandler('contractor', e.target.value)}
                        disability={false}
                    />
                </div>
            </form>
        </div>
    )
}
