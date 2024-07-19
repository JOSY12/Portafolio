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

function main() {
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
main();

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

function main() {
  let vector1 = solicitar_vector("Vector 1");
  let vector2 = solicitar_vector("Vector 2");

  let vector_mezclado = mezclar_vectores(vector1, vector2);

  console.log("Vector 1:", vector1);
  console.log("Vector 2:", vector2);
  console.log("Vector Mezclado:", vector_mezclado);
}

// Llamada a la función principal
main();

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

