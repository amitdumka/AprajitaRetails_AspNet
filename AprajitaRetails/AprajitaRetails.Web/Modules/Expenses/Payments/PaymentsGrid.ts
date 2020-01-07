
namespace AprajitaRetails.Expenses {

    @Serenity.Decorators.registerClass()
    export class PaymentsGrid extends Serenity.EntityGrid<PaymentsRow, any> {
        protected getColumnsKey() { return 'Expenses.Payments'; }
        protected getDialogType() { return PaymentsDialog; }
        protected getIdProperty() { return PaymentsRow.idProperty; }
        protected getInsertPermission() { return PaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return PaymentsRow.localTextPrefix; }
        protected getService() { return PaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}