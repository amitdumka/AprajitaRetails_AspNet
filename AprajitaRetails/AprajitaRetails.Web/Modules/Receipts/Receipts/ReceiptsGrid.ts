
namespace AprajitaRetails.Receipts {

    @Serenity.Decorators.registerClass()
    export class ReceiptsGrid extends Serenity.EntityGrid<ReceiptsRow, any> {
        protected getColumnsKey() { return 'Receipts.Receipts'; }
        protected getDialogType() { return ReceiptsDialog; }
        protected getIdProperty() { return ReceiptsRow.idProperty; }
        protected getInsertPermission() { return ReceiptsRow.insertPermission; }
        protected getLocalTextPrefix() { return ReceiptsRow.localTextPrefix; }
        protected getService() { return ReceiptsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}