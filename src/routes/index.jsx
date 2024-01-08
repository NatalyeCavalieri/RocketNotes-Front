import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app.routes"
import { AppAuth } from "./auth.routes"

export function Routes() {
  return (
    <BrowserRouter>
      <AppAuth />
    </BrowserRouter>
  )
}
