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

class POSTLivroDTO(BaseModel):
    titulo: str
    autor: str
    ano: int
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                "autor": "Jane Doe",
                "ano": "2020"
            }
        }

class PUTLivroDTO(BaseModel):
    titulo: str
    autor: str
    ano: int
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                "autor": "Jane Doe",
                "ano": "2020"
            }
        }


class GETLivroDTO(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    titulo: str
    autor: str
    ano: int
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id": "542c2b97bac0595474108b48",
                "titulo": "Experiments, Science, and Fashion in Nanophotonics",
                "autor": "Jane Doe",
                "ano": "2020"
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
