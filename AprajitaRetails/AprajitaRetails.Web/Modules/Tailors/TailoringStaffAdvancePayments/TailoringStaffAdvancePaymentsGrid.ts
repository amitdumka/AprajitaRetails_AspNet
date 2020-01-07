
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringStaffAdvancePaymentsGrid extends Serenity.EntityGrid<TailoringStaffAdvancePaymentsRow, any> {
        protected getColumnsKey() { return 'Tailors.TailoringStaffAdvancePayments'; }
        protected getDialogType() { return TailoringStaffAdvancePaymentsDialog; }
        protected getIdProperty() { return TailoringStaffAdvancePaymentsRow.idProperty; }
        protected getInsertPermission() { return TailoringStaffAdvancePaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return TailoringStaffAdvancePaymentsRow.localTextPrefix; }
        protected getService() { return TailoringStaffAdvancePaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}