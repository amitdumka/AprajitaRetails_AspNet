
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class PettyCashExpensesDialog extends Serenity.EntityDialog<PettyCashExpensesRow, any> {
        protected getFormKey() { return PettyCashExpensesForm.formKey; }
        protected getIdProperty() { return PettyCashExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return PettyCashExpensesRow.localTextPrefix; }
        protected getNameProperty() { return PettyCashExpensesRow.nameProperty; }
        protected getService() { return PettyCashExpensesService.baseUrl; }
        protected getDeletePermission() { return PettyCashExpensesRow.deletePermission; }
        protected getInsertPermission() { return PettyCashExpensesRow.insertPermission; }
        protected getUpdatePermission() { return PettyCashExpensesRow.updatePermission; }

        protected form = new PettyCashExpensesForm(this.idPrefix);

    }
}