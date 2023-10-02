import Elysia from "elysia";
import ConsultarUsuarios from "../core/usuario/service/ConsultarUsuarios";

export default class ConsultarUsuarioController {
  constructor(
    readonly servidor: Elysia,
    readonly casoDeUso: ConsultarUsuarios
  ) {
    servidor.get('/usuarios', async () => {

      return casoDeUso.executar()
    })
  }
}