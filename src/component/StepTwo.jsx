import {Input} from "./input.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LineChart} from "./LineChart.jsx";

export const StepTwo = (prop) => {
    // const [chartData, setChartData] = useState({})
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
        setMinX(data.minX);
        setMaxX(data.maxX);
        setMinY(data.minY);
        setMaxY(data.maxY);
        setMinZ(data.minZ);
        setMaxZ(data.maxZ);
    }

    return (
        <div>
            <div className={'bg-darkAshColor form-card mt-10'}>
                <p className={'form-title text-white'}>Step-2: Project Details</p>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4'}>
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

                    <div className={'col-span-1 lg:col-span-2'}>
                        <LineChart onInputCSVData={inputChartDataHandler}/>
                    </div>

                    <div className={'col-span-1 lg:col-span-2 grid-cols-1 lg:grid grid-cols-2 gap-2 mt-5'}>
                        <Input
                            id={'min-x'}
                            label={'Min-X'}
                            placeholder={'Min-X'}
                            type={'number'}
                            value={minX}
                            onChange={(e) => inputChangeHandler('minX', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'max-x'}
                            label={'Max-X'}
                            placeholder={'Max-X'}
                            type={'number'}
                            value={maxX}
                            onChange={(e) => inputChangeHandler('maxX', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'min-y'}
                            label={'Min-Y'}
                            placeholder={'Min-Y'}
                            type={'number'}
                            value={minY}
                            onChange={(e) => inputChangeHandler('minY', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'max-y'}
                            label={'Max-Y'}
                            placeholder={'Max-Y'}
                            type={'number'}
                            value={maxY}
                            onChange={(e) => inputChangeHandler('maxY', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'min-z'}
                            label={'Min-Z'}
                            placeholder={'Min-Z'}
                            type={'number'}
                            value={minZ}
                            onChange={(e) => inputChangeHandler('minZ', e.target.value)}
                            disability={false}
                        />
                        <Input
                            id={'max-z'}
                            label={'Max-Z'}
                            placeholder={'Max-Z'}
                            type={'number'}
                            value={maxZ}
                            onChange={(e) => inputChangeHandler('maxZ', e.target.value)}
                            disability={false}
                        />
                    </div>
                </div>

                <div className={'col-span-1 lg:col-span-2'}>
                    <div className={'flex justify-center gap-x-6 my-8'}>
                        <Link to="/result"
                              className={'submit-btn'}
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
                            <img src="/result-icon.svg" alt="" className={'w-[20px]'}/>
                            Show Result
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
