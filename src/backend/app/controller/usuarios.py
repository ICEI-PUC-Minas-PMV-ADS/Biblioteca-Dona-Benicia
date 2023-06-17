from typing import List
from pydantic import parse_obj_as
from fastapi.encoders import jsonable_encoder
from passlib.context import CryptContext
from app.settings.db import client
from app.dto.usuarios import POSTUsuarioDTO, GETUsuarioDTO, PUTUsuario, DELETEUsuarioDTO
from app.repository.usuarios import PersonRepository

import logging
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

repository_usuarios = PersonRepository(client)

def get_password_hash(password):
    return pwd_context.hash(password)

def incluir_novo_usuario(usuario: POSTUsuarioDTO):
    try:
        novo_usuario = jsonable_encoder(usuario)
        novo_usuario["senha"] = get_password_hash(novo_usuario["senha"])
        user = repository_usuarios.incluir_novo_usuario(novo_usuario)
        logging.info(user)
        print(user)
        del user["senha"]
        return user
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def excluir_usuario(id: str):
    try:
        repository_usuarios.excluir_usuario(id)
        return parse_obj_as(DELETEUsuarioDTO, {"message": "usuario excluido"})
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def editar_usuario_por_id(id: str, usuario_alterado: PUTUsuario):
    try:
        novo_usuario = usuario_alterado.dict()
        return repository_usuarios.editar_usuario_por_id(id, novo_usuario)
    except Exception as e:
        print(e)
        logging.error(e)
        raise e


def obter_usuario_por_id(id: str) -> GETUsuarioDTO:
    try:
        return repository_usuarios.obter_usuario_por_id(id)
    except Exception as e:
        print(e)
        logging.error(e)
        raise e

def get_by_username(username: str)-> GETUsuarioDTO:
    try:
        return repository_usuarios.get_by_username(username)
    except Exception as e:
        print(e)
        logging.error(e)
        raise e

def obter_usuario():
    try:
        result = repository_usuarios.obter_usuario()
        return result
    except Exception as e:
        print(e)
        logging.error(e)
        raise e
