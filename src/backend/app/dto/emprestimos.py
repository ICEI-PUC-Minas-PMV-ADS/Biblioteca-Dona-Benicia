from datetime import datetime, timezone
from typing import Optional
from pydantic import BaseModel, Field
from pydantic import BaseModel, validator
from bson import ObjectId


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class GETUsuarioDTO(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id" )
    nome: str
    sobrenome: str
    email: str
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id": "542c2b97bac0595474108b48",
                "nome": "Ana Carolina",
                "sobrenome": "Fernades",
                "email": "teste@gmail.com",
            }
        }

class GETLivroDTO(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    titulo: str
    autor: str
    edicao: Optional[str]
    localPublicacao: Optional[str]
    editora: Optional[str]
    img: Optional[str]
    pdf: Optional[str]


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id": "542c2b97bac0595474108b48",
                "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                "autor": "Jane Doe",
                "edicao": "str",
                "localPublicacao": "str",
                "editora": "str",
                "img": "https://donabenicia.blob.core.windows.net/imagem-livro/api-na-azure-swagger.png",
                "pdf": "https://donabenicia.blob.core.windows.net/livro-pdf/Documento42.pdf"

            }
        }



class GETEmprestimoDTO(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    aluno: GETUsuarioDTO
    livro: GETLivroDTO
    data_emprestimo: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    multa: float

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id": "542c2b97bac0595474108b48",
                "aluno": {
                    "id": "542c2b97bac0595474108b48",
                    "nome": "Ana Carolina",
                    "sobrenome": "Fernades",
                    "email": "teste@gmail.com",
                },
                "livro": {
                    "id": "542c2b97bac0595474108b48",
                    "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                    "autor": "Jane Doe",
                    "edicao": "str",
                    "localPublicacao": "str",
                    "editora": "str",
                    "img": "https://donabenicia.blob.core.windows.net/imagem-livro/api-na-azure-swagger.png",
                    "pdf": "https://donabenicia.blob.core.windows.net/livro-pdf/Documento42.pdf"
                },
                "data_emprestimo": "2023-06-17 12:00:00",
                "multa": 1
            }
        }


class DELETEEmprestimoDTO(BaseModel):
    message: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "message": "emprestimo excluido"
            }
        }
