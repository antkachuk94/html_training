function goHomePage() {
    require(["dijit/registry", "dijit/Dialog"], function(registry) {
        registry.byId("myDialog").show();
    });
}