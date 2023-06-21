from datetime import datetime, timezone
from app.settings.db import client
from app.repository.livros import BookRepository
from app.repository.usuarios import PersonRepository
from app.repository.emprestimos import EmprestimoRepository

import logging
logger = logging.getLogger(__name__)


repository_livros = BookRepository(client)
repository_usuarios = PersonRepository(client)
repository_emprestimos = EmprestimoRepository(client)


def emprestar_livro(livroId, alunoId):
    try:
        livro = repository_livros.obter_livro_por_id(livroId)
        aluno = repository_usuarios.obter_usuario_por_id(alunoId)
        del aluno["senha"]
        data_emprestimo = datetime.now(timezone.utc)
        emprestimo = { "aluno": aluno,  "livro":livro, "data_emprestimo": data_emprestimo, "multa":float(0) }
        return repository_emprestimos.insert_emprestimo(emprestimo)
    except Exception as e:
        print(e)
        logger.error(e)
        raise e

def buscar_emprestimos(alunoId):
    try:
        result = repository_emprestimos.obter_emprestimos(alunoId)
        return result
    except Exception as e:
        print(e)
        logger.error(e)
        raise e

def buscar_emprestimos_by_id(alunoId, emprestimoId):
    try:
        result = repository_emprestimos.buscar_emprestimos_by_id(alunoId, emprestimoId)
        return result
    except Exception as e:
        print(e)
        logger.error(e)
        raise e

def excluir_emprestimo(alunoId, emprestimoId):
    try:
        repository_emprestimos.delete_emprestimo(alunoId, emprestimoId)
        return  { "message": "emprestimo excluido" }
    except Exception as e:
        print(e)
        logger.error(e)
        raise e