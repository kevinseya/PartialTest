# Proyecto WebSocket con Cola de Datos

Este proyecto consta de dos componentes principales:

1. **Backend**: Un servidor construido en Node.js que utiliza WebSockets para la comunicación en tiempo real. También implementa una cola de datos para gestionar mensajes o eventos. 
2. **Frontend**: Una página estática que actúa como cliente, conectándose al backend a través de WebSockets. La página debe ser servida por un servidor web para funcionar correctamente.

---

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior) o [yarn](https://yarnpkg.com/)
- Un servidor web simple para el frontend (puedes usar `http-server`, `serve` o cualquier servidor web de tu preferencia).

---

## Instrucciones para Configurar y Ejecutar

### Backend

1. **Clonar el repositorio**  
   ```bash
   git clone <https://github.com/kevinseya/PartialTest.git>```
  
2. Instalar dependencias
   ```bash
    cd backend
    npm install   ```

3. Ejecutar el servidor
   ```bash
    npm start
    Esto levantará el servidor backend en http://localhost:80 ```

4. Frontend

Servir los archivos estáticos
Usa cualquier servidor web para servir el archivo frontend, index.html . Por ejemplo, con http-server:
    ```bash
    npx http-server .```

Esto iniciará el servidor en http://localhost:8080 
