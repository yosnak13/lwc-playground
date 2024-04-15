/**
 * Created by yoshihisanakai on 2024/04/03.
 */

({
    myAction: function (component, event, helper) {
        component.set("v.Columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone"}
        ]);

        let action = component.get("c.getContacts");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function (data) {
            component.set("v.Contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
    }
});