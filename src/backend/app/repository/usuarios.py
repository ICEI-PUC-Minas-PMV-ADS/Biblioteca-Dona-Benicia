from pymongo import MongoClient
from bson.objectid import ObjectId


class PersonRepository:
    def __init__(self, client: MongoClient):
        self.client = client
        self.db = client.get_database('biblioteca')
        self.collection = self.db["usuarios"]

    # post
    def incluir_novo_usuario(self, novo_usuario):
        result = self.collection.insert_one(novo_usuario)
        return self.obter_usuario_por_id(result.inserted_id)

    # delete
    def excluir_usuario(self, id: str):
        result = self.collection.find_one({"_id": ObjectId(id)})
        if result:
            self.collection.delete_one({"_id": ObjectId(id)})
        else:
            raise FileNotFoundError("Esse ID nao existe na base de dados")

    # put
    def editar_usuario_por_id(self, id: int, usuario_alterado: dict):
        result = self.collection.find_one({"_id": ObjectId(id)})
        if result:
            update_result = self.collection.update_one(
                {"_id": ObjectId(id)}, {"$set": usuario_alterado})
            print(update_result.modified_count)
            if update_result.modified_count == 1:
                return self.obter_usuario_por_id(id)
            else:
                return result
        else:
            raise FileNotFoundError("Esse ID nao existe na base de dados")

    # get
    def obter_usuario_por_id(self, id: str):
        result = self.collection.find_one({"_id": ObjectId(id)})
        if result:
            return result
        else:
            raise FileNotFoundError("Esse ID nao existe na base de dados")
    
    
    def get_by_username(self, username: str):
        result = self.collection.find_one({"username": username})
        if result:
            return result
        else:
            return None
    
    # get
    def obter_usuario(self):
        return list(self.collection.find(limit=20))
