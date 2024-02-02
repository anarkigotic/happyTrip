let SHEET_ID = '1eau-LyHWiP5wdWYRtFMMVovjNBMuynstatQxGQ4VCz0';
let SHEET_TITLE = 'destinos';
let SHEET_RANGE = 'A1:Z1000';  // Ajusta esto según el tamaño de tus datos

let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}&tqx=responseHandler:handleResponse`;

// Agregar una función de manejo de respuesta para JSONP
window.handleResponse = function(response) {
    const columnTitles = response.table.cols.map(col => col.label); // Obtener los títulos de las columnas

    const data = response.table.rows.map(row => {
      const rowData = {};
      row.c.forEach((cell, index) => {
        const colTitle = columnTitles[index];
        rowData[colTitle] = cell.v;
      });
      return rowData;
    });
    const nombreElement = document.getElementById('nombrePlaceholder');
    nombreElement.textContent = data[0]['Nombre'] || 'juancho';
  
    console.log(data);
};

// Crear un script dinámicamente para hacer la solicitud JSONP
const script = document.createElement('script');
script.src = FULL_URL;
document.body.appendChild(script);
