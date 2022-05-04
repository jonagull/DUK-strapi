'use strict';

/**
 * duk-project service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::duk-project.duk-project');
