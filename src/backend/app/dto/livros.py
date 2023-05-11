from typing import Optional
from pydantic import BaseModel, Field
from pydantic import BaseModel
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


class POSTLivroDTO(BaseModel):
    titulo: str
    autor: str
    edicao: str
    localPublicacao: str
    editora: str

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                "autor": "Jane Doe",
                "edicao": "str",
                "localPublicacao": "str",
                "editora": "str"
            }
        }


class PUTLivroDTO(BaseModel):
    titulo: str
    autor: str
    edicao: str
    localPublicacao: str
    editora: str

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                "autor": "Jane Doe",
                "edicao": "str",
                "localPublicacao": "str",
                "editora": "str"
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


class DELETELivroDTO(BaseModel):
    message: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "message": "livro excluido"
            }
        }
