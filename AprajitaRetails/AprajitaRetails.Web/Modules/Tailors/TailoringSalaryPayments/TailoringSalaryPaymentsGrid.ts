
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringSalaryPaymentsGrid extends Serenity.EntityGrid<TailoringSalaryPaymentsRow, any> {
        protected getColumnsKey() { return 'Tailors.TailoringSalaryPayments'; }
        protected getDialogType() { return TailoringSalaryPaymentsDialog; }
        protected getIdProperty() { return TailoringSalaryPaymentsRow.idProperty; }
        protected getInsertPermission() { return TailoringSalaryPaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return TailoringSalaryPaymentsRow.localTextPrefix; }
        protected getService() { return TailoringSalaryPaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}