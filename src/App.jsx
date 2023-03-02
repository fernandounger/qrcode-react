import './App.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { useState } from 'react'

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(Link_url){
    QRCodeLink.toDataURL(Link_url, {
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="App">

      <QRCode
        value={link}
      />

      <input 
        type="text" 
        className='input'
        placeholder='Digite seu link...' 
        value={link}
        onChange={(e) => handleQrcode(e)}
      />
      <div>
        <a href="{qrcodeLink}" download={`qrcode.png`}>Baixar QrCode</a>
      </div>
    </div>
  )
}

export default App
