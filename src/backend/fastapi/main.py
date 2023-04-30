from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from controller import livros
from dto.livros import LivroDTO

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

# Consultar(todos)


@app.get('/livros')
async def obter_livros() -> list[LivroDTO]:
    return

# Consultar(id)


@app.get('/livros/{id}')
async def obter_livro_por_id(id: int):
    raise HTTPException(status_code=404, detail="Livro não encontrado")

# Editar


@app.put('/livros/{id}')
async def editar_livro_por_id(id: int, livro_alterado: dict):
    raise HTTPException(status_code=404, detail="Livro não encontrado")

# Criar


@app.post('/livros')
async def incluir_novo_livro(livro: LivroDTO) -> LivroDTO:
    try:
        novo_livro = livro.dict()
        return livros.incluir_novo_livro(novo_livro)
    except:
        raise HTTPException(status_code=500, detail="Livro não inserido")

# Excluir


@app.delete('/livros/{id}')
async def excluir_livro(id: int):

    raise HTTPException(status_code=404, detail="Livro não encontrado")
