
namespace AprajitaRetails.Product {

    @Serenity.Decorators.registerClass()
    export class ProductItemsGrid extends Serenity.EntityGrid<ProductItemsRow, any> {
        protected getColumnsKey() { return 'Product.ProductItems'; }
        protected getDialogType() { return ProductItemsDialog; }
        protected getIdProperty() { return ProductItemsRow.idProperty; }
        protected getInsertPermission() { return ProductItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductItemsRow.localTextPrefix; }
        protected getService() { return ProductItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}