define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.TransactionModel = Entities.ClearModel.extend({

                urls: {
                    create: config.api.transactionCreate,
                    remove: config.api.transactionRemove,
                    getById: config.api.transactionGetById,
                    edit: config.api.transactionEdit
                },

                idAttribute: '_id',

                defaults: {
                    count: null,
                    tags: [],
                    date: new Date(),
                    comment: ''
                },

                validation: {},

                modelName: 'TransactionModel',

                createTransaction: function(options){

                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        count: model.count,
                        tags: model.tags,
                        date: model.date,
                        comment: model.comment
                    };

                    var defaults = {
                        url: this.urls.create,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.xhr = this.save(null, options);
                    return this.xhr;
                },

                saveTransaction: function(options){
                    options = options || {};
                    var model = this.toJSON();
                    var attrs = null;

                    if(options.data) {
                        model = _.extend(model, options.data);
                        delete options.data;
                    }

                    var data = {
                        _id: model._id,
                        count: model.count,
                        tags: model.tags,
                        date: model.date,
                        comment: model.comment
                    };

                    var defaults = {
                        url: this.urls.edit,
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);

                    if( options.wait ){
                        attrs = data;
                        options.attrs = attrs;
                        delete options.data;
                    }

                    this.xhr = this.save(attrs, options);
                    return this.xhr;
                },

                removeTransaction: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        _id: model._id
                    };

                    var defaults = {
                        url: this.urls.remove,
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.destroy(options);
                    return this.xhr;
                },

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        _id: model._id
                    };
                    var defaults = {
                        url: this.urls.getById,
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });

            Entities.TransactionCollections = Entities.ClearCollection.extend({
                model: Entities.TransactionModel
            });

            var API = {
                getTrasactionModel: function(){
                    return new Entities.TransactionModel();
                },

                getTrasactionCollection: function(){
                    return new Entities.TransactionCollections();
                }
            }

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.Transaction');
                log("Initialized");
            })

            App.reqres.setHandler(config.reqres['transaction:entity'], function(){
                return API.getTrasactionModel();
            });

            App.reqres.setHandler(config.reqres['transaction:collection:entity'], function(){
                return API.getTrasactionCollection();
            });

            //get total transaction (month)
            //get transaction by tag (month)
            //

        }
    })


})