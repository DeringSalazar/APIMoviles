const catalogoService = require('../services/catalogo.service');

const getViewer = (req, res) => {
  try {
  
    const { page } = req.query;
    
  
    const htmlContent = catalogoService.getViewerTemplate(page);

    if (!htmlContent) {
      return res.status(500).json({ error: 'Error interno al procesar el visor del catálogo' });
    }
    res.setHeader('Cache-Control', 'public, max-age=86400');

  
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);

  } catch (error) {
    console.error('❌ Error en el controlador del catálogo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getViewer
};