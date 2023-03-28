import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api";
import useNotification from "../../hooks/useNotification";

export function Login() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handClick = async (): Promise<void> => {
    try {
      const login = await api.post('/user/session', { email, password: senha })
      localStorage.setItem("token", login.data.token)
      nav('/Home')
    } catch (error) {
      useNotification('E-mail ou senha inválidos', 'error')
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      nav('/Home')
    }
  }, [])

  return (
    <div>
      <h1>Tela de login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input id="senha" type="text" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>

        <button type="button" onClick={handClick} >Enviar</button>
      </form>
    </div>
  )
}