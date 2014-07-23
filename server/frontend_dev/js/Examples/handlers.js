/*base*/
this.vent = new Backbone.Wreqr.EventAggregator();
this.commands = new Backbone.Wreqr.Commands();
this.reqres = new Backbone.Wreqr.RequestResponse();


App.reqres.setHandler(config.reqres['service:url:getTotal'], function(){
    return controller.getTotal();
})
App.reqres.request("foo");
App.reqres.request("version:getCurrentVersion");


App.commands.setHandler("mail:categories", arg1, arg2);
App.execute('setActiveMenu', 'Event');


App.execute(config.commands["raven:send:message"], '401', options);
App.execute(config.commands['notify:showNotify:side'], {text: 'Funnel was created.'});