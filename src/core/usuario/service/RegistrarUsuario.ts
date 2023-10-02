import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuario";

type Entrada = {
  nome: string
  email: string
  senha: string
}

export default class RegistrarUsuario implements CasoDeUso<Entrada, void> {
  constructor(private readonly repositorio: RepositorioUsuario) { }

  async executar(dados: Entrada): Promise<void> {
    const { nome, email, senha } = dados

    const usuarioExistente = await this.repositorio.consultarPorEmail(email)

    if (usuarioExistente) {
      throw new Error('Usuário ja existe')
    }

    await this.repositorio.criar({
      nome,
      email,
      senha,
    })
  }

}