
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class DailySalesGrid extends Serenity.EntityGrid<DailySalesRow, any> {
        protected getColumnsKey() { return 'Sales.DailySales'; }
        protected getDialogType() { return DailySalesDialog; }
        protected getIdProperty() { return DailySalesRow.idProperty; }
        protected getInsertPermission() { return DailySalesRow.insertPermission; }
        protected getLocalTextPrefix() { return DailySalesRow.localTextPrefix; }
        protected getService() { return DailySalesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}