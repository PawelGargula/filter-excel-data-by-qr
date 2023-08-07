import './App.css'
import { useState, useMemo } from 'react'
import ExcelReader from './components/ExcelReader'
import BarcodeReader from './components/BarcodeReader'

function App() {
  const [excelData, setExcelData] = useState(null)
  const [searchingText, setSearchingText] = useState("")
  
  const dataFoundValues = useMemo(() => {
    const dataFound = excelData && excelData.find(eD => 
      eD[0].toString().toLowerCase() === searchingText.toString().toLowerCase()
    )
    return dataFound 
      ? dataFound.slice(1).map((value) => <li key={value}>{value}</li>) 
      : <li>No informations</li>
  }, [excelData, searchingText])
  
  return (
    <>
      <h1>Filter Excel data by QR/Barcode</h1>
      <div className='read-excel'>
        <ExcelReader setExcelData={setExcelData}/>
      </div>
      <div className='find-information'>
        <h2>Find Informations by Id </h2>
        <div className='center-child'>
          <input 
            aria-label='Data id'
            id="id" 
            placeholder='Enter Id or read QR'
            onChange={(e) => setSearchingText(e.target.value)} 
            type="text" 
            value={searchingText} 
          />
          <BarcodeReader setSearchingText={setSearchingText}/>
        </div>
        <div id="reader" width="600"></div>
        <h3>Informations</h3>
        <ul>
          {dataFoundValues}
        </ul>
      </div>
    </>
  )
}

export default App
