
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class SalaryPaymentsDialog extends Serenity.EntityDialog<SalaryPaymentsRow, any> {
        protected getFormKey() { return SalaryPaymentsForm.formKey; }
        protected getIdProperty() { return SalaryPaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return SalaryPaymentsRow.localTextPrefix; }
        protected getNameProperty() { return SalaryPaymentsRow.nameProperty; }
        protected getService() { return SalaryPaymentsService.baseUrl; }
        protected getDeletePermission() { return SalaryPaymentsRow.deletePermission; }
        protected getInsertPermission() { return SalaryPaymentsRow.insertPermission; }
        protected getUpdatePermission() { return SalaryPaymentsRow.updatePermission; }

        protected form = new SalaryPaymentsForm(this.idPrefix);

    }
}