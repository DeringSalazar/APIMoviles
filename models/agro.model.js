const { pool } = require('../services/db.js');

class AgroModel {
  async getAllAgro() {
    try {
      const { rows } = await pool.query(`
        SELECT 
          dc.category_slug,
          dc.content::jsonb ->> 'name' AS category_name,
          sub ->> 'code' AS subcategory_code,
          sub ->> 'name' AS subcategory_name,
          prod ->> 'id' AS product_id,
          prod ->> 'name' AS product_name,
          prod -> 'images' ->> 0 AS product_image
        FROM digital_catalog dc
        CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
        CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
        WHERE dc.category_slug = '11'
      `);
      return rows || [];
    } catch (error) {
      console.error('Error en getAllAgro:', error);
      throw error;
    }
  }

  async getAgroDetail(productId) {
    try {
      console.log('Obteniendo detalles para el producto AGRO con ID:', productId);
      const { rows } = await pool.query(`
        SELECT 
          dc.content::jsonb ->> 'name' AS category_name,
          sub ->> 'code' AS subcategory_code,
          sub ->> 'name' AS subcategory_name,
          prod ->> 'id' AS product_id,
          prod ->> 'name' AS product_name,
          prod ->> 'pdfPage' AS pdf_page,
          COALESCE(prod -> 'features', '[]'::jsonb) AS features,
          COALESCE(prod -> 'applications', '[]'::jsonb) AS applications,
          COALESCE(prod -> 'images', '[]'::jsonb) AS images,
          prod ->> 'articleNumber' AS article_number,
          prod ->> 'page' AS page_number
        FROM digital_catalog dc
        CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
        CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
        WHERE dc.category_slug = '11'
          AND prod ->> 'id' = $1
      `, [productId]);

      if (!rows.length) return null;

      const row = rows[0];

      return {
        product_id:        row.product_id,
        product_name:      row.product_name,
        category_name:     row.category_name,
        subcategory_code:  row.subcategory_code,
        subcategory_name:  row.subcategory_name,
        features:          row.features ?? [],
        applications:      row.applications ?? [],
        images:            row.images ?? [],
        article_number:    row.article_number,
        page_number:       row.page_number,
      };

    } catch (error) {
      console.error('Error en getAgroDetail:', error);
      throw error;
    }
  }

  async getAgroByArticle(articleNumber) {
    try {
      console.log('Obteniendo producto AGRO por número de artículo:', articleNumber);
      const { rows } = await pool.query(`
        SELECT 
          dc.content::jsonb ->> 'name' AS category_name,
          sub ->> 'name' AS subcategory_name,
          prod ->> 'id' AS product_id,
          prod ->> 'name' AS product_name,
          prod ->> 'articleNumber' AS article_number,
          prod ->> 'page' AS page_number,
          COALESCE(prod -> 'features', '[]'::jsonb) AS features,
          COALESCE(prod -> 'applications', '[]'::jsonb) AS applications
        FROM digital_catalog dc
        CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
        CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
        WHERE dc.category_slug = '11'
          AND prod ->> 'articleNumber' = $1
      `, [articleNumber]);

      if (!rows.length) return null;

      return rows[0];

    } catch (error) {
      console.error('Error en getAgroByArticle:', error);
      throw error;
    }
  }

  async searchAgro(searchTerm) {
    try {
      console.log('Buscando productos AGRO con término:', searchTerm);
      const { rows } = await pool.query(`
        SELECT 
          prod ->> 'id' AS product_id,
          prod ->> 'name' AS product_name,
          prod ->> 'articleNumber' AS article_number,
          prod ->> 'page' AS page_number
        FROM digital_catalog dc
        CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
        CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
        WHERE dc.category_slug = '11'
          AND (prod ->> 'name' ILIKE $1 OR prod ->> 'articleNumber' ILIKE $1)
      `, [`%${searchTerm}%`]);

      return rows || [];

    } catch (error) {
      console.error('Error en searchAgro:', error);
      throw error;
    }
  }
}

module.exports = new AgroModel();
