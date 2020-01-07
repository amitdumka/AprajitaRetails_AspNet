
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class StaffAdvancePaymentsDialog extends Serenity.EntityDialog<StaffAdvancePaymentsRow, any> {
        protected getFormKey() { return StaffAdvancePaymentsForm.formKey; }
        protected getIdProperty() { return StaffAdvancePaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return StaffAdvancePaymentsRow.localTextPrefix; }
        protected getNameProperty() { return StaffAdvancePaymentsRow.nameProperty; }
        protected getService() { return StaffAdvancePaymentsService.baseUrl; }
        protected getDeletePermission() { return StaffAdvancePaymentsRow.deletePermission; }
        protected getInsertPermission() { return StaffAdvancePaymentsRow.insertPermission; }
        protected getUpdatePermission() { return StaffAdvancePaymentsRow.updatePermission; }

        protected form = new StaffAdvancePaymentsForm(this.idPrefix);

    }
}