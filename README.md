# QA Technical Test - Cypress Automation

Este proyecto contiene la automatización de pruebas funcionales utilizando **Cypress** y el patrón de diseño **Page Object Model (POM)**.

## 📋 Requisitos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- Node.js (versión 18 o superior recomendada)
- npm
- Git

Puedes verificar las versiones con:

```bash
node -v
npm -v
git --version
```

---

## 🚀 Clonar el repositorio

```bash
git clone https://github.com/vjuspian/qa-technical-test.git
```

Ingresar al proyecto:

```bash
cd qa-technical-test
```

---

## 📦 Instalar dependencias

Ejecuta:

```bash
npm install
```

Esto descargará todas las dependencias necesarias del proyecto.

---

## ▶️ Abrir Cypress

Para abrir la interfaz gráfica de Cypress:

```bash
npx cypress open
```

Selecciona **E2E Testing** y luego el navegador de tu preferencia para ejecutar los casos de prueba.

---

## ⚡ Ejecutar todos los tests desde la terminal

```bash
npx cypress run
```

---

## ▶️ Ejecutar un único archivo de prueba

Ejemplo:

```bash
npx cypress run --spec cypress/e2e/wordCounter.cy.js
```

---

## 🧪 Casos automatizados

Actualmente el proyecto automatiza las siguientes validaciones sobre https://wordcounter.net/

- Validación del número de palabras.
- Validación del número de caracteres.
- Validación de las tres palabras más repetidas en la sección **Keyword Density**.

---

## 🛠 Tecnologías utilizadas

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)

---

## 👤 Autor

**Valentina Gómez**

QA Automation Engineer
