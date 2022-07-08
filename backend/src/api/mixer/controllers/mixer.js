'use strict';

/**
 *  mixer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mixer.mixer');
