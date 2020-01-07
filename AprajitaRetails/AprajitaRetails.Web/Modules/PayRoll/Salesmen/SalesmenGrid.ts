
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class SalesmenGrid extends Serenity.EntityGrid<SalesmenRow, any> {
        protected getColumnsKey() { return 'PayRoll.Salesmen'; }
        protected getDialogType() { return SalesmenDialog; }
        protected getIdProperty() { return SalesmenRow.idProperty; }
        protected getInsertPermission() { return SalesmenRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesmenRow.localTextPrefix; }
        protected getService() { return SalesmenService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}