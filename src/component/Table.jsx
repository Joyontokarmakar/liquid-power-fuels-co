
export const Table = (prop) => {
    const {tableData} = prop
    const styles = {
        page: {
            marginLeft: '5rem',
            marginRight: '5rem',
            'page-break-after': 'always',
            padding: '5px',
            backgroundColor: '#fff'
        },
        tableStyle: {
            borderCollapse: 'collapse',
            width: '100%',
            border: '1px solid black'
        },
        rowStyle : {
            backgroundColor: '#f2f2f2'
        },
        flexStyle:{
          display: 'flex',
          justifyContent: 'space-between',
        },
        cellStyle : {
            border: '1px solid black',
            padding: '8px',
            textAlign: 'center'
        }
    }
    return (
        <div style={styles.page}>
            <table style={styles.tableStyle}>
                <thead>
                <tr style={styles.rowStyle}>
                    <th style={styles.cellStyle}>Project Name</th>
                    <th style={styles.cellStyle}>Project Description</th>
                    <th style={styles.cellStyle}>Client</th>
                    <th style={styles.cellStyle}>Contractor</th>
                </tr>
                <tr style={styles.rowStyle}>
                    <td style={styles.cellStyle}>{tableData.enteredName || 'N/A'}</td>
                    <td style={styles.cellStyle}>{tableData.enteredDes || 'N/A'}</td>
                    <td style={styles.cellStyle}>{tableData.enteredClient || 'N/A'}</td>
                    <td style={styles.cellStyle}>{tableData.enteredContractor || 'N/A'}</td>
                </tr>
                </thead>
                <tbody>
                    <tr style={styles.rowStyle}>
                        <th colSpan="4" style={styles.cellStyle}>X-Value</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="2" style={styles.cellStyle}>Min</th>
                        <th colSpan="2" style={styles.cellStyle}>Max</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <td colSpan="2" style={styles.cellStyle}>{tableData.minX}</td>
                        <td colSpan="2" style={styles.cellStyle}>{tableData.maxX}</td>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="4" style={styles.cellStyle}>Y-Value</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="2" style={styles.cellStyle}>Min</th>
                        <th colSpan="2" style={styles.cellStyle}>Max</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <td colSpan="2" style={styles.cellStyle}>{tableData.minY}</td>
                        <td colSpan="2" style={styles.cellStyle}>{tableData.maxY}</td>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="4" style={styles.cellStyle}>Z-Value</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <th colSpan="2" style={styles.cellStyle}>Min</th>
                        <th colSpan="2" style={styles.cellStyle}>Max</th>
                    </tr>
                    <tr style={styles.rowStyle}>
                        <td colSpan="2" style={styles.cellStyle}>{tableData.minZ}</td>
                        <td colSpan="2" style={styles.cellStyle}>{tableData.maxZ}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
