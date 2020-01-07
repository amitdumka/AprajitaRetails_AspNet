
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringStaffAdvanceReceiptsGrid extends Serenity.EntityGrid<TailoringStaffAdvanceReceiptsRow, any> {
        protected getColumnsKey() { return 'Tailors.TailoringStaffAdvanceReceipts'; }
        protected getDialogType() { return TailoringStaffAdvanceReceiptsDialog; }
        protected getIdProperty() { return TailoringStaffAdvanceReceiptsRow.idProperty; }
        protected getInsertPermission() { return TailoringStaffAdvanceReceiptsRow.insertPermission; }
        protected getLocalTextPrefix() { return TailoringStaffAdvanceReceiptsRow.localTextPrefix; }
        protected getService() { return TailoringStaffAdvanceReceiptsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}