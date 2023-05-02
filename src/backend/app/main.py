from app.view.livros import router as livros_router
from app.view.usuarios import router as usuarios_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from dotenv import load_dotenv
load_dotenv()


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# verificar se esta ligado
@app.get("/healthcheck")
async def healthcheck():
    return {"message": "Olá todos"}

app.include_router(livros_router, prefix='')
app.include_router(usuarios_router, prefix='')

