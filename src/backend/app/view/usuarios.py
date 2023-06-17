from app.dto.usuarios import POSTUsuarioDTO, PUTUsuario, GETUsuarioDTO, DELETEUsuarioDTO
from app.controller import usuarios as controller_usuarios
from fastapi import APIRouter, HTTPException, Depends
from app.view.login import get_current_user
from typing import List

router = APIRouter()


# Consultar(todos)


@router.get('/usuarios', response_description="lista de usuarios",
            response_model=List[GETUsuarioDTO], tags=["usuarios"])
async def obter_usuarios(current_user: GETUsuarioDTO = Depends(get_current_user)):
    try:
        return controller_usuarios.obter_usuario()
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao buscar usuarios")

# Consultar(id)


@router.get('/usuarios/{id}', response_description="usuario buscado",
            response_model=GETUsuarioDTO, tags=["usuarios"])
async def obter_usuario_por_id(id: str, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETUsuarioDTO:
    try:
        return controller_usuarios.obter_usuario_por_id(id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="usuario não encontrado")


# Editar
@router.put('/usuarios/{id}', response_description="usuario atualizado",
            response_model=GETUsuarioDTO, tags=["usuarios"])
async def editar_usuario_por_id(id: str, usuario_alterado: PUTUsuario, current_user: GETUsuarioDTO = Depends(get_current_user)):
    try:
        return controller_usuarios.editar_usuario_por_id(id, usuario_alterado)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="usuario não encontrado")
    except Exception:
        raise HTTPException(
            status_code=500, detail="Erro interno ao modificar o usuario.")

# Criar


@router.post('/usuarios', response_description="usuario inserido",
             response_model=GETUsuarioDTO, tags=["usuarios"])
async def incluir_novo_usuario(usuario: POSTUsuarioDTO) -> GETUsuarioDTO:
    try:
        return controller_usuarios.incluir_novo_usuario(usuario)
    except:
        raise HTTPException(
            status_code=500, detail="Erro interno ao, usuario não inserido")

# Excluir


@router.delete('/usuarios/{id}', response_description="ususario deletado",
               response_model=DELETEUsuarioDTO, tags=["usuarios"])
async def excluir_usuario(id: str, current_user: GETUsuarioDTO = Depends(get_current_user)):
    try:
        return controller_usuarios.excluir_usuario(id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="usuario não encontrado")
