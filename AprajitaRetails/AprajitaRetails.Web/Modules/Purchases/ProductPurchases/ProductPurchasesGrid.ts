
namespace AprajitaRetails.Purchases {

    @Serenity.Decorators.registerClass()
    export class ProductPurchasesGrid extends Serenity.EntityGrid<ProductPurchasesRow, any> {
        protected getColumnsKey() { return 'Purchases.ProductPurchases'; }
        protected getDialogType() { return ProductPurchasesDialog; }
        protected getIdProperty() { return ProductPurchasesRow.idProperty; }
        protected getInsertPermission() { return ProductPurchasesRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductPurchasesRow.localTextPrefix; }
        protected getService() { return ProductPurchasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}