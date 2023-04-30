from repository import livros

def incluir_novo_livro(novo_livro):
    try:
        return livros.incluir_novo_livro(novo_livro)
    except Exception as e:
        print(e)
        raise Exception("nao foi possivel incluir")

def excluir_livro(id: int):
    return

def editar_livro_por_id(id: int, livro_alterado: dict):
    return

def obter_livro_por_id(id: int):
    return

def obter_livros():
    return