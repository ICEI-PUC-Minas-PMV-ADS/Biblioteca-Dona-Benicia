from pydantic import BaseModel, Field, EmailStr
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

class POSTUsuarioDTO(BaseModel):
    nome: str
    sobrenome: str
    username: str
    email: str
    senha: str
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "nome": "Ana Carolina",
                "sobrenome": "Fernades",
                "username": "aninha",
                "email": "teste@gmail.com",
                "senha": "********"
            }
        }

class PUTUsuario(BaseModel):
    nome: str
    sobrenome: str
    email: str
    senha: str
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "nome": "Ana Carolina",
                "sobrenome": "Fernades",
                "email": "teste123@gmail.com",
                "senha": "********"
            }
        }


class GETUsuarioDTO(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id" )
    nome: str
    sobrenome: str
    username: str
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
                "username": "aninha",
                "email": "teste@gmail.com"
            }
        }

class DELETEUsuarioDTO(BaseModel):
    message: str
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "message": "usuario excluido"
            }
        }
