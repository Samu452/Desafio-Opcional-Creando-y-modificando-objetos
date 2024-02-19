function Pacientes(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}
function Consultorio(nombre) {
  this.nombre = nombre;
}
Pacientes.prototype.Getnombre = function () {
  return this.nombre;
};
Pacientes.prototype.GetEdad = function () {
  return this.edad;
};

Pacientes.prototype.GetRut = function () {
  return this.rut;
};

Pacientes.prototype.GetDiagnostico = function () {
  return this.diagnostico;
};

Pacientes.prototype.Setnombre = function (nuevoNombre) {
  this.nombre = nuevoNombre;
};

Pacientes.prototype.SetEdad = function (nuevaEdad) {
  this.edad = nuevaEdad;
};

Pacientes.prototype.SetRut = function (nuevoRut) {
  this.rut = nuevoRut;
};

Pacientes.prototype.SetDiagnostico = function (nuevoDiagnostico) {
  this.diagnostico = nuevoDiagnostico;
};


Pacientes.prototype.buscarPorNombre = function (nombreBuscado) {
  if (this.nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
    return this;
  } else {
    return null;
  }
};

Pacientes.prototype.mostrarTodosLosDatos = function () {
  console.log("Datos del paciente:");
  console.log("Nombre:", this.nombre);
  console.log("Edad:", this.edad);
  console.log("Rut:", this.rut);
  console.log("Diagnóstico:", this.diagnostico);}

  let paciente1 = new Pacientes("Diego", 30, "12345678-9", "Hipertensión");
  let paciente2 = new Pacientes("Pedro", 25, "98765432-1", "Asma");

  let pacienteEncontrado = paciente1.buscarPorNombre("Juan");
  if (pacienteEncontrado) {
    console.log("Paciente encontrado:");
    pacienteEncontrado.mostrarTodosLosDatos();
  } else {
    console.log("Paciente no encontrado.");
  }
