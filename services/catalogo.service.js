const fs = require('fs');
const path = require('path');
require('dotenv').config();

const templatePath = path.join(__dirname, '../public/pdf/viewer.html');
let cachedTemplate = '';



// Solucion temporal para mapear categorías a URLs de PDF
//  esto debe ir en la  base de datos
const DEFAULT_CATEGORY = 'default';
const DEFAULT_PDF_URL = 'https://catalogowurth.blob.core.windows.net/wurth/catalogo_wurth.pdf';

const CATEGORY_PDF_URLS = {
  'default': DEFAULT_PDF_URL,
  '01':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/01/CorteTaladroDesbaste.pdf',
  '02':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/02/quimico.pdf',
  '03':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/03/tornilleria.pdf',
  '04':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/04/AutoYCargo.pdf',
  '05':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/05/Anclajes.pdf',
  '06':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/06/electridad.pdf',
  '07':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/07/herramientas.pdf',
  '08':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/08/MAQUINAS_08.pdf',
  '09':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/09/SEGURIDAD_E_HIGIENE_09.pdf',
  '10':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/10/orsy.pdf',
  '11':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/11/agro.pdf',
  '12':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/seccion/Catalogo_REVENTA.pdf',
  '13':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/seccion/Catalogo_Auto.pdf',
  '14':  'https://catalogowurth.blob.core.windows.net/wurth/pdf/seccion/Placas_Metal_VF.pdf',
};

try {
  cachedTemplate = fs.readFileSync(templatePath, 'utf-8');
  console.log("✅ Plantilla del visor cargada en memoria");
} catch (err) {
  console.error("❌ No se pudo cargar la plantilla inicial:", err);
}

const getPdfUrlForCategory = (categorySlug) => {
   
  const slug = categorySlug || DEFAULT_CATEGORY;
  const url = CATEGORY_PDF_URLS[slug];
  
  if (!url) {
    return DEFAULT_PDF_URL;
  }
  return url;
};

const getViewerTemplate = (page, categorySlug) => {
  try {
    if (!cachedTemplate) {
      cachedTemplate = fs.readFileSync(templatePath, 'utf-8');
    }

    const targetPage = parseInt(page) || 1;
    const pdfUrl = getPdfUrlForCategory(categorySlug);

    if (!pdfUrl) {
      console.error(`❌ No se encontró URL para la categoría: ${categorySlug}`);
      return null;
    }

    let finalHtml = cachedTemplate
      .replace('__PDF_URL__', pdfUrl)
      .replace(
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
  getViewerTemplate,
  getPdfUrlForCategory
};