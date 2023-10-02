import Elysia from "elysia";
import ConsultarUsuarioPorId from "../core/usuario/service/ConsultarUsuarioPorId";

export default class ConsultarUsuarioPorIdController {
  constructor(
    readonly servidor: Elysia,
    readonly casoDeUso: ConsultarUsuarioPorId
  ) {
    servidor.get('/usuarios/:id', async ({ params }) => {

      return casoDeUso.executar(+params.id)
    })
  }
}