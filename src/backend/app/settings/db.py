import os
from pymongo import MongoClient
from azure.storage.blob import BlobServiceClient

import logging

logger = logging.getLogger(__name__)

url = os.getenv("DATABASE_URL")
client = MongoClient(url)
connection_string = os.getenv("CONNECTION_STRING")
container_name_img = os.getenv("CONTAINER_IMG_NAME")
container_name_pdf = os.getenv("CONTAINER_PDF_NAME")

def get_blob_client_img(item_id: int, filename: str):

    blob_service_client = BlobServiceClient.from_connection_string(
        connection_string)
    container_client = blob_service_client.get_container_client(container_name_img)
    blob_client = container_client.get_blob_client(f"{item_id}/{filename}")
    return blob_client

def get_blob_client_pdf(item_id: int, filename: str):

    blob_service_client = BlobServiceClient.from_connection_string(
        connection_string)
    container_client = blob_service_client.get_container_client(container_name_pdf)
    blob_client = container_client.get_blob_client(f"{item_id}/{filename}")
    return blob_client