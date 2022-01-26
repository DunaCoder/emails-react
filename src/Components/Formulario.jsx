// inportante añadir el useState en el formulario 
import { useState,useEffect } from "react"
import './style/Formulario.css'

function Formulario({Destino,setDestino}) {
    // hooks
    const [Email, setEmail] = useState('');
    const [Asunto, setAsunto] = useState('');
    const [Mensaje, setMensaje] = useState('');

    const [error, setError] = useState(false)
   

    // funciones
    const haledSubmit = (e) =>{
        e.preventDefault();

        // validacion
        if([ Email, Asunto, Mensaje].includes('')){
            // esto activa el mensaje
            setError(true)
            return
        }
        setError(false)
        //  esta funcion tiene que ir arriba del prop
         // crear arreglo
         const ojectoDestino ={
            Email, Asunto, Mensaje
         }
         console.log(ojectoDestino)  

        //prop de email, hace una copia y crea otro arreglo 
        setDestino([...Destino, ojectoDestino])

        // reiniciar formulario 
        setEmail('')
        setAsunto('')
        setMensaje('')
    }

 
    // poner el todos los elemnots en un label y un form 
    return (
        <div>
            <h2 className='colorH1'>enviar nuevo correo</h2>
           <label>
               {/* onSubmit poenerlo en el form */}
          <form className="formulario" onSubmit={haledSubmit}>
         {/* muestra el mensaje en pantalla */}
         {error && 
            <div className="errorEstilo">
                <h3>
                llena todos los campos 
                </h3>
            </div>}
          <div>
            <input placeholder="para" className="estilosInput" type="email" value={Email}
            // hay que pasarle el evento y aceder al input con value y target
            onChange={ (e) => setEmail(e.target.value)}/>
           </div>

           <div>
            <input  placeholder="Asunto" className="estilosInput" type="text" value={Asunto} 
            onChange={ (e) => setAsunto(e.target.value)} />
           </div>

           <div>
            <textarea placeholder="mensaje" className="estilosInput textArea" value={Mensaje}
             onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
           </div>

           <div>
            <button id='enviar' className="botonEstilos"> Enviar</button>
            {/* <button id='resetear'>Reset</button> */}
        </div>
          </form>
           </label>
        </div>
    )
}

export default Formulario
