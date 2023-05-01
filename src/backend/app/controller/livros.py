from typing import List
from pydantic import parse_obj_as
from fastapi.encoders import jsonable_encoder

from app.settings.db import client
from app.dto.livros import POSTLivroDTO, GETLivroDTO, PUTLivroDTO, DELETELivroDTO
from app.repository.livros import BookRepository

import logging

repository_livros = BookRepository(client)


def incluir_novo_livro(livro: POSTLivroDTO):
    try:
        novo_livro = jsonable_encoder(livro)
        return repository_livros.incluir_novo_livro(novo_livro)
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def excluir_livro(id: str):
    try:
        repository_livros.excluir_livro(id)
        return parse_obj_as(DELETELivroDTO, {"message": "livro excluido"})
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def editar_livro_por_id(id: str, livro_alterado: PUTLivroDTO):
    try:
        novo_livro = livro_alterado.dict()
        return repository_livros.editar_livro_por_id(id, novo_livro)
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def obter_livro_por_id(id: str) -> GETLivroDTO:
    try:
        return repository_livros.obter_livro_por_id(id)
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def obter_livros():
    try:
        result = repository_livros.obter_livros()
        return result
    except Exception as e:
        print(e)
        logging.error(e)
        raise e
