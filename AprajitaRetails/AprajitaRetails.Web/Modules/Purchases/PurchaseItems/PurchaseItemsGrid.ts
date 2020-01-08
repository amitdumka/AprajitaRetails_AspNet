
namespace AprajitaRetails.Purchases {

    @Serenity.Decorators.registerClass()
    export class PurchaseItemsGrid extends Serenity.EntityGrid<PurchaseItemsRow, any> {
        protected getColumnsKey() { return 'Purchases.PurchaseItems'; }
        protected getDialogType() { return PurchaseItemsDialog; }
        protected getIdProperty() { return PurchaseItemsRow.idProperty; }
        protected getInsertPermission() { return PurchaseItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseItemsRow.localTextPrefix; }
        protected getService() { return PurchaseItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}