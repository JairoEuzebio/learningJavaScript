/* Using If Else 
if (diaSemana === 0) {
    diaSemana = 'Domingo';
} else if (diaSemana === 1) {
    diaSemana = 'Segunda';
} else if (diaSemana === 2) {
    diaSemana = 'Terça';
} else if (diaSemana === 3) {
    diaSemana = 'Quarta';
} else if (diaSemana === 4) {
    diaSemana = 'Quinta';
} else if (diaSemana === 5) {
    diaSemana = 'Sexta';
} else if (diaSemana === 6) {
    diaSemana = 'Sábado';
} else {
    diaSemana = 'Dia inválido';
}


console.log(diaSemana);
*/

// Using Switch Case


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
  
    switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
    }
  }
  
  const data = new Date('1987-04-21 00:00:00');
  const diaSemana = data.getDay();
  const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
  
  console.log(diaSemana, diaSemanaTexto);