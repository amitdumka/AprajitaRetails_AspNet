
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class SalePaymentDetailsGrid extends Serenity.EntityGrid<SalePaymentDetailsRow, any> {
        protected getColumnsKey() { return 'Sales.SalePaymentDetails'; }
        protected getDialogType() { return SalePaymentDetailsDialog; }
        protected getIdProperty() { return SalePaymentDetailsRow.idProperty; }
        protected getInsertPermission() { return SalePaymentDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return SalePaymentDetailsRow.localTextPrefix; }
        protected getService() { return SalePaymentDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}