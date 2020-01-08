
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class PurchaseTaxTypesDialog extends Serenity.EntityDialog<PurchaseTaxTypesRow, any> {
        protected getFormKey() { return PurchaseTaxTypesForm.formKey; }
        protected getIdProperty() { return PurchaseTaxTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseTaxTypesRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseTaxTypesRow.nameProperty; }
        protected getService() { return PurchaseTaxTypesService.baseUrl; }
        protected getDeletePermission() { return PurchaseTaxTypesRow.deletePermission; }
        protected getInsertPermission() { return PurchaseTaxTypesRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseTaxTypesRow.updatePermission; }

        protected form = new PurchaseTaxTypesForm(this.idPrefix);

    }
}