import {useLocation} from "react-router-dom";
import jsPDF from 'jspdf';
import {useRef} from "react";
import {Table} from "../component/Table.jsx";

export const Result = () => {
    const location = useLocation();
    let propsData = location.state;
    const reportTemplateRef = useRef(null);

    const handleGeneratePdf = () => {
        const doc = new jsPDF({
            format: 'a4',
            unit: 'px',
        });

        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                doc.save('Final_Result');
            },
        });
    };

    return (
        <div>
            <div ref={reportTemplateRef}>
                <Table tableData={propsData}/>
            </div>

            <button className="bg-primaryColor mx-auto my-8 block text-lightColor rounded-md text-lg px-10 py-2 active:scale-90 ease-in-out duration-100" onClick={handleGeneratePdf}>
                Generate PDF
            </button>
        </div>
    )
}
