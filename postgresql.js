//aqui empieza el codigo para el modelo logio MER de una parte funcional de mi pagina web de proyecto 

 //aqui comienza el codigo de creacion de tablas
-- Crear tabla Usuario
CREATE TABLE Usuario (
    ID_Usuario SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(100) UNIQUE NOT NULL,
    Contraseña VARCHAR(100) NOT NULL,
    Dirección VARCHAR(200) NOT NULL,
    Teléfono VARCHAR(15) NOT NULL
);

-- Crear tabla Categoría
CREATE TABLE Categoría (
    ID_Categoría SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);

-- Crear tabla Producto
CREATE TABLE Producto (
    ID_Producto SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripción TEXT NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    ID_Categoría INT REFERENCES Categoría(ID_Categoría)
);

-- Crear tabla Pedido
CREATE TABLE Pedido (
    ID_Pedido SERIAL PRIMARY KEY,
    Fecha DATE NOT NULL,
    Total DECIMAL(10, 2) NOT NULL,
    Estado VARCHAR(20) NOT NULL,
    ID_Usuario INT REFERENCES Usuario(ID_Usuario)
);

-- Crear tabla DetallePedido
CREATE TABLE DetallePedido (
    ID_DetallePedido SERIAL PRIMARY KEY,
    ID_Pedido INT REFERENCES Pedido(ID_Pedido),
    ID_Producto INT REFERENCES Producto(ID_Producto),
    Cantidad INT NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL
);

-- Crear tabla Pago
CREATE TABLE Pago (
    ID_Pago SERIAL PRIMARY KEY,
    Monto DECIMAL(10, 2) NOT NULL,
    Fecha DATE NOT NULL,
    Método VARCHAR(50) NOT NULL,
    ID_Pedido INT REFERENCES Pedido(ID_Pedido)
);

-- Crear tabla Reseña
CREATE TABLE Reseña (
    ID_Reseña SERIAL PRIMARY KEY,
    Comentario TEXT NOT NULL,
    Puntuación INT NOT NULL CHECK (Puntuación BETWEEN 1 AND 5),
    Fecha DATE NOT NULL,
    ID_Producto INT REFERENCES Producto(ID_Producto),
    ID_Usuario INT REFERENCES Usuario(ID_Usuario)
);

 //aqui termina el codigo de creacion de tablas



//en este pungo el codigo que prosigue es para inster datos en la base de datos y verificar que funciona 

-- Insertar datos en la tabla Usuario
INSERT INTO Usuario (Nombre, Apellido, CorreoElectronico, Contraseña, Dirección, Teléfono) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'password123', '1234 Elm Street', '555-1234'),
('María', 'González', 'maria.gonzalez@example.com', 'password123', '5678 Oak Avenue', '555-5678');

-- Insertar datos en la tabla Categoría
INSERT INTO Categoría (Nombre) VALUES
('Laptops'),
('Smartphones'),
('Tabletas');

-- Insertar datos en la tabla Producto
INSERT INTO Producto (Nombre, Descripción, Precio, Stock, ID_Categoría) VALUES
('Laptop Dell XPS 13', 'Ultrabook con pantalla de 13 pulgadas', 999.99, 50, 1),
('iPhone 12', 'Smartphone Apple con 64GB de almacenamiento', 799.99, 100, 2),
('Samsung Galaxy Tab S7', 'Tableta Samsung con pantalla de 11 pulgadas', 649.99, 30, 3);

-- Insertar datos en la tabla Pedido
INSERT INTO Pedido (Fecha, Total, Estado, ID_Usuario) VALUES
('2024-08-05', 1799.98, 'Procesado', 1),
('2024-08-06', 649.99, 'Enviado', 2);

-- Insertar datos en la tabla DetallePedido
INSERT INTO DetallePedido (ID_Pedido, ID_Producto, Cantidad, Precio) VALUES
(1, 1, 1, 999.99),
(1, 2, 1, 799.99),
(2, 3, 1, 649.99);

-- Insertar datos en la tabla Pago
INSERT INTO Pago (Monto, Fecha, Método, ID_Pedido) VALUES
(1799.98, '2024-08-05', 'Tarjeta de Crédito', 1),
(649.99, '2024-08-06', 'PayPal', 2);

-- Insertar datos en la tabla Reseña
INSERT INTO Reseña (Comentario, Puntuación, Fecha, ID_Producto, ID_Usuario) VALUES
('Excelente laptop, muy rápida y ligera.', 5, '2024-08-07', 1, 1),
('Muy buen smartphone, buena relación calidad-precio.', 4, '2024-08-08', 2, 1);

-- Consultar un pedido específico
SELECT 
    p.ID_Pedido, 
    p.Fecha, 
    p.Total, 
    p.Estado, 
    u.Nombre AS NombreUsuario, 
    u.Apellido AS ApellidoUsuario, 
    dp.ID_Producto, 
    prod.Nombre AS NombreProducto, 
    dp.Cantidad, 
    dp.Precio
FROM Pedido p
JOIN Usuario u ON p.ID_Usuario = u.ID_Usuario
JOIN DetallePedido dp ON p.ID_Pedido = dp.ID_Pedido
JOIN Producto prod ON dp.ID_Producto = prod.ID_Producto
WHERE p.ID_Pedido = 1;
// aqui termina el codigo probable y prueba de insercion de informacion a la base de datos
