
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class SaleItemsGrid extends Serenity.EntityGrid<SaleItemsRow, any> {
        protected getColumnsKey() { return 'Sales.SaleItems'; }
        protected getDialogType() { return SaleItemsDialog; }
        protected getIdProperty() { return SaleItemsRow.idProperty; }
        protected getInsertPermission() { return SaleItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleItemsRow.localTextPrefix; }
        protected getService() { return SaleItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}