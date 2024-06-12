'use strict';

/**
 * valami service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::valami.valami');
