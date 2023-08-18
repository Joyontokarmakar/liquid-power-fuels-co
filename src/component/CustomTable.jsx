
export const CustomTable = (prop) => {
    const {tableData} = prop
    const styles = {
        tableStyle: {
            width: '100%',
            border: '1px solid #0f172a'
        },
        rowStyle : {
            backgroundColor: '#ecfeff'
        },
        cellStyle1 : {
            border: '1px solid #0f172a',
            textAlign: 'center',
            width: '24%',
            color: '#030712'
        },
        cellStyle2 : {
            border: '1px solid #0f172a',
            textAlign: 'center',
            width: '48%',
            color: '#030712'
        }
    }
    return (
        <div>
            <table style={styles.tableStyle} id={'dataTable'}>
                <thead>
                    <tr style={styles.rowStyle}>
                        <th style={styles.cellStyle1}>Project Name</th>
                        <th style={styles.cellStyle1}>Project Description</th>
                        <th style={styles.cellStyle1}>Client</th>
                        <th style={styles.cellStyle1}>Contractor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={styles.rowStyle}>
                        <td style={styles.cellStyle1}>{tableData.enteredName || 'N/A'}</td>
                        <td style={styles.cellStyle1}>{tableData.enteredDes || 'N/A'}</td>
                        <td style={styles.cellStyle1}>{tableData.enteredClient || 'N/A'}</td>
                        <td style={styles.cellStyle1}>{tableData.enteredContractor || 'N/A'}</td>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="2" style={styles.cellStyle2}>X-Min</th>
                        <th colSpan="2" style={styles.cellStyle2}>X-Max</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <td colSpan="2" style={styles.cellStyle2}>{tableData.minX}</td>
                        <td colSpan="2" style={styles.cellStyle2}>{tableData.maxX}</td>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="2" style={styles.cellStyle2}>Y-Min</th>
                        <th colSpan="2" style={styles.cellStyle2}>Y-Max</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <td colSpan="2" style={styles.cellStyle2}>{tableData.minY}</td>
                        <td colSpan="2" style={styles.cellStyle2}>{tableData.maxY}</td>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="2" style={styles.cellStyle2}>Z-Min</th>
                        <th colSpan="2" style={styles.cellStyle2}>Z-Max</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <td colSpan="2" style={styles.cellStyle2}>{tableData.minZ}</td>
                        <td colSpan="2" style={styles.cellStyle2}>{tableData.maxZ}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
