const fs = require('fs');
const path = require('path');
require('dotenv').config();

const CATALOGO_WURTH_URL = process.env.CATALOGO_WURTH_URL;


const templatePath = path.join(__dirname, '../public/pdf/viewer.html');
let cachedTemplate = '';

try {
    cachedTemplate = fs.readFileSync(templatePath, 'utf-8');

    cachedTemplate = cachedTemplate.replace('__PDF_URL__', CATALOGO_WURTH_URL);
    console.log("✅ Plantilla del visor cargada en memoria");
} catch (err) {
    console.error("❌ No se pudo cargar la plantilla inicial:", err);
}

const getViewerTemplate = (page) => {
  try {
    if (!cachedTemplate) {

        cachedTemplate = fs.readFileSync(templatePath, 'utf-8').replace('__PDF_URL__', CATALOGO_WURTH_URL);
    }

    const targetPage = parseInt(page) || 1;

    const finalHtml = cachedTemplate.replace(
      "const targetPage = parseInt(urlParams.get('page')) || 1;",
      `const targetPage = ${targetPage};`
    );

    return finalHtml;
  } catch (error) {
    console.error('❌ Error procesando la plantilla:', error);
    return null; 
  }
};

module.exports = {
  getViewerTemplate
};