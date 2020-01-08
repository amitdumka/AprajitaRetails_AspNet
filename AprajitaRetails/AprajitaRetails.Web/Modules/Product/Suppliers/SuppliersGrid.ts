
namespace AprajitaRetails.Product {

    @Serenity.Decorators.registerClass()
    export class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey() { return 'Product.Suppliers'; }
        protected getDialogType() { return SuppliersDialog; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getInsertPermission() { return SuppliersRow.insertPermission; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getService() { return SuppliersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}