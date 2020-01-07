
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class CashPaymentsDialog extends Serenity.EntityDialog<CashPaymentsRow, any> {
        protected getFormKey() { return CashPaymentsForm.formKey; }
        protected getIdProperty() { return CashPaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return CashPaymentsRow.localTextPrefix; }
        protected getNameProperty() { return CashPaymentsRow.nameProperty; }
        protected getService() { return CashPaymentsService.baseUrl; }
        protected getDeletePermission() { return CashPaymentsRow.deletePermission; }
        protected getInsertPermission() { return CashPaymentsRow.insertPermission; }
        protected getUpdatePermission() { return CashPaymentsRow.updatePermission; }

        protected form = new CashPaymentsForm(this.idPrefix);

    }
}