
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class StaffAdvancePaymentsGrid extends Serenity.EntityGrid<StaffAdvancePaymentsRow, any> {
        protected getColumnsKey() { return 'PayRoll.StaffAdvancePayments'; }
        protected getDialogType() { return StaffAdvancePaymentsDialog; }
        protected getIdProperty() { return StaffAdvancePaymentsRow.idProperty; }
        protected getInsertPermission() { return StaffAdvancePaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return StaffAdvancePaymentsRow.localTextPrefix; }
        protected getService() { return StaffAdvancePaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}