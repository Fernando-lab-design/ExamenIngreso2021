function mostrar()
{

  let nombre;
  let cursada;
  let materias;
  let sexo;
  let nota;
  let edad;
  let mejorProm;
  let promMax;
  let edadMenor;
  let nombreMenor;
  let acumNotaFem = 0;
  let contNotaFem = 0;
  let acumNotaMasc = 0;
  let contNotaMasc = 0;
  let acumNotaNB = 0;
  let contNotaNB = 0;
  let promFem;
  let promMasc;
  let promNB;
  let maxMat;
  let maxMatNomb;
  let maxMatEdad;
  let flagEdad = 1;
  let flagMat = 1;
  let flagSexo = 1;
  let sigue;

  do
  {
    nombre = prompt("Ingrese nombre: ");
    cursada = prompt("Ingrese modalidad de cursada: libre/remota/presencial ");
    while(cursada != "libre" && cursada != "presencial" && cursada != "remota")
    {
      cursada = prompt("Error. Ingrese modalidad de cursada: libre/remota/presencial ");
    }
    materias = parseInt(prompt("Ingrese cantidad de materias: "));
    while(isNaN(materias) || materias < 0 || materias >= 8)
    {
      materias = parseInt(prompt("Error. Ingrese cantidad de materias: "));
    }
    sexo = prompt("Ingrese sexo: femenino/masculino/no binario: ");
    while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
    {
      sexo = prompt("No valido. Ingrese sexo: femenino/masculino/no binario: ");
    }
    nota = parseInt(prompt("Ingrese nota promedio:"));
    while(isNaN(nota) || nota < 0 || nota >10)
    {
      nota = parseInt(prompt("No valido. Ingrese nota promedio:"));
    }
    edad = parseInt(prompt("Ingrese edad: "));
    while(isNaN(edad) || edad < 0 )
    {
      edad = parseInt(prompt("no es valido. Ingrese edad: "));
    }
    if(sexo != "masculino")
    {
      if(flagSexo || nota > promMax)
      {
        promMax = nota;
        mejorProm = nombre;
        flagSexo = 0;
      }
    }
    if(cursada == "libre")
    {
      if(flagEdad || edad < edadMenor)
      edadMenor = edad;
      nombreMenor = nombre;
      flagEdad = 0;
    }
    switch(sexo)
    {
      case "femenino":
        acumNotaFem += nota;
        contNotaFem++;
        break;
      case "masculino":
        acumNotaMasc += nota;
        contNotaMasc++;
        break;
      case "no binario":
        acumNotaNB += nota;
        contNotaNB++;
        break;
    }
    if(cursada != "remota")
    {
      if(flagMat || materias > maxMat)
      {
        maxMat = materias;
        maxMatEdad = edad;
        maxMatNomb = nombre;
        flagMat = 0;
      }
    }
    sigue = prompt("Desea ingresar otro alumno?", "si");
  }while(sigue == "si");

  promFem = acumNotaFem/contNotaFem;
  promMasc = acumNotaMasc/contNotaMasc;
  promNB = acumNotaNB/contNotaNB;
  
  document.write("a- El nombre del mejor promedio que no es masculino es: " + mejorProm + "<br>");
  document.write("b- Entre los que dan libre el mas joven es: " + nombreMenor + "<br>");
  document.write("c- Los promedio de nota por sexo son: femenino: " + promFem + "<br>" );
  document.write(" masculino: " + promMasc + "<br>" );
  document.write(" no binario: " + promNB + "<br>" );
  document.write("d- El alumno que mas materias cursa que no es remota es " + maxMatNomb + " y su edad es " + maxMatEdad);
}
