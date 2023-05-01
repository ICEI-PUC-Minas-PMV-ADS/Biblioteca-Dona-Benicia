import os
from pymongo import MongoClient

url = os.getenv("DATABASE_URL")
client = MongoClient(url)