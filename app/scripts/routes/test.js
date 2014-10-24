/*global define*/

define([
    'jquery',
    'backbone',
    'views/testIndex',
    'views/testSearch',
    'views/testAddListing',
    'views/testChecklist'
], function ($, Backbone, TestIndexView, TestSearchView, TestAddListingView,
    TestChecklistView) {
    'use strict';

    var TestRouter = Backbone.Router.extend({
        initialize: function() {
            this.bb_el = $('#bb-container');
        },
        routes: {
            '(/)': 'indexStart',
            'search(/)': 'search',
            'addListing(/)': 'addListing',
            'checklist(/)': 'checklist'
        },

        indexStart: function() {
            var self = this;
            new TestIndexView({
                el: self.bb_el
            });
        },

        search: function() {
            var self = this;
            new TestSearchView({
                el: self.bb_el
            });
        },

        addListing: function() {
            var self = this;
            new TestAddListingView({
                el: self.bb_el
            });
        },

        checklist: function() {
            var self = this;
            new TestChecklistView({
                el: this.bb_el
            });
        }

    });

    return TestRouter;
});
