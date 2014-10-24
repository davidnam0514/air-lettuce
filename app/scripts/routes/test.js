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
            new TestIndexView({
                el: this.bb_el
            });
        },

        search: function() {
            new TestSearchView({
                el: this.bb_el
            });
        },

        addListing: function() {
            new TestAddListingView({
                el: this.bb_el
            });
        },

        checklist: function() {
            new TestChecklistView({
                el: this.bb_el
            });
        }

    });

    return TestRouter;
});
