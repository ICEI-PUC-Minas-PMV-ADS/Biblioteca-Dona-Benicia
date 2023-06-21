from pymongo import MongoClient
from bson.objectid import ObjectId


class EmprestimoRepository:
    def __init__(self, client: MongoClient):
        self.client = client
        self.db = client.get_database('biblioteca')
        self.collection = self.db["emprestimos"]

    def insert_emprestimo(self, emprestimo):
        result = self.db.emprestimos.insert_one(emprestimo)
        return self.buscar_emprestimos_by_id(None, result.inserted_id)

    def obter_emprestimos(self, alunoId):
        return list(self.db.emprestimos.find({"aluno._id": ObjectId(alunoId)}))
    
    def buscar_emprestimos_by_id(self, alunoId, emprestimo_id):
        return self.db.emprestimos.find_one({"_id": ObjectId(emprestimo_id)})


    def update_emprestimo(self, emprestimo_id, update_data):
        update_result = self.db.emprestimos.update_one({"_id": ObjectId(emprestimo_id)}, {"$set": update_data})
        if update_result.modified_count == 1:
            return self.buscar_emprestimos_by_id(None, emprestimo_id)
        else:
            return update_result


    def delete_emprestimo(self, alunoId, emprestimo_id):
        return self.db.emprestimos.delete_one({"_id": ObjectId(emprestimo_id)})