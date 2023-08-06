import * as XLSX from "xlsx"

export default function ExcelReader({ setExcelData }) {
    const handleFileUpload = (e) => {
        const reader = new FileReader()
        reader.readAsBinaryString(e.target.files[0])
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1});
          setExcelData(parsedData)
        }
      }
    
      return (
        <div>
          <h2>Read Excel file</h2>
          <p>Excel data should be of structure Id - Information (Id have to be in the first column)</p>
          <label htmlFor="file">Choose Excel file to read</label>
          <input type="file" accept='.xlsx, .xls' name="file" id="file" onChange={handleFileUpload}/>
        </div>
      )
}