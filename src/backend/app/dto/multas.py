from typing import Optional
from pydantic import BaseModel, Field
from pydantic import BaseModel
from bson import ObjectId

class POSTValorPadraoDTO(BaseModel):
    valor: float

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "valor": 1.3
            }
        }

class PUTValorPadraoDTO(BaseModel):
    valor: float

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "valor": 1.3
            }
        }

class GETValorPadraoDTO(BaseModel):
    valor: float

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "valor": 1.3
            }
        }