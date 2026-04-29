
const { pool } = require('../services/db.js');

class MaquinasModel {

    async getAllMaquinas() {
        try {
            const { rows } = await pool.query(`
                SELECT 
                    dc.category_slug,
                    dc.content::jsonb ->> 'name' AS category_name,
                    sub ->> 'code' AS subcategory_code,
                    sub ->> 'name' AS subcategory_name,
                    prod ->> 'id' AS product_id,
                    prod ->> 'name' AS product_name,
                    prod ->> 'pdfPage' AS pdf_page,
                    COALESCE(prod -> 'images', '[]'::jsonb) AS product_image
                FROM digital_catalog dc
                CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
                CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
                WHERE dc.category_slug = '08'
            `);

            return (rows || []).map(row => ({
                ...row,
                product_images: Array.isArray(row.product_images)
                    ? row.product_images
                    : []
            }));
        } catch (error) {
            console.error('Error en getAllMaquinas:', error);
            throw error;
        }
    }

    async getMaquina(productId) {
        try {
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
                    COALESCE(prod -> 'images', '[]'::jsonb) AS images
                FROM digital_catalog dc
                CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
                CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
                WHERE dc.category_slug = '08'
                AND prod ->> 'id' = $1
            `, [productId]);

            if (!rows.length) return null;
            const row = rows[0];

            return {
                product_id: row.product_id,
                product_name: row.product_name,
                category_name: row.category_name,
                subcategory_code: row.subcategory_code,
                subcategory_name: row.subcategory_name,
                pdf_page: row.pdf_page,
                features: row.features ?? [],
                applications: row.applications ?? [],
                images: row.images ?? [],
            };
        } catch (error) {
            console.error('Error en getMaquina:', error);
            throw error;
        }
    }

    async getMaquinaPdfPage(productId) {
        try {
            const { rows } = await pool.query(`
                SELECT 
                    prod ->> 'id' AS product_id,
                    prod ->> 'name' AS product_name,
                    prod ->> 'pdfPage' AS pdf_page
                FROM digital_catalog dc
                CROSS JOIN LATERAL jsonb_array_elements(dc.content::jsonb -> 'subcategories') AS sub
                CROSS JOIN LATERAL jsonb_array_elements(sub -> 'products') AS prod
                WHERE dc.category_slug = '08'
                AND prod ->> 'id' = $1
            `, [productId]);

            if (!rows.length) return null;
            return {
                product_id: rows[0].product_id,
                product_name: rows[0].product_name,
                pdf_page: rows[0].pdf_page,
            };
        } catch (error) {
            console.error('Error en getMaquinaPdfPage:', error);
            throw error;
        }
    }
}

module.exports = new MaquinasModel();