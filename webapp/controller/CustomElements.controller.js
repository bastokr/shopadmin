sap.ui.define(["./BaseController", "../model/CustomElementNavigationModel"], function (BaseController, CustomElementsNavigationModel) {
    "use strict";

    return BaseController.extend("sap.ui.demo.toolpageapp.controller.CustomElements", {
        /**
         * Called when the controller is instantiated.
         */
        onInit: function () {
            BaseController.prototype.onInit.call(this);
            this.getRouter().getRoute("customElements").attachMatched(this._onRouteMatched, this);
        },

        getxNavigationModel: async function () {
            return await CustomElementsNavigationModel.init();
        },

        getTopicUrl: function () {
            return "/customElements/";
        }
    });
});