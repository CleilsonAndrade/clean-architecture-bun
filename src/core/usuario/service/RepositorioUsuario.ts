import Usuario from "../model/Usuario";

export default interface RepositorioUsuario {
  consultarTodos(): Promise<Usuario[]>
  consultarPorEmail(email: string): Promise<Usuario | null>
  consultarPorId(id: number): Promise<Usuario | null>
  criar(usuario: Usuario): Promise<Usuario>
}