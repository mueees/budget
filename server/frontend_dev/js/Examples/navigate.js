var urlTotal = App.reqres.request("service:url:getTotal");
App.navigate("#funnels/" + this.tabName + "?" + urlTotal.queryString, {trigger: true});