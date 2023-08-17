import {Input} from "./card/input.jsx";
import {Line} from "react-chartjs-2";
import Papa from "papaparse";
import {useState} from "react";
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
                // setMinX(Math.min(...resultArrays.X));
                // setMaxX(Math.max(...resultArrays.X));
                // setMinY(Math.min(...resultArrays.Y));
                // setMaxY(Math.max(...resultArrays.Y));
                // setMinZ(Math.min(...resultArrays.Z));
                // setMaxZ(Math.max(...resultArrays.Z));
                prop.onInputCSVData(csvData)
            },
        });
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = kpData;

    const data = {
        labels,
        datasets: [
            {
                data: xData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return (
        <div className={'col-span-2 grid grid-cols-2 gap-2'}>
            <Input
                id={'file'}
                label={'Upload CSV File'}
                type={'file'}
                onChange={handleFileChange}
                disability={false}
            />
            <div className={'input-card'}>
                {
                    kpData.length ?
                        <Line doptions={options} data={data}
                        /> : <></>
                }
            </div>
        </div>
    )
}
