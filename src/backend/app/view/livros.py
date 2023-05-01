from app.dto.livros import POSTLivroDTO, PUTLivroDTO, GETLivroDTO, DELETELivroDTO
from app.controller import livros as controller_livros
from fastapi import APIRouter, HTTPException
from typing import List

router = APIRouter()


# verificar se esta ligado
@router.get("/healthcheck")
async def healthcheck():
    return {"message": "Olá todos"}

# Consultar(todos)


@router.get('/livros', response_description="lista de livros",
         response_model=List[GETLivroDTO])
async def obter_livros():
    try:
        return controller_livros.obter_livros()
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao buscar livros")

# Consultar(id)


@router.get('/livros/{id}', response_description="livro buscado",
         response_model=GETLivroDTO)
async def obter_livro_por_id(id: str) -> GETLivroDTO:
    try:
        return controller_livros.obter_livro_por_id(id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Livro não encontrado")


# Editar
@router.put('/livros/{id}', response_description="livro atualizado",
         response_model=GETLivroDTO)
async def editar_livro_por_id(id:str, livro_alterado: PUTLivroDTO):
    try:
        return controller_livros.editar_livro_por_id(id, livro_alterado)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Livro não encontrado")
    except Exception:
        raise HTTPException(
            status_code=500, detail="Erro interno ao modificar o livro.")

# Criar


@router.post('/livros', response_description="livro inserido",
         response_model=GETLivroDTO)
async def incluir_novo_livro(livro: POSTLivroDTO) -> GETLivroDTO:
    try:
        return controller_livros.incluir_novo_livro(livro)
    except:
        raise HTTPException(
            status_code=500, detail="Erro interno ao, Livro não inserido")

# Excluir


@router.delete('/livros/{id}', response_description="livro deletado",
         response_model=DELETELivroDTO)
async def excluir_livro(id: str):
    try:
        return controller_livros.excluir_livro(id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Livro não encontrado")
