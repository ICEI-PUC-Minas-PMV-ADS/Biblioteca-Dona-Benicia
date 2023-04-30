from pydantic import BaseModel


class LivroDTO(BaseModel):
    titulo: str
    autor: str
    ano: int
