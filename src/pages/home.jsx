import {useState} from "react";
import {StepOne} from "../component/StepOne.jsx";
import {StepTwo} from "../component/StepTwo.jsx";

export const Home = () => {
    const [formData, setFormData] = useState({})
    const inputDataChangeHandler = (data) => {
        setFormData(data)
    }
    return (
        <div>
            <StepOne onInputChangeData={inputDataChangeHandler}/>
            <StepTwo enteredData={formData}/>
        </div>
    )
}
