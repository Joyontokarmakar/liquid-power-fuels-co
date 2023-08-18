import {useState} from "react";
import {ChooseFile} from "./ChooseFile.jsx";
import Loader from "./Loader.jsx";
import {Line} from "react-chartjs-2";
import Papa from "papaparse";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const LineChart = (prop) => {
    const [kpData, setKpData] = useState([]);
    const [xData, setXData] = useState([]);
    const [loading, setLoading] = useState(false)
    const handleFileChange = (event) => {
        Papa.parse(event.target.files[0], {

            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setLoading(true);
                const keys = ['KP', 'X', 'Y', 'Z'];
                const resultArrays = {};
                keys.forEach(key => {
                    resultArrays[key] = results.data.map(item => item[key]);
                });
                setKpData(resultArrays.KP);
                setXData(resultArrays.X);

                const csvData = {
                    minX: Math.min(...resultArrays.X),
                    maxX: Math.max(...resultArrays.X),
                    minY: Math.min(...resultArrays.Y),
                    maxY: Math.max(...resultArrays.Y),
                    minZ: Math.min(...resultArrays.Z),
                    maxZ: Math.max(...resultArrays.Z)
                }
                prop.onInputCSVData(csvData)
                setLoading(false)
            },
        });
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Prototype Chart with KP and X value from CSV',
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'x-axis = KP',
                    color: '#0d9488',
                    font: {
                        size: 14,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'y-axis = X',
                    color: '#0d9488',
                    font: {
                        size: 14,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                }
            }
        }
    };

    const labels = kpData;

    const data = {
        labels,
        datasets: [
            {
                data: xData,
                borderColor: '#0d9488',
                backgroundColor: '#ef7f1d',
            }
        ],
    };
    return (
        <div className={'mt-4'}>
            <div className={'mx-auto w-full lg:w-1/2'}>
                <ChooseFile
                    id={'file'}
                    label={'Choose Your CSV File'}
                    type={'file'}
                    accept={'.csv'}
                    onChange={handleFileChange}
                    isDisable={false}
                />
            </div>
            {
                kpData.length
                    ?
                    <div className={'mx-auto w-full lg:w-4/5 chart-card'}>
                        {
                            loading
                                ? <Loader/>
                                : <Line options={options} data={data}/>
                        }
                    </div>
                    :
                    <></>
            }
        </div>
    )
}
