from app.dto.multas import GETValorPadraoDTO, POSTValorPadraoDTO, PUTValorPadraoDTO
from app.dto.emprestimos import GETEmprestimoDTO
from app.controller import multas as controller_multas
from app.dto.usuarios import GETUsuarioDTO
from fastapi import APIRouter, HTTPException, Depends
from app.view.login import get_current_user

router = APIRouter()

@router.post('/multas', response_description="define valor padrao da multa",
             response_model=GETValorPadraoDTO, tags=["multas"])
async def definir_valor_padrao(valor: POSTValorPadraoDTO, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETValorPadraoDTO:
    try:
        return controller_multas.definir_valor_padrao(valor)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=str(e))

@router.put('/multas', response_description="atualiza valor padrao da multa",
             response_model=GETValorPadraoDTO, tags=["multas"])
async def update_valor_padrao(valor: PUTValorPadraoDTO, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETValorPadraoDTO:
    try:
        return controller_multas.update_valor_padrao(valor)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=str(e))

@router.post('/emprestimos/{emprestimoId}/multas', response_description="calcula a multa",
             response_model=GETEmprestimoDTO, tags=["multas"])
async def calcular_multa(emprestimoId: str, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETEmprestimoDTO:
    try:
        return controller_multas.calcular_multa(emprestimoId)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=str(e))


@router.put('/emprestimos/{emprestimoId}/multas', response_description="atualiza valor da multa em um emprestimo",
             response_model=GETEmprestimoDTO, tags=["multas"])
async def atualizar_multa(emprestimoId: str, valor: PUTValorPadraoDTO, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETEmprestimoDTO:
    try:
        return controller_multas.atualizar_multa(emprestimoId, valor)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=str(e))

@router.delete('/emprestimos/{emprestimoId}/multas', response_description="zera valor da multa em um emprestimo",
             response_model=GETEmprestimoDTO, tags=["multas"])
async def deletar_multa(emprestimoId: str, current_user: GETUsuarioDTO = Depends(get_current_user)) -> GETEmprestimoDTO:
    try:
        return controller_multas.deletar_multa(emprestimoId)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=str(e))