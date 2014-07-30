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

var notice = App.reqres.request(config.reqres["notice:get"], {
    title: "Delete tag",
    text: "Do you want delete tag?",
    textPrimary: "Delete",
    isCloseAuto: true
});

App.modal.show(notice);