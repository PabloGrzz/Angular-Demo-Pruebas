# 🏍️ Motos Web App – Proyecto base para practicar animaciones en Angular

Este es un proyecto base desarrollado con **Angular**, pensado específicamente como entorno de pruebas para **animaciones, transiciones, efectos visuales y otras funcionalidades de frontend**. No es una aplicación de producción ni incluye backend; todo está simulado para facilitar el desarrollo visual y la experimentación.

---

## 🎯 Finalidad del proyecto

Este repositorio está creado como **punto de partida para practicar con Angular** y experimentar con:

- Animaciones de entrada y salida entre componentes.
- Transiciones suaves y efectos visuales.
- Estilos dinámicos y personalizados.
- Pruebas con librerías de animación o CSS avanzado.
- Estructura modular y reutilización de componentes.

⚠️ **No contiene lógica de negocio real ni conexión con bases de datos**. Los datos están simulados para facilitar el trabajo en la parte visual.

---

## 🚀 Características

- Navegación entre vistas con **Angular Router**.
- Componentes modulares: Header, Footer, y páginas independientes.
- Página de productos con un **componente reutilizable** para mostrar motos.
- **Servicio simulado** con lista de productos hardcodeada (sin backend).
- Estilos en CSS, sin frameworks externos como Tailwind o Bootstrap.
- Preparado para que añadas animaciones con Angular, CSS o librerías externas.

---

## 🧱 Estructura del proyecto

- `/src/app/components`  
  - `Header`, `Footer`
- `/src/app/pages`  
  - `Home`, `About`, `Contact`, `Products`
- `/src/app/services`  
  - `ProductService` (datos de prueba)
- `/src/assets/img`  
  - Imágenes de las motos
- `ProductsComponent`: muestra productos de forma reutilizable y sencilla.

---

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala las dependencias:

bash
Copiar
Editar
npm install
Arranca el servidor de desarrollo:

bash
Copiar
Editar
ng serve
Abre http://localhost:4200 en tu navegador para ver el resultado.

🛠️ Tecnologías utilizadas
Angular

TypeScript

HTML y CSS
