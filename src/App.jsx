import './App.css'
import { useState } from 'react'
import ExcelReader from './components/ExcelReader'
import BarcodeReader from './components/BarcodeReader'

function App() {
  const [excelData, setExcelData] = useState(null)
  const [searchingText, setSearchingText] = useState("")
  const dataFound = excelData && excelData.find(eD => 
    eD[0].toString().toLowerCase() === searchingText.toString().toLowerCase()
  )
  const dataFoundValue = dataFound ? dataFound[1] : "No information"
  
  return (
    <>
      <h1>Filter Excel data by QR/Barcode</h1>
      <div>
        <ExcelReader setExcelData={setExcelData}/>
        {excelData && <p>Your data structure: {excelData[0][0]} - {excelData[0][1]}</p>}
      </div>
      <div>
        <h2>Find information by Id </h2>
        <label>Id</label>
        <input 
          id="id" 
          onChange={(e) => setSearchingText(e.target.value)} 
          type="text" 
          value={searchingText} 
          placeholder='Enter id or read by camera'
        />
        <BarcodeReader setSearchingText={setSearchingText}/>
        <p><b>Information</b> {dataFoundValue}</p>
      </div>
    </>
  )
}

export default App
