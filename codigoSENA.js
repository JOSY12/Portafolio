//aqui empieza las tablas postgresql

-- tabla Aeropuerto
CREATE TABLE Aeropuerto (
    Codigo CHAR(3) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Ciudad VARCHAR(100) NOT NULL,
    Pais VARCHAR(100) NOT NULL
);

-- tabla ModeloAvion
CREATE TABLE ModeloAvion (
    ID_Modelo SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Capacidad INT NOT NULL
);

-- tabla ProgramaVuelo
CREATE TABLE ProgramaVuelo (
    NumeroVuelo VARCHAR(10) PRIMARY KEY,
    LineaAerea VARCHAR(100) NOT NULL,
    DiasSemana VARCHAR(50) NOT NULL,
    AeropuertoDespegue CHAR(3),
    AeropuertoAterrizaje CHAR(3),
    FOREIGN KEY (AeropuertoDespegue) REFERENCES Aeropuerto(Codigo),
    FOREIGN KEY (AeropuertoAterrizaje) REFERENCES Aeropuerto(Codigo)
);

-- tabla Vuelo
CREATE TABLE Vuelo (
    ID_Vuelo SERIAL PRIMARY KEY,
    Fecha DATE NOT NULL,
    PlazasVacias INT NOT NULL,
    ID_Modelo INT,
    NumeroVuelo VARCHAR(10),
    FOREIGN KEY (ID_Modelo) REFERENCES ModeloAvion(ID_Modelo),
    FOREIGN KEY (NumeroVuelo) REFERENCES ProgramaVuelo(NumeroVuelo)
);

-- tabla EscalaTecnica
CREATE TABLE EscalaTecnica (
    ID_Escala SERIAL PRIMARY KEY,
    NumeroVuelo VARCHAR(10),
    AeropuertoEscala CHAR(3),
    FOREIGN KEY (NumeroVuelo) REFERENCES ProgramaVuelo(NumeroVuelo),
    FOREIGN KEY (AeropuertoEscala) REFERENCES Aeropuerto(Codigo)
);

-- tabla intermedia Aeropuerto_ModeloAvion para la relación muchos a muchos
CREATE TABLE Aeropuerto_ModeloAvion (
    CodigoAeropuerto CHAR(3),
    ID_Modelo INT,
    PRIMARY KEY (CodigoAeropuerto, ID_Modelo),
    FOREIGN KEY (CodigoAeropuerto) REFERENCES Aeropuerto(Codigo),
    FOREIGN KEY (ID_Modelo) REFERENCES ModeloAvion(ID_Modelo)
);


// -- estas lineas de codigo que siguen son para probar la funcionalidad de de las tablas anteriores 
// --    y poder crear datos en cada tabla se pueden probar copiando el codigo
// --   pueden probarse en linea aqui en esta pagina o usando el pgadmin en windows o mac o cualquier otro compilador postgresql :

// -- https://onecompiler.com/postgresql


-- inserta datos en la tabla Aeropuerto
INSERT INTO Aeropuerto (Codigo, Nombre, Ciudad, Pais) VALUES
('JFK', 'John F. Kennedy International Airport', 'New York', 'USA'),
('LAX', 'Los Angeles International Airport', 'Los Angeles', 'USA'),
('ORD', 'Hare International Airport', 'Chicago', 'USA');

-- inserta datos en la tabla ModeloAvion
INSERT INTO ModeloAvion (Nombre, Capacidad) VALUES
('Boeing 737', 189),
('Airbus A320', 180),
('Boeing 777', 396);

-- inserta datos en la tabla ProgramaVuelo
INSERT INTO ProgramaVuelo (NumeroVuelo, LineaAerea, DiasSemana, AeropuertoDespegue, AeropuertoAterrizaje) VALUES
('AA100', 'American Airlines', 'Lunes, Miércoles, Viernes', 'JFK', 'LAX'),
('UA200', 'United Airlines', 'Martes, Jueves, Sábado', 'LAX', 'ORD');

-- Insertar datos en la tabla Vuelo
INSERT INTO Vuelo (Fecha, PlazasVacias, ID_Modelo, NumeroVuelo) VALUES
('2024-08-05', 10, 1, 'AA100'),
('2024-08-06', 20, 2, 'UA200');

-- inserta datos en la tabla EscalaTecnica
INSERT INTO EscalaTecnica (NumeroVuelo, AeropuertoEscala) VALUES
('AA100', 'ORD'),
('UA200', 'JFK');

