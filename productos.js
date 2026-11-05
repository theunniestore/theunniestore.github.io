/* =========================================================
   PRODUCTOS DE LA TIENDA — aquí se actualiza el stock y los precios.

   Cada línea es un producto:
     "qty"    = unidades disponibles. Pon 0 cuando se agote:
                el producto queda con el sello AGOTADO sobre la foto.
     "precio" = precio de venta en pesos, IVA incluido, sin puntos (ej: 10990).
     "n"      = número de la foto (fotos/NN.jpg). No lo cambies.

   Cuidado al editar: no borres comillas, comas ni llaves { }.
   Para guardar en GitHub: botón verde "Commit changes".
   La web se actualiza en 1 a 2 minutos.
   ========================================================= */
const P = [
  {"n": 2, "marca": "Beauty of Joseon", "nombre": "Calming Serum Green Tea + Panthenol", "detalle": "30 ml", "cat": "Sérums y ampollas", "qty": 1, "precio": 20990, "guia": "serum"},
  {"n": 3, "marca": "Beauty of Joseon", "nombre": "Glow Serum Propolis + Niacinamide", "detalle": "30 ml", "cat": "Sérums y ampollas", "qty": 0, "precio": 20990, "guia": "serum"},
  {"n": 9, "marca": "Celimax", "nombre": "The Vita-A Retinal Shot Tightening Booster", "detalle": "15 ml", "cat": "Sérums y ampollas", "qty": 2, "precio": 27990, "guia": "serum"},
  {"n": 10, "marca": "NIDA", "nombre": "Salmon PDRN Peptide Serum", "detalle": "50 ml", "cat": "Sérums y ampollas", "qty": 1, "precio": 19490, "guia": "serum"},
  {"n": 11, "marca": "NIDA", "nombre": "Alpha-Arbutin TXA Pure Tone Serum", "detalle": "50 ml", "cat": "Sérums y ampollas", "qty": 0, "precio": 19490, "guia": "serum"},
  {"n": 12, "marca": "K-Secret", "nombre": "Seoul 1988 Serum Retinal Liposome 2% + Black Ginseng", "detalle": "", "cat": "Sérums y ampollas", "qty": 1, "precio": 26990, "guia": "serum"},
  {"n": 13, "marca": "Dr.Althea", "nombre": "Gentle Vitamin C Serum", "detalle": "30 ml", "cat": "Sérums y ampollas", "qty": 1, "precio": 26990, "guia": "serum"},
  {"n": 14, "marca": "Skin1004", "nombre": "Madagascar Centella Poremizing Fresh Ampoule", "detalle": "50 ml", "cat": "Sérums y ampollas", "qty": 1, "precio": 21490, "guia": "serum"},
  {"n": 15, "marca": "Skin1004", "nombre": "Madagascar Centella Ampoule", "detalle": "55 ml", "cat": "Sérums y ampollas", "qty": 1, "precio": 22490, "guia": "serum"},
  {"n": 25, "marca": "Skin1004", "nombre": "Madagascar Centella Tea-Trica Relief Ampoule", "detalle": "30 ml", "cat": "Sérums y ampollas", "qty": 1, "precio": 13990, "guia": "serum"},
  {"n": 26, "marca": "Skin1004", "nombre": "Madagascar Centella Tone Brightening Capsule Ampoule", "detalle": "50 ml", "cat": "Sérums y ampollas", "qty": 0, "precio": 19990, "guia": "serum"},
  {"n": 1, "marca": "Holika Holika", "nombre": "Clean Up Lip & Eye Makeup Remover", "detalle": "Waterproof", "cat": "Limpieza", "qty": 2, "precio": 7990},
  {"n": 4, "marca": "COSRX", "nombre": "Salicylic Acid Daily Gentle Cleanser", "detalle": "", "cat": "Limpieza", "qty": 1, "precio": 16990},
  {"n": 5, "marca": "Etude House", "nombre": "Soon Jung 5.5 Foam Cleanser", "detalle": "", "cat": "Limpieza", "qty": 1, "precio": 16990},
  {"n": 6, "marca": "Banila Co", "nombre": "Clean It Zero Cleansing Balm Original", "detalle": "100 ml", "cat": "Limpieza", "qty": 1, "precio": 25990},
  {"n": 16, "marca": "BOJ", "nombre": "Apricot Blossom Peeling Gel", "detalle": "Exfoliante", "cat": "Limpieza", "qty": 1, "precio": 18990},
  {"n": 7, "marca": "Holika Holika", "nombre": "Aloe Hydro Formula 96% Soothing Gel", "detalle": "250 ml", "cat": "Hidratación y calmantes", "qty": 1, "precio": 10990, "guia": "aloe"},
  {"n": 8, "marca": "Nico Medical", "nombre": "Catch Me Patch", "detalle": "33 parches", "cat": "Hidratación y calmantes", "qty": 0, "precio": 4990},
  {"n": 27, "marca": "Round Lab", "nombre": "Pine Calming Cica Trial Kit", "detalle": "Kit de prueba", "cat": "Hidratación y calmantes", "qty": 1, "precio": 19990},
  {"n": 17, "marca": "lilybyred", "nombre": "Sugar Wrapping Tint Gloss Mini", "detalle": "#02 Fig Caramel", "cat": "Maquillaje", "qty": 1, "precio": 8990},
  {"n": 18, "marca": "lilybyred", "nombre": "Sugar Wrapping Tint Gloss Mini", "detalle": "#04 Honey Tomato", "cat": "Maquillaje", "qty": 1, "precio": 8990},
  {"n": 19, "marca": "lilybyred", "nombre": "Sugar Wrapping Tint Gloss Mini", "detalle": "#05 Cherry Candy", "cat": "Maquillaje", "qty": 1, "precio": 8990},
  {"n": 22, "marca": "Kundal", "nombre": "Rich Perfume Collagen Treatment Cherry Blossom", "detalle": "150 ml", "cat": "Cabello", "qty": 0, "precio": 7990},
  {"n": 23, "marca": "Daeng Gi Meo Ri", "nombre": "Vitalizing Nutrition Scalp Pack For Hair Loss", "detalle": "145 ml", "cat": "Cabello", "qty": 1, "precio": 10990},
  {"n": 24, "marca": "Daeng Gi Meo Ri", "nombre": "Vitalizing Nutrition Hair Pack", "detalle": "120 ml", "cat": "Cabello", "qty": 1, "precio": 8190}
];
