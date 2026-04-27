const catalogoService = require('../services/catalogo.service');

const getViewer = (req, res) => {
  try {
    const { page, categorySlug } = req.query;

    const htmlContent = catalogoService.getViewerTemplate(page, categorySlug);

    if (!htmlContent) {
      return res.status(500).json({ 
        error: 'Error al procesar el visor del catálogo para la categoría indicada' 
      });
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(htmlContent);

  } catch (error) {
    console.error('❌ Error en el controlador del catálogo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getViewer
};
