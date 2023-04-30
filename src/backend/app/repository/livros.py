import os
from pymongo import MongoClient

url = os.getenv("DATABASE_URL")

client = MongoClient(url)
db = client.get_database('biblioteca')

# Selecione o banco de dados e a coleção
col = db["livros"]


livros = [
    {
        'id': 1,
        'título': 'O Senhor dos Anéis - A Sociedade do Anel',
        'autor': 'J.R.R Tolkien'
    },
    {
        'id': 2,
        'título': 'Harry Potter e a Pedra Filosofal',
        'autor': 'J.K Howling'
    },
    {
        'id': 3,
        'título': 'James Clear',
        'autor': 'Hábitos Atômicos'
    },
]


def incluir_novo_livro(novo_livro):
    col.insert_one(novo_livro)
    return novo_livro



def excluir_livro(id: int):
    for indice, livro in enumerate(livros):
        if livro.get('id') == id:
            del livros[indice]


def editar_livro_por_id(id: int, livro_alterado: dict):
    for indice, livro in enumerate(livros):
        if livro.get('id') == id:
            livros[indice].update(livro_alterado)
            return livros[indice]


def obter_livro_por_id(id: int):
    for livro in livros:
        if livro.get('id') == id:
            return livro


def obter_livros():
    return livros