-- inserta datos en la tabla intermedia Aeropuerto_ModeloAvion
INSERT INTO Aeropuerto_ModeloAvion (CodigoAeropuerto, ID_Modelo) VALUES
('JFK', 1),
('JFK', 2),
('LAX', 1),
('LAX', 3),
('ORD', 2),
('ORD', 3);

-- Consultar un vuelo específico
SELECT 
    v.ID_Vuelo, 
    v.Fecha, 
    v.PlazasVacias, 
    m.Nombre AS ModeloAvion, 
    pv.NumeroVuelo, 
    pv.LineaAerea, 
    a1.Nombre AS AeropuertoDespegue, 
    a2.Nombre AS AeropuertoAterrizaje
FROM Vuelo v
JOIN ModeloAvion m ON v.ID_Modelo = m.ID_Modelo
JOIN ProgramaVuelo pv ON v.NumeroVuelo = pv.NumeroVuelo
JOIN Aeropuerto a1 ON pv.AeropuertoDespegue = a1.Codigo
JOIN Aeropuerto a2 ON pv.AeropuertoAterrizaje = a2.Codigo
WHERE v.ID_Vuelo = 1;






//aqui termina las tablas postgresql





//codigo a cada problea dado

//aqui empieza el problema 1

function calcularAreaCuadrado(lado) {
  const area = lado * lado;
  return area;

}
console.log(calcularAreaCuadrado(2)) //4

function calcularPerimetroCuadrado(lado) {
  const perimetro = 4 * lado;
  return perimetro;

}
console.log(calcularPerimetroCuadrado(4)) //16

function calcularAreaRectangulo(base, altura) {
  const area = base * altura;
  return area;

}
console.log(calcularAreaRectangulo(4, 10)) //40

function calcularPerimetroRectangulo(base, altura) {
  const perimetro = 2 * (base + altura);
  return perimetro;

}
console.log(calcularPerimetroRectangulo(2, 3)) //10

function calcularAreaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;

}
console.log(calcularAreaTriangulo(4, 6)) //12
//
function calcularPerimetroTriangulo(ladol, lado2, lado3) {
  const perimetro = ladol + lado2 + lado3;
  return perimetro;
}
console.log(calcularPerimetroTriangulo(4, 2, 5)) //11

function calcularAreaCirculo(radio) {
  const area = Math.PI * radio * radio;
  return area;

}
console.log(calcularAreaCirculo(20)) //1256.6370614359173

function calcularPerimetroCirculo(radio) {
  const perimetro = 2 * Math.PI * radio;
  return perimetro;

}
console.log(calcularPerimetroCirculo(19)) //119.38052083641213

function calcularAreaTrapecio(baseMayor, baseMenor, altura) {
  const area = ((baseMayor + baseMenor) * altura) / 2;
  return area; 
}
console.log(calcularAreaTrapecio(10, 4, 20)) //140

function calcularPerimetroTrapecio(baseMayor, baseMenor, ladol, lado2) {
  const perimetro = baseMayor + baseMenor + ladol + lado2;
  return perimetro;
}

console.log(calcularPerimetroTrapecio(10, 4, 6, 10)) //30


//aqui termina el problema 1






















//aqui empieza el problema 2

function calcularedades() {
  let edades = [];

  const num_personas = 10;

  for (let i = 0; i < num_personas; i++) {
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1} (entre 1 y 120): `), 10);

    while (isNaN(edad) || edad < 1 || edad > 120) {
      alert("Error: La edad debe estar entre 1 y 120 años.");
      edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1} (entre 1 y 120): `), 10);
    }

    edades.push(edad);
  }

  let menores_edad = 0;
  let mayores_edad = 0;

  let adultos_mayores = 0;
  let edad_minima = edades[0];
  let edad_maxima = edades[0];

  for (let edad of edades) {
    if (edad < 18) {
      menores_edad += 1;
    } else if (edad < 60) {
      mayores_edad += 1;
    } else {
      adultos_mayores += 1;
    }

    if (edad < edad_minima) {
      edad_minima = edad;
    }

    if (edad > edad_maxima) {
      edad_maxima = edad;
    }
  }

  let suma_edades = 0;

  for (let edad of edades) {
    suma_edades += edad;
  }

  let promedio_edades = suma_edades / num_personas;

  console.log("Cantidad de menores de edad:", menores_edad);
  console.log("Cantidad de mayores de edad:", mayores_edad);
  console.log("Cantidad de adultos mayores:", adultos_mayores);
  console.log("Edad mínima:", edad_minima);
  console.log("Edad máxima:", edad_maxima);
  console.log("Promedio de edades:", promedio_edades.toFixed(2));
}

