
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringStaffAdvancePaymentsDialog extends Serenity.EntityDialog<TailoringStaffAdvancePaymentsRow, any> {
        protected getFormKey() { return TailoringStaffAdvancePaymentsForm.formKey; }
        protected getIdProperty() { return TailoringStaffAdvancePaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return TailoringStaffAdvancePaymentsRow.localTextPrefix; }
        protected getNameProperty() { return TailoringStaffAdvancePaymentsRow.nameProperty; }
        protected getService() { return TailoringStaffAdvancePaymentsService.baseUrl; }
        protected getDeletePermission() { return TailoringStaffAdvancePaymentsRow.deletePermission; }
        protected getInsertPermission() { return TailoringStaffAdvancePaymentsRow.insertPermission; }
        protected getUpdatePermission() { return TailoringStaffAdvancePaymentsRow.updatePermission; }

        protected form = new TailoringStaffAdvancePaymentsForm(this.idPrefix);

    }
}