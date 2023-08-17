import {Input} from "./card/input.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import {LineChart} from "./LineChart.jsx";

export const StepTwo = (prop) => {
    const [chartData, setChartData] = useState({})
    const [minX, setMinX] = useState(0);
    const [maxX, setMaxX] = useState(0);
    const [minY, setMinY] = useState(0);
    const [maxY, setMaxY] = useState(0);
    const [minZ, setMinZ] = useState(0);
    const [maxZ, setMaxZ] = useState(0);

    const inputFormOneData = prop.enteredData;
    const inputChangeHandler = (type, value) => {
        if(type === 'minX'){
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
    const inputChartDataHandler = (data) => {
        setChartData(data)
        console.log('chartData===>', chartData)
    }

    return (
        <div>
            <form className={'bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 border border-gray-300 rounded'}>
                <p className={'mb-3 text-lg font-bold'}>Step-2:</p>
                <div className={'grid grid-cols-2 gap-2'}>
                    <div className={'col-span-2'}>
                        <LineChart onInputCSVData={inputChartDataHandler}/>
                    </div>
                    <Input
                        id={'pn2'}
                        label={'Project Name'}
                        type={'text'}
                        value={inputFormOneData.name}
                        disability={true}
                    />
                    <Input
                        id={'pd2'}
                        label={'Project Description'}
                        type={'text'}
                        value={inputFormOneData.description}
                        disability={true}
                    />
                    <Input
                        id={'cl2'}
                        label={'Client'}
                        type={'text'}
                        value={inputFormOneData.client}
                        disability={true}
                    />
                    <Input
                        id={'cn2'}
                        label={'Contractor'}
                        type={'text'}
                        value={inputFormOneData.contractor}
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
                      enteredName: inputFormOneData.name,
                      enteredDes: inputFormOneData.description,
                      enteredClient: inputFormOneData.client,
                      enteredContractor: inputFormOneData.contractor,
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
