'use strict';

/**
 * valami router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::valami.valami');
