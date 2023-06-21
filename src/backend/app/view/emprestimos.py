from app.dto.emprestimos import GETEmprestimoDTO, DELETEEmprestimoDTO
from app.controller import emprestimos as controller_emprestimos
from app.dto.emprestimos import GETUsuarioDTO
from fastapi import APIRouter, HTTPException, Depends
from app.view.login import get_current_user
from typing import List
from typing_extensions import Annotated


router = APIRouter()

@router.post('/usuarios/{alunoId}/emprestimos/{livroId}', response_description="faz emprestimo do livro",
            response_model=GETEmprestimoDTO, tags=["emprestimos"])
async def emprestar_livro(alunoId: str, livroId: str, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETEmprestimoDTO:
    try:
        return controller_emprestimos.emprestar_livro(livroId, alunoId)
    except:
        raise HTTPException(
            status_code=500, detail="Erro interno, Emprestimo não realizado")

@router.get('/usuarios/{alunoId}/emprestimos', response_description="obtem emprestimos do aluno",
            response_model=List[GETEmprestimoDTO], tags=["emprestimos"])
async def buscar_emprestimos(alunoId: str, current_user: GETUsuarioDTO = Depends(get_current_user)):
    try:
        return controller_emprestimos.buscar_emprestimos(alunoId)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao buscar emprestimos")


@router.get('/usuarios/{alunoId}/emprestimos/{emprestimoId}', response_description="obtem apenas um emprestimo",
            response_model=GETEmprestimoDTO, tags=["emprestimos"])
async def buscar_emprestimos_by_id(alunoId: str, emprestimoId: str, current_user: GETUsuarioDTO = Depends(get_current_user)):
    try:
        return controller_emprestimos.buscar_emprestimos_by_id(alunoId, emprestimoId)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Erro interno ao buscar emprestimos")

# Excluir
@router.delete('/usuarios/{alunoId}/emprestimos/{emprestimoId}', response_description="deleta um emprestimo",
               response_model=DELETEEmprestimoDTO, tags=["emprestimos"])
async def excluir_emprestimo(alunoId: str, emprestimoId:str, current_user: GETUsuarioDTO = Depends(get_current_user)):
    try:
        return controller_emprestimos.excluir_emprestimo(alunoId, emprestimoId)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Emprestimo não encontrado")