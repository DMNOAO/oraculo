
from pydantic import BaseModel
from typing import List
from enum import Enum

# Modelo para Edición
class Edicion(BaseModel):
    id_edicion: str
    name_edicion: str
    imagen: str

# Modelo para Carta
class Carta(BaseModel):
    id_carta: str
    name_carta: str
    tipo: str
    coste: int
    id_edicion: str
    rareza: str
    imagen: str

# Definir un Enum para la raza
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

# Modelo de Aliado con el campo raza usando el Enum
class Aliado(BaseModel):
    id_carta: str
    name_carta: str
    tipo: str
    coste: int
    id_edicion: str
    rareza: str
    imagen: str
    fuerza: int
    raza: Raza  # Ahora raza debe ser uno de los valores del Enum

# Ejemplo de datos para Aliado
aliados_db = [
    {
        "id_carta": "C003",
        "name_carta": "Aliado Legendario",
        "tipo": "aliado",
        "coste": 10,
        "id_edicion": "E001",
        "rareza": "epica",
        "imagen": "url_aliado_legendario",
        "fuerza": 15,
        "raza": Raza.CABALLERO
    }
]