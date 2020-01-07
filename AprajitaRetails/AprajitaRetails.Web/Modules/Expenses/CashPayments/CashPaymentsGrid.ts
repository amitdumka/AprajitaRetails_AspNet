
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class CashPaymentsGrid extends Serenity.EntityGrid<CashPaymentsRow, any> {
        protected getColumnsKey() { return 'Expenses.CashPayments'; }
        protected getDialogType() { return CashPaymentsDialog; }
        protected getIdProperty() { return CashPaymentsRow.idProperty; }
        protected getInsertPermission() { return CashPaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return CashPaymentsRow.localTextPrefix; }
        protected getService() { return CashPaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}