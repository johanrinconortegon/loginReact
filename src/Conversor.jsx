import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  const [textoAvoz, setTextoAVoz] = useState('')
  const [vozATexto, setvozATexto] = useState('')
  
  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }
  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }
  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado
  }

    return (
      <>
        <h1>Conversor TTS Y STT</h1>
        <br />
        <h3>Conversor de texto a voz</h3>
        <input type="text" id="textoAVoz" value={textoAvoz} onChange={cambiarTexto} />
        <button onClick={convertirTextoAVoz}>Convertir</button>

        <h3>Conversor de voz a texto</h3>
        <button onClick={grabarVozATexto}>Grabar</button>
        {vozATexto}
      </>
    );
  
}
export default Conversor
