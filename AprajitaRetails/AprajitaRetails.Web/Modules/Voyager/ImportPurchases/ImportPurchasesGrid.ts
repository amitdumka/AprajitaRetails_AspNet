
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportPurchasesGrid extends Serenity.EntityGrid<ImportPurchasesRow, any> {
        protected getColumnsKey() { return 'Voyager.ImportPurchases'; }
        protected getDialogType() { return ImportPurchasesDialog; }
        protected getIdProperty() { return ImportPurchasesRow.idProperty; }
        protected getInsertPermission() { return ImportPurchasesRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportPurchasesRow.localTextPrefix; }
        protected getService() { return ImportPurchasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}