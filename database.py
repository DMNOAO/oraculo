import json

with open("data.json", "r") as file:
    data = json.load(file)

ediciones_db = data["ediciones"]
cartas_db = data["cartas"]

# Guardar datos en un archivo JSON (puedes usar esto al actualizar datos)
def save_data():
    with open("data.json", "w") as file:
        json.dump({"ediciones": ediciones_db, "cartas": cartas_db}, file)
        
ediciones_db = [
    {"id_edicion": "E001", "name_edicion": "Primera Edición", "imagen": "url_imagen_1"},
    {"id_edicion": "E002", "name_edicion": "Segunda Edición", "imagen": "url_imagen_2"},
]

cartas_db = [
    {"id_carta": "C001", "name_carta": "Carta Uno", "tipo": "hechizo", "coste": 5, "id_edicion": "E001", "rareza": "común", "imagen": "url_carta_1"},
    {"id_carta": "C002", "name_carta": "Carta Dos", "tipo": "aliado", "coste": 8, "id_edicion": "E002", "rareza": "rara", "imagen": "url_carta_2", "fuerza": 10, "raza": "elfo"},
]
