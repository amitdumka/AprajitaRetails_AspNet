
namespace AprajitaRetails.Purchases {

    @Serenity.Decorators.registerClass()
    export class PurchaseItemsDialog extends Serenity.EntityDialog<PurchaseItemsRow, any> {
        protected getFormKey() { return PurchaseItemsForm.formKey; }
        protected getIdProperty() { return PurchaseItemsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseItemsRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseItemsRow.nameProperty; }
        protected getService() { return PurchaseItemsService.baseUrl; }
        protected getDeletePermission() { return PurchaseItemsRow.deletePermission; }
        protected getInsertPermission() { return PurchaseItemsRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseItemsRow.updatePermission; }

        protected form = new PurchaseItemsForm(this.idPrefix);

    }
}