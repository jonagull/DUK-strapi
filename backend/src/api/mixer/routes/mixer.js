'use strict';

/**
 * mixer router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mixer.mixer');
