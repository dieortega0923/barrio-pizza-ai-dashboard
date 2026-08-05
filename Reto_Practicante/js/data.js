/**
 * data.js
 * Datos base del reto (embebidos como JS para que la app funcione
 * abriendo el index.html directo, sin servidor ni fetch, y sin problemas
 * de CORS al publicarla en Netlify/Vercel/GitHub Pages).
 *
 * DATASET_DEFAULT = como vinieron los 4 CSV del reto.
 * La orden de compra se puede editar o reemplazar en vivo desde la UI
 * (ver upload-editor.js) sin tocar este archivo.
 */

const DATASET_DEFAULT = {
  "ingredientes": [
    {
      "ingrediente_id": "harina",
      "nombre": "Harina 00",
      "proveedor": "Molinos Central",
      "unidad_base": "kg",
      "formato_compra": "Saco 25 kg",
      "unidad_base_por_formato": 25.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "harina_gf",
      "nombre": "Harina gluten free",
      "proveedor": "Molinos Central",
      "unidad_base": "kg",
      "formato_compra": "Bolsa 1 kg",
      "unidad_base_por_formato": 1.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "semola",
      "nombre": "Semola",
      "proveedor": "Molinos Central",
      "unidad_base": "kg",
      "formato_compra": "Saco 10 kg",
      "unidad_base_por_formato": 10.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "levadura",
      "nombre": "Levadura",
      "proveedor": "Molinos Central",
      "unidad_base": "kg",
      "formato_compra": "Caja 1 kg",
      "unidad_base_por_formato": 1.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "oregano",
      "nombre": "Oregano seco",
      "proveedor": "Molinos Central",
      "unidad_base": "kg",
      "formato_compra": "Bolsa 1 kg",
      "unidad_base_por_formato": 1.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "mozzarella",
      "nombre": "Mozzarella",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "kg",
      "formato_compra": "Caja 10 kg",
      "unidad_base_por_formato": 10.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "burrata",
      "nombre": "Burrata",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "und",
      "formato_compra": "Caja x 12 und",
      "unidad_base_por_formato": 12.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "salsa_pelatti",
      "nombre": "Salsa pelatti",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "kg",
      "formato_compra": "Lata 2.55 kg",
      "unidad_base_por_formato": 2.55,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "pepperoni",
      "nombre": "Pepperoni",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "kg",
      "formato_compra": "Caja 5 kg",
      "unidad_base_por_formato": 5.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "jamon",
      "nombre": "Jamon",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "kg",
      "formato_compra": "Caja 4 kg",
      "unidad_base_por_formato": 4.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "parmesano",
      "nombre": "Parmesano",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "kg",
      "formato_compra": "Caja 5 kg",
      "unidad_base_por_formato": 5.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "queso_vegano",
      "nombre": "Queso vegano",
      "proveedor": "Distrib. Bella Italia",
      "unidad_base": "kg",
      "formato_compra": "Caja 5 kg",
      "unidad_base_por_formato": 5.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "aceite_oliva",
      "nombre": "Aceite de oliva",
      "proveedor": "Importadora Istmo",
      "unidad_base": "L",
      "formato_compra": "Lata 5 L",
      "unidad_base_por_formato": 5.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "aceitunas",
      "nombre": "Aceitunas",
      "proveedor": "Importadora Istmo",
      "unidad_base": "kg",
      "formato_compra": "Balde 5 kg",
      "unidad_base_por_formato": 5.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "albahaca",
      "nombre": "Albahaca fresca",
      "proveedor": "AgroFresco",
      "unidad_base": "kg",
      "formato_compra": "Paquete 250 gr",
      "unidad_base_por_formato": 0.25,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "arugula",
      "nombre": "Arugula",
      "proveedor": "AgroFresco",
      "unidad_base": "kg",
      "formato_compra": "Paquete 250 gr",
      "unidad_base_por_formato": 0.25,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "hongos",
      "nombre": "Hongos",
      "proveedor": "Hongos del Valle",
      "unidad_base": "kg",
      "formato_compra": "Kilo",
      "unidad_base_por_formato": 1.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "cebolla",
      "nombre": "Cebolla blanca",
      "proveedor": "Verduras La Huerta",
      "unidad_base": "kg",
      "formato_compra": "Saco 20 kg",
      "unidad_base_por_formato": 20.0,
      "es_perecedero": "No"
    },
    {
      "ingrediente_id": "pimenton",
      "nombre": "Pimenton",
      "proveedor": "Verduras La Huerta",
      "unidad_base": "kg",
      "formato_compra": "Caja 5 kg",
      "unidad_base_por_formato": 5.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "pina",
      "nombre": "Pina",
      "proveedor": "Verduras La Huerta",
      "unidad_base": "und",
      "formato_compra": "Unidad",
      "unidad_base_por_formato": 1.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "prosciutto",
      "nombre": "Prosciutto",
      "proveedor": "Deli Gourmet",
      "unidad_base": "kg",
      "formato_compra": "Pieza 4 kg",
      "unidad_base_por_formato": 4.0,
      "es_perecedero": "Si"
    },
    {
      "ingrediente_id": "cajas_pizza",
      "nombre": "Cajas de pizza",
      "proveedor": "EmpaqueTodo",
      "unidad_base": "und",
      "formato_compra": "Paquete 50 und",
      "unidad_base_por_formato": 50.0,
      "es_perecedero": "No"
    }
  ],
  "consumo": [
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "semana": "S1",
      "consumo_unidad_base": 294.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "semana": "S2",
      "consumo_unidad_base": 297.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "semana": "S3",
      "consumo_unidad_base": 275.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "semana": "S4",
      "consumo_unidad_base": 278.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "semana": "S5",
      "consumo_unidad_base": 299.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "semana": "S6",
      "consumo_unidad_base": 291.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "semana": "S1",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "semana": "S2",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "semana": "S3",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "semana": "S4",
      "consumo_unidad_base": 9.9
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "semana": "S5",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "semana": "S6",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "semana": "S1",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "semana": "S2",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "semana": "S3",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "semana": "S4",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "semana": "S5",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "semana": "S6",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "semana": "S1",
      "consumo_unidad_base": 7.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "semana": "S2",
      "consumo_unidad_base": 7.4
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "semana": "S3",
      "consumo_unidad_base": 8.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "semana": "S4",
      "consumo_unidad_base": 8.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "semana": "S5",
      "consumo_unidad_base": 7.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "semana": "S6",
      "consumo_unidad_base": 7.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "semana": "S1",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "semana": "S2",
      "consumo_unidad_base": 2.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "semana": "S3",
      "consumo_unidad_base": 2.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "semana": "S4",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "semana": "S5",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "semana": "S6",
      "consumo_unidad_base": 2.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "semana": "S1",
      "consumo_unidad_base": 196.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "semana": "S2",
      "consumo_unidad_base": 200.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "semana": "S3",
      "consumo_unidad_base": 198.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "semana": "S4",
      "consumo_unidad_base": 203.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "semana": "S5",
      "consumo_unidad_base": 199.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "semana": "S6",
      "consumo_unidad_base": 201.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "semana": "S1",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "semana": "S2",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "semana": "S3",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "semana": "S4",
      "consumo_unidad_base": 25.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "semana": "S5",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "semana": "S6",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S1",
      "consumo_unidad_base": 74.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S2",
      "consumo_unidad_base": 79.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S3",
      "consumo_unidad_base": 82.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S4",
      "consumo_unidad_base": 76.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S5",
      "consumo_unidad_base": 75.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S6",
      "consumo_unidad_base": 81.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "semana": "S1",
      "consumo_unidad_base": 38.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "semana": "S2",
      "consumo_unidad_base": 37.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "semana": "S3",
      "consumo_unidad_base": 40.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "semana": "S4",
      "consumo_unidad_base": 40.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "semana": "S5",
      "consumo_unidad_base": 37.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "semana": "S6",
      "consumo_unidad_base": 38.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "semana": "S1",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "semana": "S2",
      "consumo_unidad_base": 25.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "semana": "S3",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "semana": "S4",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "semana": "S5",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "semana": "S6",
      "consumo_unidad_base": 25.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "semana": "S1",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "semana": "S2",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "semana": "S3",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "semana": "S4",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "semana": "S5",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "semana": "S6",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "semana": "S1",
      "consumo_unidad_base": 7.9
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "semana": "S2",
      "consumo_unidad_base": 8.2
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "semana": "S3",
      "consumo_unidad_base": 7.6
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "semana": "S4",
      "consumo_unidad_base": 7.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "semana": "S5",
      "consumo_unidad_base": 8.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "semana": "S6",
      "consumo_unidad_base": 8.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "semana": "S1",
      "consumo_unidad_base": 31.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "semana": "S2",
      "consumo_unidad_base": 34.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "semana": "S3",
      "consumo_unidad_base": 34.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "semana": "S4",
      "consumo_unidad_base": 31.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "semana": "S5",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "semana": "S6",
      "consumo_unidad_base": 34.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "semana": "S1",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "semana": "S2",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "semana": "S3",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "semana": "S4",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "semana": "S5",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "semana": "S6",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "semana": "S1",
      "consumo_unidad_base": 3.3
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "semana": "S2",
      "consumo_unidad_base": 3.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "semana": "S3",
      "consumo_unidad_base": 3.3
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "semana": "S4",
      "consumo_unidad_base": 3.4
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "semana": "S5",
      "consumo_unidad_base": 3.2
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "semana": "S6",
      "consumo_unidad_base": 3.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "semana": "S1",
      "consumo_unidad_base": 4.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "semana": "S2",
      "consumo_unidad_base": 3.8
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "semana": "S3",
      "consumo_unidad_base": 3.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "semana": "S4",
      "consumo_unidad_base": 4.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "semana": "S5",
      "consumo_unidad_base": 4.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "semana": "S6",
      "consumo_unidad_base": 3.8
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "semana": "S1",
      "consumo_unidad_base": 24.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "semana": "S2",
      "consumo_unidad_base": 24.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "semana": "S3",
      "consumo_unidad_base": 23.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "semana": "S4",
      "consumo_unidad_base": 23.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "semana": "S5",
      "consumo_unidad_base": 24.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "semana": "S6",
      "consumo_unidad_base": 24.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "semana": "S1",
      "consumo_unidad_base": 40.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "semana": "S2",
      "consumo_unidad_base": 42.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "semana": "S3",
      "consumo_unidad_base": 39.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "semana": "S4",
      "consumo_unidad_base": 41.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "semana": "S5",
      "consumo_unidad_base": 43.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "semana": "S6",
      "consumo_unidad_base": 40.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "semana": "S1",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "semana": "S2",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "semana": "S3",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "semana": "S4",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "semana": "S5",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "semana": "S6",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "semana": "S1",
      "consumo_unidad_base": 39.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "semana": "S2",
      "consumo_unidad_base": 37.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "semana": "S3",
      "consumo_unidad_base": 40.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "semana": "S4",
      "consumo_unidad_base": 41.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "semana": "S5",
      "consumo_unidad_base": 38.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "semana": "S6",
      "consumo_unidad_base": 38.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "semana": "S1",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "semana": "S2",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "semana": "S3",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "semana": "S4",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "semana": "S5",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "semana": "S6",
      "consumo_unidad_base": 9.9
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "semana": "S1",
      "consumo_unidad_base": 2026.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "semana": "S2",
      "consumo_unidad_base": 2001.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "semana": "S3",
      "consumo_unidad_base": 1861.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "semana": "S4",
      "consumo_unidad_base": 1921.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "semana": "S5",
      "consumo_unidad_base": 2046.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "semana": "S6",
      "consumo_unidad_base": 1954.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "semana": "S1",
      "consumo_unidad_base": 240.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "semana": "S2",
      "consumo_unidad_base": 255.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "semana": "S3",
      "consumo_unidad_base": 268.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "semana": "S4",
      "consumo_unidad_base": 284.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "semana": "S5",
      "consumo_unidad_base": 300.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "semana": "S6",
      "consumo_unidad_base": 316.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "semana": "S1",
      "consumo_unidad_base": 8.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "semana": "S2",
      "consumo_unidad_base": 8.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "semana": "S3",
      "consumo_unidad_base": 8.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "semana": "S4",
      "consumo_unidad_base": 8.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "semana": "S5",
      "consumo_unidad_base": 8.8
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "semana": "S6",
      "consumo_unidad_base": 8.9
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "semana": "S1",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "semana": "S2",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "semana": "S3",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "semana": "S4",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "semana": "S5",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "semana": "S6",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "semana": "S1",
      "consumo_unidad_base": 5.8
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "semana": "S2",
      "consumo_unidad_base": 5.9
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "semana": "S3",
      "consumo_unidad_base": 6.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "semana": "S4",
      "consumo_unidad_base": 6.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "semana": "S5",
      "consumo_unidad_base": 6.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "semana": "S6",
      "consumo_unidad_base": 6.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "semana": "S1",
      "consumo_unidad_base": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "semana": "S2",
      "consumo_unidad_base": 1.9
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "semana": "S3",
      "consumo_unidad_base": 2.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "semana": "S4",
      "consumo_unidad_base": 2.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "semana": "S5",
      "consumo_unidad_base": 2.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "semana": "S6",
      "consumo_unidad_base": 2.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "semana": "S1",
      "consumo_unidad_base": 157.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "semana": "S2",
      "consumo_unidad_base": 150.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "semana": "S3",
      "consumo_unidad_base": 147.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "semana": "S4",
      "consumo_unidad_base": 161.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "semana": "S5",
      "consumo_unidad_base": 166.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "semana": "S6",
      "consumo_unidad_base": 156.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "semana": "S1",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "semana": "S2",
      "consumo_unidad_base": 21.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "semana": "S3",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "semana": "S4",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "semana": "S5",
      "consumo_unidad_base": 22.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "semana": "S6",
      "consumo_unidad_base": 22.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S1",
      "consumo_unidad_base": 58.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S2",
      "consumo_unidad_base": 64.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S3",
      "consumo_unidad_base": 63.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S4",
      "consumo_unidad_base": 60.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S5",
      "consumo_unidad_base": 63.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S6",
      "consumo_unidad_base": 68.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "semana": "S1",
      "consumo_unidad_base": 29.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "semana": "S2",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "semana": "S3",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "semana": "S4",
      "consumo_unidad_base": 31.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "semana": "S5",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "semana": "S6",
      "consumo_unidad_base": 33.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "semana": "S1",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "semana": "S2",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "semana": "S3",
      "consumo_unidad_base": 21.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "semana": "S4",
      "consumo_unidad_base": 22.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "semana": "S5",
      "consumo_unidad_base": 21.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "semana": "S6",
      "consumo_unidad_base": 21.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "semana": "S1",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "semana": "S2",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "semana": "S3",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "semana": "S4",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "semana": "S5",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "semana": "S6",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "semana": "S1",
      "consumo_unidad_base": 6.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "semana": "S2",
      "consumo_unidad_base": 6.3
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "semana": "S3",
      "consumo_unidad_base": 5.9
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "semana": "S4",
      "consumo_unidad_base": 6.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "semana": "S5",
      "consumo_unidad_base": 6.7
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "semana": "S6",
      "consumo_unidad_base": 6.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "semana": "S1",
      "consumo_unidad_base": 25.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "semana": "S2",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "semana": "S3",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "semana": "S4",
      "consumo_unidad_base": 25.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "semana": "S5",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "semana": "S6",
      "consumo_unidad_base": 28.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "semana": "S1",
      "consumo_unidad_base": 9.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "semana": "S2",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "semana": "S3",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "semana": "S4",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "semana": "S5",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "semana": "S6",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "semana": "S1",
      "consumo_unidad_base": 2.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "semana": "S2",
      "consumo_unidad_base": 2.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "semana": "S3",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "semana": "S4",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "semana": "S5",
      "consumo_unidad_base": 2.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "semana": "S6",
      "consumo_unidad_base": 2.6
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "semana": "S1",
      "consumo_unidad_base": 3.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "semana": "S2",
      "consumo_unidad_base": 2.9
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "semana": "S3",
      "consumo_unidad_base": 3.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "semana": "S4",
      "consumo_unidad_base": 3.3
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "semana": "S5",
      "consumo_unidad_base": 3.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "semana": "S6",
      "consumo_unidad_base": 3.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "semana": "S1",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "semana": "S2",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "semana": "S3",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "semana": "S4",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "semana": "S5",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "semana": "S6",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "semana": "S1",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "semana": "S2",
      "consumo_unidad_base": 34.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "semana": "S3",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "semana": "S4",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "semana": "S5",
      "consumo_unidad_base": 35.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "semana": "S6",
      "consumo_unidad_base": 36.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "semana": "S1",
      "consumo_unidad_base": 9.6
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "semana": "S2",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "semana": "S3",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "semana": "S4",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "semana": "S5",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "semana": "S6",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "semana": "S1",
      "consumo_unidad_base": 29.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "semana": "S2",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "semana": "S3",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "semana": "S4",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "semana": "S5",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "semana": "S6",
      "consumo_unidad_base": 32.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "semana": "S1",
      "consumo_unidad_base": 8.1
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "semana": "S2",
      "consumo_unidad_base": 7.7
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "semana": "S3",
      "consumo_unidad_base": 8.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "semana": "S4",
      "consumo_unidad_base": 8.8
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "semana": "S5",
      "consumo_unidad_base": 8.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "semana": "S6",
      "consumo_unidad_base": 8.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "semana": "S1",
      "consumo_unidad_base": 1575.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "semana": "S2",
      "consumo_unidad_base": 1509.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "semana": "S3",
      "consumo_unidad_base": 1472.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "semana": "S4",
      "consumo_unidad_base": 1602.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "semana": "S5",
      "consumo_unidad_base": 1659.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "semana": "S6",
      "consumo_unidad_base": 1564.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "semana": "S1",
      "consumo_unidad_base": 207.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "semana": "S2",
      "consumo_unidad_base": 192.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "semana": "S3",
      "consumo_unidad_base": 191.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "semana": "S4",
      "consumo_unidad_base": 206.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "semana": "S5",
      "consumo_unidad_base": 203.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "semana": "S6",
      "consumo_unidad_base": 189.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "semana": "S1",
      "consumo_unidad_base": 7.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "semana": "S2",
      "consumo_unidad_base": 7.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "semana": "S3",
      "consumo_unidad_base": 6.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "semana": "S4",
      "consumo_unidad_base": 7.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "semana": "S5",
      "consumo_unidad_base": 7.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "semana": "S6",
      "consumo_unidad_base": 7.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "semana": "S1",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "semana": "S2",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "semana": "S3",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "semana": "S4",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "semana": "S5",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "semana": "S6",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "semana": "S1",
      "consumo_unidad_base": 5.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "semana": "S2",
      "consumo_unidad_base": 5.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "semana": "S3",
      "consumo_unidad_base": 5.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "semana": "S4",
      "consumo_unidad_base": 5.3
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "semana": "S5",
      "consumo_unidad_base": 5.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "semana": "S6",
      "consumo_unidad_base": 5.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "semana": "S1",
      "consumo_unidad_base": 1.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "semana": "S2",
      "consumo_unidad_base": 1.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "semana": "S3",
      "consumo_unidad_base": 1.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "semana": "S4",
      "consumo_unidad_base": 1.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "semana": "S5",
      "consumo_unidad_base": 1.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "semana": "S6",
      "consumo_unidad_base": 1.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "semana": "S1",
      "consumo_unidad_base": 139.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "semana": "S2",
      "consumo_unidad_base": 129.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "semana": "S3",
      "consumo_unidad_base": 132.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "semana": "S4",
      "consumo_unidad_base": 141.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "semana": "S5",
      "consumo_unidad_base": 136.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "semana": "S6",
      "consumo_unidad_base": 128.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "semana": "S1",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "semana": "S2",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "semana": "S3",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "semana": "S4",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "semana": "S5",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "semana": "S6",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S1",
      "consumo_unidad_base": 54.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S2",
      "consumo_unidad_base": 57.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S3",
      "consumo_unidad_base": 53.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S4",
      "consumo_unidad_base": 52.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S5",
      "consumo_unidad_base": 55.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S6",
      "consumo_unidad_base": 56.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "semana": "S1",
      "consumo_unidad_base": 28.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "semana": "S2",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "semana": "S3",
      "consumo_unidad_base": 150.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "semana": "S4",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "semana": "S5",
      "consumo_unidad_base": 29.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "semana": "S6",
      "consumo_unidad_base": 31.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "semana": "S1",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "semana": "S2",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "semana": "S3",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "semana": "S4",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "semana": "S5",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "semana": "S6",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "semana": "S1",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "semana": "S2",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "semana": "S3",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "semana": "S4",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "semana": "S5",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "semana": "S6",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "semana": "S1",
      "consumo_unidad_base": 5.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "semana": "S2",
      "consumo_unidad_base": 5.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "semana": "S3",
      "consumo_unidad_base": 5.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "semana": "S4",
      "consumo_unidad_base": 5.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "semana": "S5",
      "consumo_unidad_base": 5.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "semana": "S6",
      "consumo_unidad_base": 5.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "semana": "S1",
      "consumo_unidad_base": 23.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "semana": "S2",
      "consumo_unidad_base": 23.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "semana": "S3",
      "consumo_unidad_base": 22.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "semana": "S4",
      "consumo_unidad_base": 22.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "semana": "S5",
      "consumo_unidad_base": 23.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "semana": "S6",
      "consumo_unidad_base": 23.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "semana": "S1",
      "consumo_unidad_base": 8.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "semana": "S2",
      "consumo_unidad_base": 9.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "semana": "S3",
      "consumo_unidad_base": 9.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "semana": "S4",
      "consumo_unidad_base": 8.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "semana": "S5",
      "consumo_unidad_base": 8.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "semana": "S6",
      "consumo_unidad_base": 9.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "semana": "S1",
      "consumo_unidad_base": 2.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "semana": "S2",
      "consumo_unidad_base": 2.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "semana": "S3",
      "consumo_unidad_base": 2.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "semana": "S4",
      "consumo_unidad_base": 2.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "semana": "S5",
      "consumo_unidad_base": 2.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "semana": "S6",
      "consumo_unidad_base": 2.3
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "semana": "S1",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "semana": "S2",
      "consumo_unidad_base": 2.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "semana": "S3",
      "consumo_unidad_base": 2.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "semana": "S4",
      "consumo_unidad_base": 2.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "semana": "S5",
      "consumo_unidad_base": 2.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "semana": "S6",
      "consumo_unidad_base": 2.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "semana": "S1",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "semana": "S2",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "semana": "S3",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "semana": "S4",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "semana": "S5",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "semana": "S6",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "semana": "S1",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "semana": "S2",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "semana": "S3",
      "consumo_unidad_base": 28.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "semana": "S4",
      "consumo_unidad_base": 28.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "semana": "S5",
      "consumo_unidad_base": 30.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "semana": "S6",
      "consumo_unidad_base": 29.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "semana": "S1",
      "consumo_unidad_base": 8.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "semana": "S2",
      "consumo_unidad_base": 9.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "semana": "S3",
      "consumo_unidad_base": 9.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "semana": "S4",
      "consumo_unidad_base": 8.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "semana": "S5",
      "consumo_unidad_base": 9.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "semana": "S6",
      "consumo_unidad_base": 9.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "semana": "S1",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "semana": "S2",
      "consumo_unidad_base": 27.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "semana": "S3",
      "consumo_unidad_base": 28.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "semana": "S4",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "semana": "S5",
      "consumo_unidad_base": 26.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "semana": "S6",
      "consumo_unidad_base": 28.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "semana": "S1",
      "consumo_unidad_base": 7.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "semana": "S2",
      "consumo_unidad_base": 6.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "semana": "S3",
      "consumo_unidad_base": 7.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "semana": "S4",
      "consumo_unidad_base": 7.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "semana": "S5",
      "consumo_unidad_base": 6.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "semana": "S6",
      "consumo_unidad_base": 7.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "semana": "S1",
      "consumo_unidad_base": 1398.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "semana": "S2",
      "consumo_unidad_base": 1297.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "semana": "S3",
      "consumo_unidad_base": 1316.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "semana": "S4",
      "consumo_unidad_base": 1412.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "semana": "S5",
      "consumo_unidad_base": 1368.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "semana": "S6",
      "consumo_unidad_base": 1283.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "semana": "S1",
      "consumo_unidad_base": 134.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "semana": "S2",
      "consumo_unidad_base": 126.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "semana": "S3",
      "consumo_unidad_base": 131.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "semana": "S4",
      "consumo_unidad_base": 139.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "semana": "S5",
      "consumo_unidad_base": 131.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "semana": "S6",
      "consumo_unidad_base": 126.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "semana": "S1",
      "consumo_unidad_base": 5.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "semana": "S2",
      "consumo_unidad_base": 4.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "semana": "S3",
      "consumo_unidad_base": 4.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "semana": "S4",
      "consumo_unidad_base": 4.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "semana": "S5",
      "consumo_unidad_base": 5.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "semana": "S6",
      "consumo_unidad_base": 4.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "semana": "S1",
      "consumo_unidad_base": 9.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "semana": "S2",
      "consumo_unidad_base": 9.4
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "semana": "S3",
      "consumo_unidad_base": 8.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "semana": "S4",
      "consumo_unidad_base": 8.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "semana": "S5",
      "consumo_unidad_base": 9.4
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "semana": "S6",
      "consumo_unidad_base": 9.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "semana": "S1",
      "consumo_unidad_base": 3.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "semana": "S2",
      "consumo_unidad_base": 3.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "semana": "S3",
      "consumo_unidad_base": 3.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "semana": "S4",
      "consumo_unidad_base": 3.4
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "semana": "S5",
      "consumo_unidad_base": 3.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "semana": "S6",
      "consumo_unidad_base": 3.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "semana": "S1",
      "consumo_unidad_base": 1.1
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "semana": "S2",
      "consumo_unidad_base": 1.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "semana": "S3",
      "consumo_unidad_base": 1.3
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "semana": "S4",
      "consumo_unidad_base": 1.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "semana": "S5",
      "consumo_unidad_base": 1.1
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "semana": "S6",
      "consumo_unidad_base": 1.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "semana": "S1",
      "consumo_unidad_base": 90.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "semana": "S2",
      "consumo_unidad_base": 86.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "semana": "S3",
      "consumo_unidad_base": 91.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "semana": "S4",
      "consumo_unidad_base": 94.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "semana": "S5",
      "consumo_unidad_base": 88.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "semana": "S6",
      "consumo_unidad_base": 86.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "semana": "S1",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "semana": "S2",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "semana": "S3",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "semana": "S4",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "semana": "S5",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "semana": "S6",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S1",
      "consumo_unidad_base": 37.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S2",
      "consumo_unidad_base": 37.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S3",
      "consumo_unidad_base": 34.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S4",
      "consumo_unidad_base": 35.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S5",
      "consumo_unidad_base": 38.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "semana": "S6",
      "consumo_unidad_base": 36.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "semana": "S1",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "semana": "S2",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "semana": "S3",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "semana": "S4",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "semana": "S5",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "semana": "S6",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "semana": "S1",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "semana": "S2",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "semana": "S3",
      "consumo_unidad_base": 13.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "semana": "S4",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "semana": "S5",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "semana": "S6",
      "consumo_unidad_base": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "semana": "S1",
      "consumo_unidad_base": 7.1
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "semana": "S2",
      "consumo_unidad_base": 6.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "semana": "S3",
      "consumo_unidad_base": 7.4
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "semana": "S4",
      "consumo_unidad_base": 7.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "semana": "S5",
      "consumo_unidad_base": 6.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "semana": "S6",
      "consumo_unidad_base": 7.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "semana": "S1",
      "consumo_unidad_base": 3.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "semana": "S2",
      "consumo_unidad_base": 3.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "semana": "S3",
      "consumo_unidad_base": 3.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "semana": "S4",
      "consumo_unidad_base": 3.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "semana": "S5",
      "consumo_unidad_base": 3.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "semana": "S6",
      "consumo_unidad_base": 3.4
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "semana": "S1",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "semana": "S2",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "semana": "S3",
      "consumo_unidad_base": 14.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "semana": "S4",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "semana": "S5",
      "consumo_unidad_base": 16.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "semana": "S6",
      "consumo_unidad_base": 15.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "semana": "S1",
      "consumo_unidad_base": 6.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "semana": "S2",
      "consumo_unidad_base": 6.3
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "semana": "S3",
      "consumo_unidad_base": 5.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "semana": "S4",
      "consumo_unidad_base": 5.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "semana": "S5",
      "consumo_unidad_base": 6.1
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "semana": "S6",
      "consumo_unidad_base": 6.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "semana": "S1",
      "consumo_unidad_base": 1.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "semana": "S2",
      "consumo_unidad_base": 1.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "semana": "S3",
      "consumo_unidad_base": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "semana": "S4",
      "consumo_unidad_base": 1.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "semana": "S5",
      "consumo_unidad_base": 1.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "semana": "S6",
      "consumo_unidad_base": 1.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "semana": "S1",
      "consumo_unidad_base": 1.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "semana": "S2",
      "consumo_unidad_base": 1.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "semana": "S3",
      "consumo_unidad_base": 1.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "semana": "S4",
      "consumo_unidad_base": 1.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "semana": "S5",
      "consumo_unidad_base": 1.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "semana": "S6",
      "consumo_unidad_base": 1.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "semana": "S1",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "semana": "S2",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "semana": "S3",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "semana": "S4",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "semana": "S5",
      "consumo_unidad_base": 11.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "semana": "S6",
      "consumo_unidad_base": 10.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "semana": "S1",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "semana": "S2",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "semana": "S3",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "semana": "S4",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "semana": "S5",
      "consumo_unidad_base": 20.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "semana": "S6",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "semana": "S1",
      "consumo_unidad_base": 6.1
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "semana": "S2",
      "consumo_unidad_base": 6.3
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "semana": "S3",
      "consumo_unidad_base": 5.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "semana": "S4",
      "consumo_unidad_base": 5.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "semana": "S5",
      "consumo_unidad_base": 6.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "semana": "S6",
      "consumo_unidad_base": 6.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "semana": "S1",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "semana": "S2",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "semana": "S3",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "semana": "S4",
      "consumo_unidad_base": 17.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "semana": "S5",
      "consumo_unidad_base": 18.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "semana": "S6",
      "consumo_unidad_base": 19.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "semana": "S1",
      "consumo_unidad_base": 4.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "semana": "S2",
      "consumo_unidad_base": 4.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "semana": "S3",
      "consumo_unidad_base": 5.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "semana": "S4",
      "consumo_unidad_base": 4.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "semana": "S5",
      "consumo_unidad_base": 4.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "semana": "S6",
      "consumo_unidad_base": 4.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "semana": "S1",
      "consumo_unidad_base": 902.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "semana": "S2",
      "consumo_unidad_base": 855.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "semana": "S3",
      "consumo_unidad_base": 909.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "semana": "S4",
      "consumo_unidad_base": 942.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "semana": "S5",
      "consumo_unidad_base": 880.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "semana": "S6",
      "consumo_unidad_base": 863.0
    }
  ],
  "inventario": [
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "stock_actual_unidad_base": 45.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "stock_actual_unidad_base": 1.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "stock_actual_unidad_base": 3.1
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "stock_actual_unidad_base": 1.2
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "stock_actual_unidad_base": 0.4
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "mozzarella",
      "stock_actual_unidad_base": 22.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "stock_actual_unidad_base": 4.2
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "stock_actual_unidad_base": 12.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "stock_actual_unidad_base": 6.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "stock_actual_unidad_base": 3.8
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "stock_actual_unidad_base": 2.4
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "stock_actual_unidad_base": 1.2
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "stock_actual_unidad_base": 5.3
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "stock_actual_unidad_base": 2.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "stock_actual_unidad_base": 0.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "stock_actual_unidad_base": 0.6
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "stock_actual_unidad_base": 3.7
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "stock_actual_unidad_base": 12.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "stock_actual_unidad_base": 2.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "stock_actual_unidad_base": 6.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "stock_actual_unidad_base": 1.5
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "stock_actual_unidad_base": 308.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "stock_actual_unidad_base": 30.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "stock_actual_unidad_base": 1.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "stock_actual_unidad_base": 2.6
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "stock_actual_unidad_base": 1.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "stock_actual_unidad_base": 0.3
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "stock_actual_unidad_base": 24.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "stock_actual_unidad_base": 3.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "stock_actual_unidad_base": 11.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "stock_actual_unidad_base": 5.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "stock_actual_unidad_base": 3.2
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "stock_actual_unidad_base": 1.9
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "stock_actual_unidad_base": 1.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "stock_actual_unidad_base": 4.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "stock_actual_unidad_base": 1.7
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "stock_actual_unidad_base": 0.4
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "stock_actual_unidad_base": 0.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "stock_actual_unidad_base": 3.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "stock_actual_unidad_base": 5.5
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "stock_actual_unidad_base": 1.7
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "stock_actual_unidad_base": 5.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "stock_actual_unidad_base": 1.3
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "stock_actual_unidad_base": 245.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "stock_actual_unidad_base": 29.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "stock_actual_unidad_base": 1.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "stock_actual_unidad_base": 2.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "stock_actual_unidad_base": 0.9
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "stock_actual_unidad_base": 0.3
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "stock_actual_unidad_base": 20.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "stock_actual_unidad_base": 2.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "stock_actual_unidad_base": 8.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "stock_actual_unidad_base": 4.7
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "stock_actual_unidad_base": 2.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "stock_actual_unidad_base": 1.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "stock_actual_unidad_base": 0.8
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "stock_actual_unidad_base": 3.6
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "stock_actual_unidad_base": 1.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "stock_actual_unidad_base": 0.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "stock_actual_unidad_base": 0.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "stock_actual_unidad_base": 2.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "stock_actual_unidad_base": 4.4
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "stock_actual_unidad_base": 1.5
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "stock_actual_unidad_base": 4.2
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "stock_actual_unidad_base": 1.1
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "stock_actual_unidad_base": 196.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "stock_actual_unidad_base": 20.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "stock_actual_unidad_base": 0.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "stock_actual_unidad_base": 1.4
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "stock_actual_unidad_base": 0.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "stock_actual_unidad_base": 0.2
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "stock_actual_unidad_base": 13.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "stock_actual_unidad_base": 1.7
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "stock_actual_unidad_base": 5.6
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "stock_actual_unidad_base": 2.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "stock_actual_unidad_base": 1.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "stock_actual_unidad_base": 1.1
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "stock_actual_unidad_base": 0.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "stock_actual_unidad_base": 2.3
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "stock_actual_unidad_base": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "stock_actual_unidad_base": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "stock_actual_unidad_base": 0.3
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "stock_actual_unidad_base": 1.5
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "stock_actual_unidad_base": 2.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "stock_actual_unidad_base": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "stock_actual_unidad_base": 2.9
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "stock_actual_unidad_base": 0.8
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "stock_actual_unidad_base": 131.0
    }
  ],
  "orden": [
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina",
      "cantidad_formatos": 10.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "harina_gf",
      "cantidad_formatos": 9.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "semola",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "levadura",
      "cantidad_formatos": 7.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "oregano",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "burrata",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "salsa_pelatti",
      "cantidad_formatos": 26.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pepperoni",
      "cantidad_formatos": 7.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "jamon",
      "cantidad_formatos": 6.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "parmesano",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "queso_vegano",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceite_oliva",
      "cantidad_formatos": 6.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "aceitunas",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "albahaca",
      "cantidad_formatos": 11.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "arugula",
      "cantidad_formatos": 14.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "hongos",
      "cantidad_formatos": 20.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cebolla",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pimenton",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "pina",
      "cantidad_formatos": 33.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "prosciutto",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Brisas del Golf",
      "ingrediente_id": "cajas_pizza",
      "cantidad_formatos": 34.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina",
      "cantidad_formatos": 6.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "harina_gf",
      "cantidad_formatos": 7.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "semola",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "levadura",
      "cantidad_formatos": 6.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "oregano",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "mozzarella",
      "cantidad_formatos": 14.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "burrata",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "salsa_pelatti",
      "cantidad_formatos": 21.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pepperoni",
      "cantidad_formatos": 6.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "jamon",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "parmesano",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "queso_vegano",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceite_oliva",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aceitunas",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "albahaca",
      "cantidad_formatos": 9.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "arugula",
      "cantidad_formatos": 11.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "hongos",
      "cantidad_formatos": 16.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cebolla",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pimenton",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "pina",
      "cantidad_formatos": 26.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "prosciutto",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "cajas_pizza",
      "cantidad_formatos": 27.0
    },
    {
      "sucursal": "Costa del Este",
      "ingrediente_id": "aji_chombo",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina",
      "cantidad_formatos": 7.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "harina_gf",
      "cantidad_formatos": 7.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "semola",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "levadura",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "oregano",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "mozzarella",
      "cantidad_formatos": 12.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "burrata",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "salsa_pelatti",
      "cantidad_formatos": 18.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pepperoni",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "jamon",
      "cantidad_formatos": 4.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "parmesano",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "queso_vegano",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceite_oliva",
      "cantidad_formatos": 4.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "aceitunas",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "albahaca",
      "cantidad_formatos": 8.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "arugula",
      "cantidad_formatos": 10.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "hongos",
      "cantidad_formatos": 14.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cebolla",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pimenton",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "pina",
      "cantidad_formatos": 23.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "prosciutto",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Marbella",
      "ingrediente_id": "cajas_pizza",
      "cantidad_formatos": 23.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "harina_gf",
      "cantidad_formatos": 5.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "semola",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "levadura",
      "cantidad_formatos": 4.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "oregano",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "mozzarella",
      "cantidad_formatos": 8.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "burrata",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "salsa_pelatti",
      "cantidad_formatos": 12.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pepperoni",
      "cantidad_formatos": 4.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "jamon",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "parmesano",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "queso_vegano",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceite_oliva",
      "cantidad_formatos": 3.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "aceitunas",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "albahaca",
      "cantidad_formatos": 20.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "arugula",
      "cantidad_formatos": 6.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "hongos",
      "cantidad_formatos": 10.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cebolla",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pimenton",
      "cantidad_formatos": 2.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "pina",
      "cantidad_formatos": 16.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "prosciutto",
      "cantidad_formatos": 1.0
    },
    {
      "sucursal": "Via Argentina",
      "ingrediente_id": "cajas_pizza",
      "cantidad_formatos": 16.0
    }
  ]
};