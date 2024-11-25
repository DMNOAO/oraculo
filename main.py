from fastapi import FastAPI, HTTPException, File, Form, UploadFile
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from enum import Enum

app = FastAPI()

# Configura los orígenes permitidos
origins = [
    "http://127.0.0.1:8101",  # Si estás usando Ionic en este puerto
    "http://localhost:8101",  # También puedes permitir localhost si usas este
]

# Configurar el middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir solicitudes desde estos orígenes
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

# Crear una carpeta para guardar las imágenes
UPLOAD_FOLDER = 'C:/Users/dark_/OneDrive/Escritorio/oraculo/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Montar la carpeta de imágenes como estática
app.mount("/uploads", StaticFiles(directory=UPLOAD_FOLDER), name="uploads")

# Modelos
class Edicion(BaseModel):
    id_edicion: str
    name_edicion: str
    imagen: str  # Aquí guardaremos la URL de la imagen


class Carta(BaseModel):
    id_carta: str
    name_carta: str
    tipo: str
    coste: Optional[int] = 0  # Cambiar a Optional[int] para permitir que sea null
    id_edicion: str
    rareza: str
    imagen: str  # URL de la imagen


class Raza(Enum):
    CABALLERO = "Caballero"
    FAIRE = "Faire"
    DRAGON = "Dragon"
    TITAN = "Titan"
    OLIMPICO = "Olimpico"
    HEROE = "Heroe"
    SOMBRA = "Sombra"
    DESAFIANTE = "Desafiante"
    DEFENSOR = "Defensor"
    ETERNO = "Eterno"
    FARAON = "Faraon"
    SACERDOTE = "Sacerdote"


# Datos simulados
ediciones_db = [
    {"id_edicion": "ES", "name_edicion": "ESPADA SAGRADA", "imagen": "http://127.0.0.1:8001/uploads/espada_sagrada.png"},
    {"id_edicion": "HE", "name_edicion": "HELENICA", "imagen": "http://127.0.0.1:8001/uploads/helenica.png"},
    {"id_edicion": "HD", "name_edicion": "HIJOS DE DAANA", "imagen": "http://127.0.0.1:8001/uploads/hijos_de_daana.png"},
    {"id_edicion": "DR", "name_edicion": "DOMINIOS DE RA", "imagen": "http://127.0.0.1:8001/uploads/dominios_de_ra.png"},
]

cartas_db = [
    {
        "id_carta": "ES-001",
        "name_carta": "REY ARTURO PENDRAGON ",
        "tipo": "aliado",
        "coste": 5,
        "id_edicion": "ES",
        "rareza": "REAL",
        "imagen": "http://127.0.0.1:8001/uploads/cartas_ES/ES_001.webp",
        "fuerza": 2,
        "raza": Raza.CABALLERO,
    }
]

# Endpoint para obtener todas las ediciones
@app.get("/ediciones", response_model=List[Edicion])
async def get_ediciones():
    return ediciones_db


# Endpoint para obtener todas las cartas
@app.get("/cartas", response_model=List[Carta])
async def get_cartas():
    return cartas_db


# Endpoint para obtener una edición por su ID
@app.get("/ediciones/{id_edicion}", response_model=Edicion)
async def get_edicion_by_id(id_edicion: str):
    edicion = next((e for e in ediciones_db if e["id_edicion"] == id_edicion), None)
    if edicion is None:
        raise HTTPException(status_code=404, detail="Edición no encontrada")
    return edicion


# Endpoint para obtener una carta por su ID
@app.get("/cartas/{id_carta}", response_model=Carta)
async def get_carta_by_id(id_carta: str):
    carta = next((c for c in cartas_db if c["id_carta"] == id_carta), None)
    if carta is None:
        raise HTTPException(status_code=404, detail="Carta no encontrada")
    return carta


# Endpoint para agregar una nueva edición con imagen
@app.post("/ediciones", response_model=Edicion)
async def create_edicion(edicion: Edicion, image: UploadFile = File(...)):
    image_filename = os.path.join(UPLOAD_FOLDER, image.filename)
    with open(image_filename, "wb") as img_file:
        img_file.write(await image.read())

    # Guardamos la URL de la imagen
    image_url = f"http://127.0.0.1:8001/uploads/{image.filename}"
    edicion.imagen = image_url
    ediciones_db.append(edicion.dict())
    return edicion


# Endpoint para agregar una nueva carta con imagen
@app.post("/cartas", response_model=Carta)
async def create_carta(
    id_carta: str = Form(...),
    name_carta: str = Form(...),
    tipo: str = Form(...),
    coste: Optional[int] = Form(None),
    id_edicion: str = Form(...),
    rareza: str = Form(...),
    image: UploadFile = File(...),
):
    image_filename = os.path.join(UPLOAD_FOLDER, image.filename)
    with open(image_filename, "wb") as img_file:
        img_file.write(await image.read())

    # Guardamos la URL de la imagen
    image_url = f"http://127.0.0.1:8001/uploads/{image.filename}"

    # Crear la carta con los datos recibidos
    carta = Carta(
        id_carta=id_carta,
        name_carta=name_carta,
        tipo=tipo,
        coste=coste,
        id_edicion=id_edicion,
        rareza=rareza,
        imagen=image_url,
    )

    # Agregar la carta a la base de datos simulada
    cartas_db.append(carta.dict())
    return carta


# Endpoint para actualizar una carta con imagen
@app.put("/cartas/{id_carta}", response_model=Carta)
async def update_carta(
    id_carta: str,
    carta: Carta,
    image: UploadFile = File(...),
):
    for idx, existing_carta in enumerate(cartas_db):
        if existing_carta["id_carta"] == id_carta:
            image_filename = os.path.join(UPLOAD_FOLDER, image.filename)
            with open(image_filename, "wb") as img_file:
                img_file.write(await image.read())
            
            # Guardamos la URL de la imagen
            image_url = f"http://127.0.0.1:8001/uploads/{image.filename}"
            carta.imagen = image_url
            cartas_db[idx] = carta.dict()  # Actualizamos los datos
            return cartas_db[idx]
    
    raise HTTPException(status_code=404, detail="Carta no encontrada")

@app.get("/test_uploads")
async def test_uploads():
    return {"message": "La carpeta de uploads está siendo servida correctamente."}
