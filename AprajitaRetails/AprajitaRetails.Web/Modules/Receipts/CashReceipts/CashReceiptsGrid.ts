
namespace AprajitaRetails.Receipts {

    @Serenity.Decorators.registerClass()
    export class CashReceiptsGrid extends Serenity.EntityGrid<CashReceiptsRow, any> {
        protected getColumnsKey() { return 'Receipts.CashReceipts'; }
        protected getDialogType() { return CashReceiptsDialog; }
        protected getIdProperty() { return CashReceiptsRow.idProperty; }
        protected getInsertPermission() { return CashReceiptsRow.insertPermission; }
        protected getLocalTextPrefix() { return CashReceiptsRow.localTextPrefix; }
        protected getService() { return CashReceiptsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}