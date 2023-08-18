import {Link, useLocation} from "react-router-dom";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import {Table} from "../component/Table.jsx";

export const Result = () => {
    const location = useLocation();
    let propsData = location.state;

    const handleGeneratePdf = () => {
        const pdf = new jsPDF();

        // header
        const currentDate = new Date().toLocaleDateString();
        pdf.setFontSize(14);
        pdf.text(`XYZ-Engine Project Information - ${currentDate}`, 10, 10);

        pdf.autoTable({
            html: '#dataTable',
            startY: 20,
            theme: 'grid', // Apply grid theme
            styles: {
                cell: {
                    textAlign: 'center', // Center-align cells
                    valign: 'middle',   // Vertically align cells in the middle
                },
                head: {
                    fontSize: 12,
                },
            },
        });
        pdf.save(`XYZ-Engine Project Information - ${currentDate}.pdf`);
    };

    return (
        <div>
            <div className={'w-full form-card bg-lightColor text-primaryColor'}>
                <p className={'form-title'}>Project Details</p>
                <Table tableData={propsData}/>
            </div>

            <div className={'flex flex-col lg:flex-row justify-center gap-y-6 lg:gap-y-0 lg:gap-x-6 my-8'}>
                <button className={'submit-btn block'} onClick={handleGeneratePdf}>
                    <img src="/pdf-icon.svg" alt="" className={'w-[20px]'}/>
                    Download
                </button>
                <Link to={'/'} className={'submit-btn'}>
                    <img src="/home-icon.svg" alt="" className={'w-[20px]'}/>
                    Go To Home
                </Link>
            </div>
        </div>
    )
}
