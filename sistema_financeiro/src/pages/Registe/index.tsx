import { useState } from "react"
import { useNavigate } from "react-router-dom";
import validRegister from "../../utils/validUser"
import { toast } from 'react-toastify';

export function Registe() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [validUser, setValidUser ] = useState<boolean>(false)
  const nav = useNavigate()

  const validUsuario = (): any => {
    if (name === "" || email === "" || password === "") {
      return toast.error("Todos os campos deve ser preenchidos")
    }

    if(!validRegister(email, name, password)){
        setValidUser(true)
        return toast.error("Preencha os campos de forma correta")
      }

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
