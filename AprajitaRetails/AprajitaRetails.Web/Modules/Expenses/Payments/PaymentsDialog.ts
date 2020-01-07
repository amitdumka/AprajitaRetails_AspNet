
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class PaymentsDialog extends Serenity.EntityDialog<PaymentsRow, any> {
        protected getFormKey() { return PaymentsForm.formKey; }
        protected getIdProperty() { return PaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentsRow.localTextPrefix; }
        protected getNameProperty() { return PaymentsRow.nameProperty; }
        protected getService() { return PaymentsService.baseUrl; }
        protected getDeletePermission() { return PaymentsRow.deletePermission; }
        protected getInsertPermission() { return PaymentsRow.insertPermission; }
        protected getUpdatePermission() { return PaymentsRow.updatePermission; }

        protected form = new PaymentsForm(this.idPrefix);

    }
}