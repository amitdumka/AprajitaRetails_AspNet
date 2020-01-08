
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class SaleInvoicesGrid extends Serenity.EntityGrid<SaleInvoicesRow, any> {
        protected getColumnsKey() { return 'Sales.SaleInvoices'; }
        protected getDialogType() { return SaleInvoicesDialog; }
        protected getIdProperty() { return SaleInvoicesRow.idProperty; }
        protected getInsertPermission() { return SaleInvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleInvoicesRow.localTextPrefix; }
        protected getService() { return SaleInvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}