import { useState } from "react"
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification"
import validInputs from "../../utils/validUser"


export function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const nav = useNavigate()

  const validUsuario = (): void => {
    if (email === "" || password === "") {
      return useNotification('Todos os campos devem ser preenchidos', 'error')
    }

    if(!validInputs(email, password)){
        return useNotification('Preencha os compos de forma correta', 'error')
      }

      return nav('/')
  }

  return (
    <>
      <h1>Tela de login</h1>
      <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={ email } onChange={ (event) => setEmail(event.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" value={ password } onChange={ (event) => setPassword(event.target.value)} />
          </div>
      
        <button type="button" onClick={ validUsuario } >Cadastrar</button>
      </form>
      
    </>
  )
}