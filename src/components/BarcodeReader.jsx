import { useEffect, useState } from 'react'
import {Html5Qrcode} from "html5-qrcode";
import cameraIcon from '../assets/camera-svgrepo-com.svg'
import cameraSlashIcon from '../assets/camera-slash-svgrepo-com.svg'
import scrollToFinding from "../scrollToFinding"

export default function BarcodeReader({ setSearchingText }) {
    const [reader, setReader] = useState(null)
    const [reading, setReading] = useState(false)

    function startReading() {
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          stopReading()
          setSearchingText(decodedText)
        };
        
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        
        reader.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
            .then(() => {
              setReading(true)
              scrollToFinding()
            })
            .catch((err) => alert("Cannot start back camera"));
      }
    
      function stopReading() {
        reader.stop()
            .then(() => setReading(false))
            .catch((err) => alert.error(err))
      }
    
      useEffect(() => {
        setReader(new Html5Qrcode("reader"))
      }, [])

      return (
        <>
            <button 
                onClick={() => reading ? stopReading() : startReading()}
                aria-label={reading ? "Stop reading" : "Read code by camera"}
            >
              <img src={reading ? cameraSlashIcon : cameraIcon} alt={reading ? "camera slash" : "camera"} />
            </button>
        </>
      )
}