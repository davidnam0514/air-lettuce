/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TestchecklistView = Backbone.View.extend({
        template: JST['app/scripts/templates/testChecklist.hbs'],

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return TestchecklistView;
});
