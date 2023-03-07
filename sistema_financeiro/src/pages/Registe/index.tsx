import { useState } from "react"
import { useNavigate } from "react-router-dom";
import validRegister from "../../utils/validUser"
import useNotification from "../../hooks/useNotification";
import { api } from "../../services/api";

export function Registe() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [validUser, setValidUser ] = useState<boolean>(false)
  const nav = useNavigate()

  const validUsuario = async (): Promise<void> => {
    if (name === "" || email === "" || password === "") {
      return useNotification('Todos os campos devem ser preenchidos', 'error')
    }

    if(!validRegister(email, name, password)){
        setValidUser(true)
        return useNotification('Preencha os compos de forma correta', 'error')
      }

      await api.post('/user/create', { name, email, password })

      return nav('/')
  }

  
  return (
    <>
      <h1>Tela de cadastro</h1>
      <form action="">
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={ name } onChange={ (event) => setName(event.target.value)} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={ email } onChange={ (event) => setEmail(event.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" value={ password } onChange={ (event) => setPassword(event.target.value)} />
          </div>
          { validUser && <p>Digite um e-mail valido <br /> Nome precisa ter ao menos 3 carácteres <br />  O password precisa ter no mínimo 6 caracteres, contendo letras e números </p> }
        <button type="button" onClick={ validUsuario } >Cadastrar</button>

      </form>
    </>
  )
}
