import React, { useState } from "react";
import { api } from "../../services/api";

export function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handClick = async () => {
    try {
      const login = await api.post('/user/logar', { email, password: senha })
      console.log(login.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Tela de login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="email">Senha:</label>
          <input id="senha" type="text" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>

        <button type="button" onClick={handClick} >Enviar</button>
      </form>
    </div>
  )
}