// Llamada a la función principal
calcularedades();

//aqui termina el problema 2

















//aqui empieza el problema 3


function solicitar_vector(nombre) {
  let vector = [];

  for (let i = 0; i < 5; i++) {
    let valido = false;
    while (!valido) {
      let input_str = prompt(
        `Ingrese el valor ${i + 1} del ${nombre} (debe ser mayor o igual al valor anterior): `
      );
      let valor = parseInt(input_str, 10);

      if (!isNaN(valor) && (i == 0 || valor >= vector[i - 1])) {
        vector.push(valor);
        valido = true;
      } else {
        alert("Error: El número ingresado debe ser un entero y debe estar en orden ascendente.");
      }
    }
  }

  return vector;
}

function mezclar_vectores(vector1, vector2) {
  let mezcla = [];

  let i = 0;
  let j = 0;
  while (i < vector1.length && j < vector2.length) {
    if (vector1[i] < vector2[j]) {
      mezcla.push(vector1[i]);
      i++;
    } else {
      mezcla.push(vector2[j]);
      j++;
    }
  }

  while (i < vector1.length) {
    mezcla.push(vector1[i]);
    i++;
  }

  while (j < vector2.length) {
    mezcla.push(vector2[j]);
    j++;
  }

  return mezcla;
}

function ordenarlistas() {
  let vector1 = solicitar_vector("Vector 1");
  let vector2 = solicitar_vector("Vector 2");

  let vector_mezclado = mezclar_vectores(vector1, vector2);

  console.log("Vector 1:", vector1);
  console.log("Vector 2:", vector2);
  console.log("Vector Mezclado:", vector_mezclado);
}

// Llamada a la función principal
ordenarlistas();

//aqui termina el problema 3

























//aqui empieza el problema 4


let personas = [];

function agregarPersona() {
  let persona = {};

  persona.nombre = prompt("Ingrese el nombre de la persona:");
  persona.cedula = prompt("Ingrese el número de identificación (cédula):");
  persona.fechaNacimiento = prompt("Ingrese la fecha de nacimiento (dd/mm/yyyy):");

  persona.correo = prompt("Ingrese el correo electrónico:");
  persona.ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
  persona.ciudadOrigen = prompt("Ingrese la ciudad de origen:");

  persona.cancionesFavoritas = [];

  for (let i = 0; i < 3; i++) {
    let cancion = {};
    cancion.artista = prompt("Ingrese el nombre del artista de la canción favorita " + (i + 1) + ":");
    cancion.titulo = prompt("Ingrese el titulo de la canción favorita " + (i + 1) + ":");

    persona.cancionesFavoritas.push(cancion);
  }

  personas.push(persona);
  alert("Persona agregada exitosamente.");
}

function mostrarPersona() {
  let posicion = parseInt(prompt("Ingrese la posición de la persona en el vector (0 a " + (personas.length - 1) + ")"), 10);

  if (posicion >= 0 && posicion < personas.length) {
    let persona = personas[posicion];

    let info = "Cédula: " + persona.cedula + "\n" +
      "Nombre: " + persona.nombre + "\n" +
      "Fecha de Nacimiento: " + persona.fechaNacimiento + "\n" +
      "Correo: " + persona.correo + "\n" +
      "Ciudad de Residencia: " + persona.ciudadResidencia + "\n" +
      "Ciudad de Origen: " + persona.ciudadOrigen + "\n" +
      "Canciones Favoritas: \n";

    persona.cancionesFavoritas.forEach((cancion, index) => {
      info += (index + 1) + ". Artista: " + cancion.artista + ", Título: " + cancion.titulo + "\n";
    });

    alert(info);
  } else {
    alert("Posición inválida.");
  }
}

function mostrarMenu() {
  let opcion;

  do {
    opcion = prompt("Menú de Opciones: \n" +
      "1. Agregar una persona\n" +
      "2. Mostrar información de una persona\n" +
      "3. Salir\n" +
      "Ingrese su opción:");

    switch (opcion) {
      case '1':
        agregarPersona();
        break;
      case '2':
        mostrarPersona();
        break;
      case '3':
        alert("Saliendo del programa.");
        break;
      default:
        alert("Opción inválida. Intente nuevamente.");
    }
  } while (opcion !== '3');
}

// Función principal
mostrarMenu();

//aqui termina el problema 4

