from pymongo import MongoClient
from bson.objectid import ObjectId


class MultaRepository:
    def __init__(self, client: MongoClient):
        self.client = client
        self.db = client.get_database('biblioteca')
        self.collection = self.db["multas"]

    def insert_valor_padrao(self, emprestimo):
        return self.db.multas.insert_one(emprestimo)

    def obter_valor_padrao(self):
        return self.db.multas.find_one()


    def update_valor_padrao(self, multa_id, update_data):
        return self.db.multas.update_one({"_id": ObjectId(multa_id)}, {"$set": update_data})
