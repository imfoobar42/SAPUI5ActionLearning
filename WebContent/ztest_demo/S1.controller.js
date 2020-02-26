jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast"); 
sap.ui.controller("ztest_demo.S1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ztest_demo.S1
*/
//	onInit: function() {
//
//	},
	
	onSubmit: function(){
		this.getView().byId("iEmp").setVisible(true);
		this.getView().byId("idFirst").setVisible(true);
		this.getView().byId("idLast").setVisible(true);
		this.getView().byId("idGrade").setVisible(true);
		this.getView().byId("idEmail").setVisible(true);
		this.getView().byId("idContact").setVisible(true);	
	},
	
	onCancel: function(){
		this.getView().byId("iEmp").setVisible(false);
		this.getView().byId("idFirst").setVisible(false);
		this.getView().byId("idLast").setVisible(false);
		this.getView().byId("idGrade").setVisible(false);
		this.getView().byId("idEmail").setVisible(false);
		this.getView().byId("idContact").setVisible(false);	
	},
	
	
	
/*	onSubmit: function () {
		var iEmp = this.getView().byId("iEmp").getValue();
		var idFirst = this.getView().byId("idFirst").getValue();
		var idLast = this.getView().byId("idLast").getValue();
		var idGrade = this.getView().byId("idGrade").getValue();
		var idEmail = this.getView().byId("idEmail").getValue();
		var idContact = this.getView().byId("idContact").getValue();
		
		
		if(this.getView().byId("iEmp").getValue() === ""){
			sap.m.MessageBox.show("Please Enter the Valid Emp id", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
		else if(idFirst === ""){
			sap.m.MessageBox.show("Please Enter the Valid First Name", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
		else if(idLast === ""){
			sap.m.MessageBox.show("Please Enter the Valid Last Name", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
		else if(idGrade === ""){
			sap.m.MessageBox.show("Please Enter the Valid Grade", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
		else if(idEmail === ""){
			sap.m.MessageBox.show("Please Enter the Valid Email", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
		else if(idContact === ""){
			sap.m.MessageBox.show("Please Enter the Valid Contact", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
		else{
			sap.m.MessageBox.show("Please Enter the Valid Values", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
	},
*/		
		
		//	MessageToast.show(idFirst);	
		//	MessageBox.show(idLast);
		//this.onAddition();
		
	
	
	
	onLiveChange: function(oEvent){
		var regex = /^[0-9]*$/;
		var oValue = oEvent.getParameter("newValue") 
		if(regex.test(oValue) == false){
			sap.m.MessageBox.show("Please Enter the Valid Values", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			
			});
			this.getView().byId("iEmp").setValue();
		}
		
		return; 
	},
	
	onNewChange: function(oEvent){
		var regex = /^[a-zA-Z]*$/;
		var oValue = oEvent.getParameter("newValue");
		if(regex.test(oValue) == false){
			sap.m.MessageBox.show("Please Enter the Valid Values", {
				title: "Warning",
				icon: sap.m.MessageBox.Icon.ERROR,
				actions: [sap.m.MessageBox.Action.OK]
			});
			this.getView().byId("idFirst").setValue();
			this.getView().byId("idLast").setValue();
		}
		
		return; 
	}
	
	
	
//	
//	onChange: function(onEvent){
//		var regex = /^[0-9]*$/;
//		if(onEvent.getParameter("newValue") === "" ){
//			
//		}} // || !oEvent.getParameter("newValue").test(regex)){
////          //this.setValueState(sap.ui.core.ValueState.Error);
//}
//else{
//         this.setValueState(sap.ui.core.ValueState.Success);
//}
	 
//	onLiveChange : function(oEvent){
//		regex = /^[0-9]*$/;
//		 if(oEvent.getParameter("newValue") === "" 
//             || !oEvent.getParameter("newValue").match(regex)){
//           this.setValueState(sap.ui.core.ValueState.Error);
//}
//else{
//          this.setValueState(sap.ui.core.ValueState.Success);
//}
//	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ztest_demo.S1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ztest_demo.S1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ztest_demo.S1
*/
//	onExit: function() {
//
//	}

});