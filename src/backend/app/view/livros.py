from app.dto.livros import POSTLivroDTO, PUTLivroDTO, GETLivroDTO, DELETELivroDTO
from app.controller import livros as controller_livros
from fastapi import APIRouter, File, HTTPException, UploadFile
from typing import List

router = APIRouter()


# Consultar(todos)


@router.get('/livros', response_description="lista de livros",
            response_model=List[GETLivroDTO], tags=["livros"])
async def obter_livros():
    try:
        return controller_livros.obter_livros()
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao buscar livros")

# Consultar(id)


@router.get('/livros/{id}', response_description="livro buscado",
            response_model=GETLivroDTO, tags=["livros"])
async def obter_livro_por_id(id: str) -> GETLivroDTO:
    try:
        return controller_livros.obter_livro_por_id(id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Livro não encontrado")


# Editar
@router.put('/livros/{id}', response_description="livro atualizado",
            response_model=GETLivroDTO, tags=["livros"])
async def editar_livro_por_id(id: str, livro_alterado: PUTLivroDTO):
    try:
        return controller_livros.editar_livro_por_id(id, livro_alterado)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Livro não encontrado")
    except Exception:
        raise HTTPException(
            status_code=500, detail="Erro interno ao modificar o livro.")

# Criar


@router.post('/livros', response_description="livro inserido",
             response_model=GETLivroDTO, tags=["livros"])
async def incluir_novo_livro(livro: POSTLivroDTO) -> GETLivroDTO:
    try:
        return controller_livros.incluir_novo_livro(livro)
    except:
        raise HTTPException(
            status_code=500, detail="Erro interno ao, Livro não inserido")


@router.post("/livros/imagens/{item_id}", tags=["livros"])
async def create_upload_file(item_id: str, file: UploadFile):
    print("entrou aqui")
    try:
        return controller_livros.uploadimg_livro(item_id, file)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao fazer upload da imagem")

@router.post("/livros/pdfs/{item_id}", tags=["livros"])
async def create_upload_pdf(item_id: str, file: UploadFile):
    print("entrou aqui pdf")
    try:
        return controller_livros.uploadimg_pdf(item_id, file)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao fazer upload do pdf")


# Excluir
@router.delete('/livros/{id}', response_description="livro deletado",
               response_model=DELETELivroDTO, tags=["livros"])
async def excluir_livro(id: str):
    try:
        return controller_livros.excluir_livro(id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Livro não encontrado")
