const fs = require('fs');
const path = require('path');
require('dotenv').config();

const CATALOGO_WURTH_URL = process.env.CATALOGO_WURTH_URL;

const getViewerTemplate = (page) => {
  try {

    const templatePath = path.join(__dirname, '../public/pdf/viewer.html');
    

    let template = fs.readFileSync(templatePath, 'utf-8');
    
    
    template = template.replace('__PDF_URL__', CATALOGO_WURTH_URL);
    

    const targetPage = parseInt(page) || 1;
    template = template.replace(
      "const targetPage = parseInt(urlParams.get('page')) || 1;",
      `const targetPage = ${targetPage};`
    );

    return template;
  } catch (error) {
    console.error('❌ Error leyendo la plantilla del viewer:', error);
    return null; 
  }
};

module.exports = {
  getViewerTemplate
};