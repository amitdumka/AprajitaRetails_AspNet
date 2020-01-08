
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class SaleItemsDialog extends Serenity.EntityDialog<SaleItemsRow, any> {
        protected getFormKey() { return SaleItemsForm.formKey; }
        protected getIdProperty() { return SaleItemsRow.idProperty; }
        protected getLocalTextPrefix() { return SaleItemsRow.localTextPrefix; }
        protected getNameProperty() { return SaleItemsRow.nameProperty; }
        protected getService() { return SaleItemsService.baseUrl; }
        protected getDeletePermission() { return SaleItemsRow.deletePermission; }
        protected getInsertPermission() { return SaleItemsRow.insertPermission; }
        protected getUpdatePermission() { return SaleItemsRow.updatePermission; }

        protected form = new SaleItemsForm(this.idPrefix);

    }
}