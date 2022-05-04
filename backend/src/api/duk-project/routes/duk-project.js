'use strict';

/**
 * duk-project router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::duk-project.duk-project');
