// lib/cleaverData.ts

export interface Opcion {
  palabra: string;
  letra: string;
}

export interface Bloque {
  bloque: number;
  opciones: Opcion[];
}

export const CLEAVER_BLOCKS: Bloque[] = [
  { "bloque": 1, "opciones": [{"palabra": "Persuasivo", "letra": "I"}, {"palabra": "Gentil", "letra": "S"}, {"palabra": "Humilde", "letra": "C"}, {"palabra": "Original", "letra": "D"}] },
  { "bloque": 2, "opciones": [{"palabra": "Agresivo", "letra": "D"}, {"palabra": "Alma de la fiesta", "letra": "I"}, {"palabra": "Comedido", "letra": "S"}, {"palabra": "Temeroso", "letra": "C"}] },
  { "bloque": 3, "opciones": [{"palabra": "Agradable", "letra": "S"}, {"palabra": "Temerario", "letra": "D"}, {"palabra": "Disciplinado", "letra": "C"}, {"palabra": "Optimista", "letra": "I"}] },
  { "bloque": 4, "opciones": [{"palabra": "Determinado", "letra": "D"}, {"palabra": "Convincente", "letra": "I"}, {"palabra": "Amigable", "letra": "S"}, {"palabra": "Preciso", "letra": "C"}] },
  { "bloque": 5, "opciones": [{"palabra": "Docil", "letra": "C"}, {"palabra": "Atrevido", "letra": "D"}, {"palabra": "Leal", "letra": "S"}, {"palabra": "Encantador", "letra": "I"}] },
  { "bloque": 6, "opciones": [{"palabra": "Dispuesto", "letra": "S"}, {"palabra": "Deseoso", "letra": "I"}, {"palabra": "Consecuente", "letra": "C"}, {"palabra": "Fuerza de voluntad", "letra": "D"}] },
  { "bloque": 7, "opciones": [{"palabra": "Mente abierta", "letra": "I"}, {"palabra": "Complaciente", "letra": "S"}, {"palabra": "Modesto", "letra": "C"}, {"palabra": "Impaciente", "letra": "D"}] },
  { "bloque": 8, "opciones": [{"palabra": "Audaz", "letra": "D"}, {"palabra": "Leal", "letra": "S"}, {"palabra": "Perfeccionista", "letra": "C"}, {"palabra": "Extrovertido", "letra": "I"}] },
  { "bloque": 9, "opciones": [{"palabra": "Paciente", "letra": "S"}, {"palabra": "Elocuente", "letra": "I"}, {"palabra": "Cauteloso", "letra": "C"}, {"palabra": "Decidido", "letra": "D"}] },
  { "bloque": 10, "opciones": [{"palabra": "Conforme", "letra": "C"}, {"palabra": "Confiado", "letra": "I"}, {"palabra": "Pacífico", "letra": "S"}, {"palabra": "Enérgico", "letra": "D"}] },
  { "bloque": 11, "opciones": [{"palabra": "Disciplinado", "letra": "C"}, {"palabra": "Generoso", "letra": "S"}, {"palabra": "Animado", "letra": "I"}, {"palabra": "Persistente", "letra": "D"}] },
  { "bloque": 12, "opciones": [{"palabra": "Respetuoso", "letra": "C"}, {"palabra": "Emprendedor", "letra": "D"}, {"palabra": "Optimista", "letra": "I"}, {"palabra": "Servicial", "letra": "S"}] },
  { "bloque": 13, "opciones": [{"palabra": "Amable", "letra": "S"}, {"palabra": "Positivo", "letra": "I"}, {"palabra": "Lógico", "letra": "C"}, {"palabra": "Directo", "letra": "D"}] },
  { "bloque": 14, "opciones": [{"palabra": "Sereno", "letra": "S"}, {"palabra": "Sociable", "letra": "I"}, {"palabra": "Sistemático", "letra": "C"}, {"palabra": "Independiente", "letra": "D"}] },
  { "bloque": 15, "opciones": [{"palabra": "Divertido", "letra": "I"}, {"palabra": "Preciso", "letra": "C"}, {"palabra": "Constante", "letra": "S"}, {"palabra": "Valiente", "letra": "D"}] },
  { "bloque": 16, "opciones": [{"palabra": "Diplomático", "letra": "C"}, {"palabra": "Satisfecho", "letra": "S"}, {"palabra": "Entusiasta", "letra": "I"}, {"palabra": "Seguro de sí", "letra": "D"}] },
  { "bloque": 17, "opciones": [{"palabra": "Compasivo", "letra": "S"}, {"palabra": "Metódico", "letra": "C"}, {"palabra": "Popular", "letra": "I"}, {"palabra": "Competitivo", "letra": "D"}] },
  { "bloque": 18, "opciones": [{"palabra": "Alegre", "letra": "I"}, {"palabra": "Tenaz", "letra": "D"}, {"palabra": "Analítico", "letra": "C"}, {"palabra": "Tranquilo", "letra": "S"}] },
  { "bloque": 19, "opciones": [{"palabra": "Indulgente", "letra": "S"}, {"palabra": "Estricto", "letra": "C"}, {"palabra": "Influyente", "letra": "I"}, {"palabra": "Osado", "letra": "D"}] },
  { "bloque": 20, "opciones": [{"palabra": "Confiable", "letra": "S"}, {"palabra": "Líder", "letra": "D"}, {"palabra": "Diplomático", "letra": "C"}, {"palabra": "Vivaz", "letra": "I"}] },
  { "bloque": 21, "opciones": [{"palabra": "Tolerante", "letra": "S"}, {"palabra": "Estimulante", "letra": "I"}, {"palabra": "Perseverante", "letra": "D"}, {"palabra": "Convencional", "letra": "C"}] },
  { "bloque": 22, "opciones": [{"palabra": "Estructurado", "letra": "C"}, {"palabra": "Dinámico", "letra": "D"}, {"palabra": "Afectuoso", "letra": "S"}, {"palabra": "Vigoroso", "letra": "I"}] },
  { "bloque": 23, "opciones": [{"palabra": "Meditabundo", "letra": "C"}, {"palabra": "Dominante", "letra": "D"}, {"palabra": "Cordial", "letra": "S"}, {"palabra": "Radiante", "letra": "I"}] },
  { "bloque": 24, "opciones": [{"palabra": "Cuidadoso", "letra": "C"}, {"palabra": "Inflexible", "letra": "D"}, {"palabra": "Amigable", "letra": "S"}, {"palabra": "Atrayente", "letra": "I"}] }
];