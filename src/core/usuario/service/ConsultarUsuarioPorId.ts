import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default class ConsultarUsuarioPorId implements CasoDeUso<number, Usuario | null>{
  constructor(private readonly repositorio: RepositorioUsuario) { }

  executar(id: number): Promise<Usuario | null> {
    return this.repositorio.consultarPorId(id)
  }

}