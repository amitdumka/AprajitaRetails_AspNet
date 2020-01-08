
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class SaleInvoicesDialog extends Serenity.EntityDialog<SaleInvoicesRow, any> {
        protected getFormKey() { return SaleInvoicesForm.formKey; }
        protected getIdProperty() { return SaleInvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return SaleInvoicesRow.localTextPrefix; }
        protected getNameProperty() { return SaleInvoicesRow.nameProperty; }
        protected getService() { return SaleInvoicesService.baseUrl; }
        protected getDeletePermission() { return SaleInvoicesRow.deletePermission; }
        protected getInsertPermission() { return SaleInvoicesRow.insertPermission; }
        protected getUpdatePermission() { return SaleInvoicesRow.updatePermission; }

        protected form = new SaleInvoicesForm(this.idPrefix);

    }
}