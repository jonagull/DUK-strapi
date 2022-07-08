'use strict';

/**
 * duk-content service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::duk-content.duk-content');
