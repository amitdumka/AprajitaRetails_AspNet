
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class SalePaymentDetailsDialog extends Serenity.EntityDialog<SalePaymentDetailsRow, any> {
        protected getFormKey() { return SalePaymentDetailsForm.formKey; }
        protected getIdProperty() { return SalePaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SalePaymentDetailsRow.localTextPrefix; }
        protected getService() { return SalePaymentDetailsService.baseUrl; }
        protected getDeletePermission() { return SalePaymentDetailsRow.deletePermission; }
        protected getInsertPermission() { return SalePaymentDetailsRow.insertPermission; }
        protected getUpdatePermission() { return SalePaymentDetailsRow.updatePermission; }

        protected form = new SalePaymentDetailsForm(this.idPrefix);

    }
}