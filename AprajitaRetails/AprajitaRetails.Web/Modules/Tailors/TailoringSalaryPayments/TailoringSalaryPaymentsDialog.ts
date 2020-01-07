
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringSalaryPaymentsDialog extends Serenity.EntityDialog<TailoringSalaryPaymentsRow, any> {
        protected getFormKey() { return TailoringSalaryPaymentsForm.formKey; }
        protected getIdProperty() { return TailoringSalaryPaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return TailoringSalaryPaymentsRow.localTextPrefix; }
        protected getNameProperty() { return TailoringSalaryPaymentsRow.nameProperty; }
        protected getService() { return TailoringSalaryPaymentsService.baseUrl; }
        protected getDeletePermission() { return TailoringSalaryPaymentsRow.deletePermission; }
        protected getInsertPermission() { return TailoringSalaryPaymentsRow.insertPermission; }
        protected getUpdatePermission() { return TailoringSalaryPaymentsRow.updatePermission; }

        protected form = new TailoringSalaryPaymentsForm(this.idPrefix);

    }
}