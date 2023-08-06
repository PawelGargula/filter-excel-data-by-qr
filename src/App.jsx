import './App.css'
import { useState } from 'react'
import ExcelReader from './components/ExcelReader'
import Reader from './components/Reader'

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
      <ExcelReader setExcelData={setExcelData}/>
      {excelData && <p>Example of readed data: {excelData[0][0]} - {excelData[0][1]}</p>}
      <label>Find by id </label>
      <input type="text" value={searchingText} onChange={(e) => setSearchingText(e.target.value)} />
      <Reader setSearchingText={setSearchingText}/>
      <p><b>Information</b> {dataFoundValue}</p>

    </>
  )
}

export default App
