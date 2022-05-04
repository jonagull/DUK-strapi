'use strict';

/**
 * duk-content router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::duk-content.duk-content');
