
namespace AprajitaRetails.Product {

    @Serenity.Decorators.registerClass()
    export class StocksGrid extends Serenity.EntityGrid<StocksRow, any> {
        protected getColumnsKey() { return 'Product.Stocks'; }
        protected getDialogType() { return StocksDialog; }
        protected getIdProperty() { return StocksRow.idProperty; }
        protected getInsertPermission() { return StocksRow.insertPermission; }
        protected getLocalTextPrefix() { return StocksRow.localTextPrefix; }
        protected getService() { return StocksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}