define([
    'marionette',
    'text!../templates/TotalByTagTemp.html',
    '../../../base/views/BaseView',
    'morris'
], function(Marionette, template, BaseView){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){
            BaseView.prototype.initialize.apply(this, arguments);
        },

        dataHandler: function(){
            this.render();
            this.onShow();
        },

        onShow: function(){

            var model = this.model.toJSON();

            var _this = this;

            Morris.Bar({
                element: _this.$el.find('.chart')[0],
                data: _this.getDataForChart(),
                xkey: 'tagName',
                ykeys: ['count'],
                labels: ['Tag'],
                barColors: ['#93bb25'],
                hideHover: 'always'
            });

        },

        getDataForChart: function(){
            var data = this.model.get('data');
            var result = [];

            _.each(data, function(row){
                result.push({
                    count: row.count,
                    tagName: row.tagName || '-'
                })
            })

            return result;
        },

        onClose: function(){}

    });
})