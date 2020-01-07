
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class StaffAdvanceReceiptsGrid extends Serenity.EntityGrid<StaffAdvanceReceiptsRow, any> {
        protected getColumnsKey() { return 'PayRoll.StaffAdvanceReceipts'; }
        protected getDialogType() { return StaffAdvanceReceiptsDialog; }
        protected getIdProperty() { return StaffAdvanceReceiptsRow.idProperty; }
        protected getInsertPermission() { return StaffAdvanceReceiptsRow.insertPermission; }
        protected getLocalTextPrefix() { return StaffAdvanceReceiptsRow.localTextPrefix; }
        protected getService() { return StaffAdvanceReceiptsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}