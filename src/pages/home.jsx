import {useState} from "react";
import Papa from "papaparse";
import {Input} from "../component/card/input.jsx";
import {Link} from "react-router-dom";

export const Home = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredDes, setEnteredDes] = useState("");
    const [enteredClient, setEnteredClient] = useState("");
    const [enteredContractor, setEnteredContractor] = useState("");
    const [minX, setMinX] = useState( 0);
    const [maxX, setMaxX] = useState( 0);
    const [minY, setMinY] = useState( 0);
    const [maxY, setMaxY] = useState( 0);
    const [minZ, setMinZ] = useState( 0);
    const [maxZ, setMaxZ] = useState( 0);


    const inputChangeHandler = (type, value) => {
        if(type === 'name'){
            setEnteredName(value);
        } else if(type === 'des'){
            setEnteredDes(value);
        } else if(type === 'client'){
            setEnteredClient(value);
        } else if(type === 'contractor'){
            setEnteredContractor(value);
        } else if(type === 'minX'){
            setMinX(value);
        } else if(type === 'maxX'){
            setMaxX(value);
        } else if(type === 'minY'){
            setMinY(value);
        } else if(type === 'maxY'){
            setMaxY(value);
        } else if(type === 'minZ'){
            setMinZ(value);
        } else if(type === 'maxZ'){
            setMaxZ(value);
        }
    }

    const handleFileChange = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {

                const keys = ['KP', 'X', 'Y', 'Z'];
                const resultArrays = {};
                keys.forEach(key => {
                    resultArrays[key] = results.data.map(item => item[key]);
                });

                setMinX(Math.min(...resultArrays.X))
                setMaxX(Math.max(...resultArrays.X))
                setMinY(Math.min(...resultArrays.Y))
                setMaxY(Math.max(...resultArrays.Y))
                setMinZ(Math.min(...resultArrays.Z))
                setMaxZ(Math.max(...resultArrays.Z))
            },
        });
    };

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

            <form className={'bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 border border-gray-300 rounded'}>
                <p className={'mb-3 text-lg font-bold'}>Step-2:</p>
                <div className={'grid grid-cols-2 gap-2'}>
                    <div className={'col-span-2'}>
                        <Input
                            id={'file'}
                            label={'Upload CSV File'}
                            type={'file'}
                            onChange={handleFileChange}
                            disability={false}
                        />
                    </div>
                    <Input
                        id={'pn2'}
                        label={'Project Name'}
                        type={'text'}
                        value={enteredName}
                        disability={true}
                    />
                    <Input
                        id={'pd2'}
                        label={'Project Description'}
                        type={'text'}
                        value={enteredDes}
                        disability={true}
                    />
                    <Input
                        id={'cl2'}
                        label={'Client'}
                        type={'text'}
                        value={enteredClient}
                        disability={true}
                    />
                    <Input
                        id={'cn2'}
                        label={'Contractor'}
                        type={'text'}
                        value={enteredContractor}
                        disability={true}
                    />

                    <div className={'col-span-2 grid grid-cols-2 gap-2 mt-5'}>
                        <Input
                            id={'min-x'}
                            label={'Min-X'}
                            type={'number'}
                            value={minX}
                            onChange={(e) => inputChangeHandler('minX', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'max-x'}
                            label={'Max-X'}
                            type={'number'}
                            value={maxX}
                            onChange={(e) => inputChangeHandler('maxX', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'min-y'}
                            label={'Min-Y'}
                            type={'number'}
                            value={minY}
                            onChange={(e) => inputChangeHandler('minY', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'max-y'}
                            label={'Max-Y'}
                            type={'number'}
                            value={maxY}
                            onChange={(e) => inputChangeHandler('maxY', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'min-z'}
                            label={'Min-Z'}
                            type={'number'}
                            value={minZ}
                            onChange={(e) => inputChangeHandler('minZ', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'max-z'}
                            label={'Max-Z'}
                            type={'number'}
                            value={maxZ}
                            onChange={(e) => inputChangeHandler('maxZ', e.target.value)}
                            disability={false}
                        />
                    </div>
                </div>
            </form>

            <Link to="/result"
                  state={{
                        enteredName: enteredName,
                        enteredDes: enteredDes,
                        enteredClient: enteredClient,
                        enteredContractor: enteredContractor,
                        minX: minX,
                        maxX: maxX,
                        minY: minY,
                        maxY: maxY,
                        minZ: minZ,
                        maxZ: maxZ
                    }}
            >
                Result
            </Link>
        </div>
    )
}
