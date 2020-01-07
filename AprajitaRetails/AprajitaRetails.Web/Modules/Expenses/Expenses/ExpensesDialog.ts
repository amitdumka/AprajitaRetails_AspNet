
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey() { return ExpensesForm.formKey; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getNameProperty() { return ExpensesRow.nameProperty; }
        protected getService() { return ExpensesService.baseUrl; }
        protected getDeletePermission() { return ExpensesRow.deletePermission; }
        protected getInsertPermission() { return ExpensesRow.insertPermission; }
        protected getUpdatePermission() { return ExpensesRow.updatePermission; }

        protected form = new ExpensesForm(this.idPrefix);

    }
}