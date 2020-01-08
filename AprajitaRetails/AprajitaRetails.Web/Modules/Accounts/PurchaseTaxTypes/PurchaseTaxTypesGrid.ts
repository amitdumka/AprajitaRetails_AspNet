
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class PurchaseTaxTypesGrid extends Serenity.EntityGrid<PurchaseTaxTypesRow, any> {
        protected getColumnsKey() { return 'Accounts.PurchaseTaxTypes'; }
        protected getDialogType() { return PurchaseTaxTypesDialog; }
        protected getIdProperty() { return PurchaseTaxTypesRow.idProperty; }
        protected getInsertPermission() { return PurchaseTaxTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseTaxTypesRow.localTextPrefix; }
        protected getService() { return PurchaseTaxTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}