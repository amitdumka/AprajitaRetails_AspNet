
namespace AprajitaRetails.Product {

    @Serenity.Decorators.registerClass()
    export class BrandsGrid extends Serenity.EntityGrid<BrandsRow, any> {
        protected getColumnsKey() { return 'Product.Brands'; }
        protected getDialogType() { return BrandsDialog; }
        protected getIdProperty() { return BrandsRow.idProperty; }
        protected getInsertPermission() { return BrandsRow.insertPermission; }
        protected getLocalTextPrefix() { return BrandsRow.localTextPrefix; }
        protected getService() { return BrandsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}