import {useLocation} from "react-router-dom";

export const Result = () => {
    const location = useLocation();
    let propsData = location.state;
    return (
        <div>
            <table className="border-separate border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">Project Name</th>
                        <th className="border border-slate-600">Project Description</th>
                        <th className="border border-slate-600">Client</th>
                        <th className="border border-slate-600">Contractor</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">{propsData.enteredName}</td>
                        <td className="border border-slate-700">{propsData.enteredDes}</td>
                        <td className="border border-slate-700">{propsData.enteredClient}</td>
                        <td className="border border-slate-700">{propsData.enteredContractor}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={4} className="border border-slate-600"> X-Value </th>
                    </tr>
                    <tr>
                        <th colSpan={2} className="border border-slate-600">Min</th>
                        <th colSpan={2} className="border border-slate-600">Max</th>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border border-slate-700">{propsData.minX}</td>
                        <td colSpan={2} className="border border-slate-700">{propsData.maxX}</td>
                    </tr>
                    <tr>
                        <th colSpan={4} className="border border-slate-600"> Y-Value </th>
                    </tr>
                    <tr>
                        <th colSpan={2} className="border border-slate-600">Min</th>
                        <th colSpan={2} className="border border-slate-600">Max</th>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border border-slate-700">{propsData.minY}</td>
                        <td colSpan={2} className="border border-slate-700">{propsData.maxY}</td>
                    </tr>
                    <tr>
                        <th colSpan={4} className="border border-slate-600"> Z-value </th>
                    </tr>
                    <tr>
                        <th colSpan={2} className="border border-slate-600">Min</th>
                        <th colSpan={2} className="border border-slate-600">Max</th>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border border-slate-700">{propsData.minZ}</td>
                        <td colSpan={2} className="border border-slate-700">{propsData.maxZ}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
