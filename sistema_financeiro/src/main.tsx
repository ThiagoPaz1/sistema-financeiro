import React from 'react'
import { createServer, Model } from 'miragejs'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

createServer({
  models: {
    user: Model
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          name: "Flavio",
          email: "flavioteste@gmail.com",
          password: "1234",
          createdAt: new Date("2023-02-01")
        },
        {
          id: 2,
          name: "Eraldo",
          email: "eraldoteste@gmail.com",
          password: "12345",
          createdAt: new Date("2023-02-01")
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.post("/login", (_schema, request) => {
      const req: { email: string, password: string } = JSON.parse(request.requestBody)
      const findUser = this.schema.all("user").models.find((i: any) => i.email === req.email && i.password === req.password)

      if (findUser) {
        return findUser
      } else {
        return "Dados inválidos"
      }
    })

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
