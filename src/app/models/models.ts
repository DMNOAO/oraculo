// Edición
export interface Edicion {
    id_edicion: string; // Clave primaria
    name_edicion: string; // Nombre de la edición
    imagen: string; // URL de la imagen
  }
  
  // Carta
  export interface Carta {
    id_carta: string; // Clave primaria
    name_carta: string; // Nombre de la carta
    tipo: string; // Ejemplo: 'aliado', 'hechizo'
    coste: number | null; // Coste de la carta
    id_edicion: string; // Clave foránea a Edicion
    rareza: string; // Ejemplo: 'común', 'rara'
    imagen: string; // URL de la imagen
  }
  
  // Aliado (Subclase de Carta)
  export interface Aliado extends Carta {
    fuerza: number| null; // Atributo especial de Aliado
    raza: string; // Raza del aliado
    
  }
  