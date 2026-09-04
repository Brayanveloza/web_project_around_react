# React + TypeScript + Vite

Proyecto **Around The U.S.** desarrollado con **React, TypeScript y Vite**.

Este proyecto parte de una versión anterior desarrollada con **HTML, CSS y JavaScript**, la cual fue migrada progresivamente a una aplicación basada en componentes de React y tipado con TypeScript.

---

## 📌 Descripción del proyecto

**Around The U.S.** es una aplicación web que representa una red social para compartir fotografías de diferentes lugares de Estados Unidos.

El proyecto permite visualizar:

- Perfil del usuario.
- Nombre y descripción del usuario.
- Avatar.
- Tarjetas con diferentes lugares.
- Imágenes de las tarjetas.
- Botones de edición, eliminación y "Me gusta". (Todavia no en uso real)
- Ventanas emergentes (popups).

En esta etapa del proyecto, el objetivo principal fue realizar la migración de la aplicación anterior hacia **React vite**, organizando la interfaz mediante componentes reutilizables.

---

# 🚀 Tecnologías utilizadas

- React
- TypeScript
- Vite
- HTML5
- Git

# 🏗️ Inicio del proyecto

El proyecto se inició utilizando **Vite** para crear una aplicación de React con TypeScript.

Primero se creó el proyecto utilizando:

- npm create vite@latest .

Después se instalaron las dependencias:

- npm install

Finalmente, el proyecto podía ejecutarse con:

- npm run dev

# 🏗️ Proceso de migración
Transferencia del HTML → El marcado original se convirtió a JSX/TSX en App.tsx.

Adaptación a React → Se ajustaron atributos (class → className, cierre de etiquetas, props tipadas).

Organización de estilos → Se trasladaron los CSS en bloques (page.css, cards.css, popup.css, etc.) y se importaron en index.css.

Gestión de imágenes → Se usan importaciones de módulos (import logo from "./images/logo.svg").

Componentización → La interfaz se dividió en componentes reutilizables:

Header

Main (perfil, tarjetas, popups)

Card (tarjeta individual)

Popup (estructura base)

ImagePopup (visualización de imágenes)

Footer

Tipado con TypeScript → Se definieron tipos para CardData y PopupConfig, asegurando consistencia en props y estados.

Comunicación entre componentes → Se usan props para pasar datos y funciones entre App, Main, Card y Popup.

Popups reutilizables → Se controlan con estado (isOpen, onClose, title, children).

Funcionalidades futuras → Botones de “Me gusta” y eliminación preparados, pero aún sin lógica implementada.


🎯 Objetivos de aprendizaje
Migrar un proyecto clásico a React + TypeScript.

Manejo de JSX/TSX y props.

Organización modular de componentes y estilos.

Uso de Vite para desarrollo y build.

Tipado de datos con TypeScript.

Implementación de popups reutilizables y comunicación entre componentes.

👨‍💻 Autor

Brayan Steven Veloza Cruz