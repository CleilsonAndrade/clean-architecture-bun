import { PrismaClient } from "@prisma/client";
import Usuario from "../../core/usuario/model/Usuario";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuario";

export class RepositorioUsuarioPrisma implements RepositorioUsuario {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  consultarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        email,
      }
    })
  }

  criar(usuario: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({ data: usuario })
  }


  async consultarTodos(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany()
  }

  async consultarPorId(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        id,
      }
    })
  }

}