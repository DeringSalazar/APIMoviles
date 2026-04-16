const fs = require('fs');
const path = require('path');


const CATALOGO_WURTH_URL = 'https://zelptppjet.ufs.sh/f/GI0GSIE29OX0gd2GpoZJAYIGWmeavJNpQtl8SRub6UnP5y0B';

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