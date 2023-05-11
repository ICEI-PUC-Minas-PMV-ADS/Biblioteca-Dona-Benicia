from pymongo import MongoClient
from bson.objectid import ObjectId


class BookRepository:
    def __init__(self, client: MongoClient):
        self.client = client
        self.db = client.get_database('biblioteca')
        self.collection = self.db["livros"]

    # post
    def incluir_novo_livro(self, novo_livro):
        result = self.collection.insert_one(novo_livro)
        return self.obter_livro_por_id(result.inserted_id)
    

    # delete
    def excluir_livro(self, id: str):
        result = self.collection.find_one({"_id": ObjectId(id)})
        if result:
            self.collection.delete_one({"_id": ObjectId(id)})
        else:
            raise FileNotFoundError("Esse ID nao existe na base de dados")

    # put
    def editar_livro_por_id(self, id: int, livro_alterado: dict):
        result = self.collection.find_one({"_id": ObjectId(id)})
        if result:
            update_result = self.collection.update_one(
                {"_id": ObjectId(id)}, {"$set": livro_alterado})
            print(update_result.modified_count)
            if update_result.modified_count == 1:
                return self.obter_livro_por_id(id)
            else:
                return result
        else:
            raise FileNotFoundError("Esse ID nao existe na base de dados")

    # get
    def obter_livro_por_id(self, id: str):
        result = self.collection.find_one({"_id": ObjectId(id)})
        if result:
            return result
        else:
            raise FileNotFoundError("Esse ID nao existe na base de dados")

    # get
    def obter_livros(self):
        return list(self.collection.find(limit=20))
    
