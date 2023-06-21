from typing import List
from pydantic import parse_obj_as
from fastapi.encoders import jsonable_encoder
from datetime import datetime, timezone

from app.settings.db import client
from app.repository.emprestimos import EmprestimoRepository
from app.repository.multas import MultaRepository

import logging
logger = logging.getLogger(__name__)


repository_emprestimos = EmprestimoRepository(client)
repository_multa = MultaRepository(client)


def definir_valor_padrao(valor):
    try:
        novo_valor = jsonable_encoder(valor)
        print(novo_valor)
        logger.info(novo_valor)
        multa_padrao = repository_multa.obter_valor_padrao()
        if multa_padrao:
            raise Exception("Multa padrao ja definida, atualize o valor existente")
        repository_multa.insert_valor_padrao(novo_valor)
        return repository_multa.obter_valor_padrao()
    except Exception as e:
        print(e)
        logger.error(e)
        raise e

def update_valor_padrao(valor):
    try:
        novo_valor = jsonable_encoder(valor)
        multa_padrao = repository_multa.obter_valor_padrao()
        multa_padrao["valor"] = novo_valor["valor"]
        repository_multa.update_valor_padrao(multa_padrao["_id"], multa_padrao)
        return repository_multa.obter_valor_padrao()
    except Exception as e:
        print(e)
        logger.error(e)
        raise e


def calcular_multa(emprestimo_id: str):
    try:
        emprestimo = repository_emprestimos.buscar_emprestimos_by_id(None, emprestimo_id)
   
        multa_padrao = repository_multa.obter_valor_padrao()
        logger.info(multa_padrao)
        print(multa_padrao)
        emprestimo["multa"] = (  datetime.now() - emprestimo["data_emprestimo"]).days * multa_padrao["valor"]
        return repository_emprestimos.update_emprestimo(emprestimo_id, emprestimo)
    except Exception as e:
        print(e)
        logger.error(e)
        raise e


def atualizar_multa(emprestimo_id: str, valor):
    try:
        novo_valor = jsonable_encoder(valor)
        emprestimo = repository_emprestimos.buscar_emprestimos_by_id(None, emprestimo_id)
        emprestimo["multa"] = novo_valor["valor"]
        repository_emprestimos.update_emprestimo(emprestimo_id, emprestimo)
        return repository_emprestimos.buscar_emprestimos_by_id(None, emprestimo_id)
    except Exception as e:
        print(e)
        logger.error(e)
        raise e

def deletar_multa(emprestimo_id: str):
    try:
        emprestimo = repository_emprestimos.buscar_emprestimos_by_id(None, emprestimo_id)
        emprestimo["multa"] = 0
        return repository_emprestimos.update_emprestimo(emprestimo_id, emprestimo)
    except Exception as e:
        print(e)
        logger.error(e)
        raise e