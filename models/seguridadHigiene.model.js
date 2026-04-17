const { pool } = require('../services/db.service.js');

class SeguridadHigieneModel {
  async getAllSeguridadHigieneCards() {
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
        WHERE dc.category_slug = '04'
      `);
      return rows || [];
    } catch (error) {
      console.error('Error en getAllSeguridadHigieneCards:', error);
      throw error;
    }
  }

  async getSeguridadHigieneDetail(productId) {
    try {
      console.log('Obteniendo detalles para el producto con ID:', productId);
      const { rows } = await pool.query(`
        SELECT 
          dc.content::jsonb ->> 'name' AS category_name,
          sub ->> 'code' AS subcategory_code,
          sub ->> 'name' AS subcategory_name,
          prod ->> 'id' AS product_id,
          prod ->> 'name' AS product_name,
          COALESCE(prod -> 'features', '[]'::jsonb) AS features,
          COALESCE(prod -> 'applications', '[]'::jsonb) AS applications,
          COALESCE(prod -> 'images', '[]'::jsonb) AS images
        FROM digital_catalog dc
        CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
        CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
        WHERE dc.category_slug = '04'
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
      };

    } catch (error) {
      console.error('Error en getSeguridadHigieneDetail:', error);
      throw error;
    }
  }

  async getSeguridadHigienePdfPage(productId) {
    try {
      const { rows } = await pool.query(`
        SELECT 
          prod ->> 'id' AS product_id,
          prod ->> 'name' AS product_name,
          prod ->> 'pdfPage' AS pdf_page
        FROM digital_catalog dc
        CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
        CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
        WHERE dc.category_slug = '04'
          AND prod ->> 'id' = $1
      `, [productId]);

      if (!rows.length) return null;

      return {
        product_id:   rows[0].product_id,
        product_name: rows[0].product_name,
        pdf_page:     rows[0].pdf_page,
      };

    } catch (error) {
      console.error('Error en getSeguridadHigienePdfPage:', error);
      throw error;
    }
  }
}

module.exports = new SeguridadHigieneModel();