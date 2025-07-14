# 📱 Generador de Códigos QR

Este es un mini proyecto interactivo que hice para practicar **JavaScript**, manipulación del **DOM**, y diseño visual con **CSS**.  
Funciona como una pequeña aplicación web que permite generar un código QR a partir de una URL ingresada por el usuario.

---

## ⚙️ Funcionalidad

- Permite ingresar una `URL` y genera el código `QR` correspondiente.
- Valida que el campo no esté vacío antes de generar el `QR`.
- Centra automáticamente el QR generado en pantalla.
- Usa la librería `QRCode.js` para generar códigos de forma rápida y personalizada.
- Diseño limpio, responsive y con estilos personalizados mediante variables `CSS`.

---

## 🛠 Tecnologías utilizadas

- **HTML5** – Estructura base de la aplicación.
- **CSS3** – Estilos visuales, sombras, centrado y diseño adaptativo.
- **JavaScript** – Lógica de generación QR y control del formulario.
- **QRCode.js** – Librería para generar códigos QR desde JavaScript puro.

---

## 📁 Estructura del proyecto

| Ruta                        | Descripción                                                   |
|-----------------------------|---------------------------------------------------------------|
| `index.html`                | Estructura principal del generador QR                         |
| `css/styles.css`            | Estilos generales de la interfaz                              |
| `css/variables.css`         | Variables CSS para personalizar colores                       |
| `js/main.js`                | Lógica de generación QR y validación                          |
| `assets/icono.png`          | Ícono utilizado como favicon                                  |

---

## 📸 Captura de pantalla

![Vista previa del generador QR](/assets/captura.png)



## 🔗 Ver en vivo

👉 [Haz clic aquí para probar el generador QR](https://)


---

## 💡 Notas personales

Desarrollé esta aplicación como parte de mi aprendizaje en `JavaScript`, poniendo en práctica:

- Manipulación del DOM y eventos como `submit` y `click`.
- Validación de campos de formulario de forma sencilla.
- Uso de librerías externas (`QRCode.js`) sin frameworks.
- Aplicación de diseño centrado y visual atractivo con `CSS`.

Quiero seguir mejorándolo poco a poco. Algunas ideas que tengo para futuras versiones:

- Agregar botón para **limpiar** el código QR y generar uno nuevo.
- Permitir cambiar el **color o tamaño** del código generado.
- Agregar botón para **descargar el QR como imagen `.png`**.
- Guardar historial de URLs en `localStorage`.

---

## 📌 Estado del proyecto

> Completado (versión funcional estable)  
 Abierto a mejoras y actualizaciones futuras
