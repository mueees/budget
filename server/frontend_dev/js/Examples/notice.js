var notice = App.reqres.request(config.reqres["notice:get"], {
    type: "fill",
    status: "alert",
    icon: "alertColor",
    title: "You are going to delete event from your reports",
    text: "Are you sure want to delete </br ><strong>'" + model.get('filter_name') + "'</strong></br > from reports",

    firstBtnText: "Cancel",
    classFirstBtn: "button color-btn-grey size-btn-big decline",

    showSecondBtn: true,
    secondBtnText: "Delete",
    classSecondBtn: "button color-btn-orange accept",

    stayOverlay: true

});
App.modalSecond.setModalOptions({backdrop: false})