
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class PettyCashExpensesGrid extends Serenity.EntityGrid<PettyCashExpensesRow, any> {
        protected getColumnsKey() { return 'Expenses.PettyCashExpenses'; }
        protected getDialogType() { return PettyCashExpensesDialog; }
        protected getIdProperty() { return PettyCashExpensesRow.idProperty; }
        protected getInsertPermission() { return PettyCashExpensesRow.insertPermission; }
        protected getLocalTextPrefix() { return PettyCashExpensesRow.localTextPrefix; }
        protected getService() { return PettyCashExpensesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}