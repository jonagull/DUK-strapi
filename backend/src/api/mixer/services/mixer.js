'use strict';

/**
 * mixer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mixer.mixer');
