# 🧠 ACCET App - v1.0.0 (Official Release)

ACCET es una plataforma de Real World Assets (RWA) diseñada con una identidad visual premium y una arquitectura robusta en Next.js. Este repositorio contiene el frontend funcional validado bajo los estándares de calidad 126Q.

## 🚀 Características Principales
- **Branding Audit (126Q)**: Cumplimiento total con el manual de marca oficial (Sky #5EC8F2).
- **SplashScreen Animado**: Animación de entrada fluida basada en el "Spot 1" de la marca.
- **Arquitectura Modular**: Layouts responsivos y componentes de UI consistentes.
- **Integración con Clerk**: Autenticación segura y tematizada.

---

## 💻 Instalación Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/accetproject-star/accet-app.git
   cd accet-app/accet-nextjs
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**:
   Crea un archivo `.env.local` en la carpeta `accet-nextjs/` con tus llaves de Clerk:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## ☁️ Despliegue en Render.com

Para desplegar la aplicación en Render, sigue esta configuración:

1. **Crear un nuevo "Web Service"** en el Dashboard de Render.
2. **Conectar este repositorio de GitHub**.
3. **Configuración de Build**:
   - **Runtime**: `Node`
   - **Root Directory**: `accet-nextjs` (Importante si el proyecto está en una subcarpeta)
   - **Build Command**: `npm install; npm run build`
   - **Start Command**: `npm start`
4. **Variables de Entorno (Environment Variables)**:
   Asegúrate de agregar las llaves de Clerk mencionadas arriba en la sección "Environment" de Render.
5. **Branch**: `main` o `v1.0.0` para producción.

---

## 🎨 Guía de Marca
El sistema utiliza los siguientes tokens de color primarios:
- **Primary (Sky)**: `#5EC8F2`
- **Secondary (Ice)**: `#5ED7F2`
- **Accent (Teal)**: `#377D8C`
- **Background (Dark)**: `#0D0D0D`

Para más detalles, consulta el archivo [branding-audit.md](.agents/rules/branding-audit.md).

---

## ✅ Auditoría de Calidad
Este proyecto ha pasado satisfactoriamente las auditorías:
- [x] **126Q Debug Audit**: Estabilidad técnica y responsividad.
- [x] **126Q Branding Audit**: Consistencia visual y fidelidad de marca.

---
© 2026 ACCET Project. All rights reserved.
