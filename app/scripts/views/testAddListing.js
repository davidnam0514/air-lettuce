/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TestaddlistingView = Backbone.View.extend({
        template: JST['app/scripts/templates/testAddListing.hbs'],

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return TestaddlistingView;
});
