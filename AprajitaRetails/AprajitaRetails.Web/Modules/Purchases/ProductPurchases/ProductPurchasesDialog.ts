
namespace AprajitaRetails.Purchases {

    @Serenity.Decorators.registerClass()
    export class ProductPurchasesDialog extends Serenity.EntityDialog<ProductPurchasesRow, any> {
        protected getFormKey() { return ProductPurchasesForm.formKey; }
        protected getIdProperty() { return ProductPurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return ProductPurchasesRow.localTextPrefix; }
        protected getNameProperty() { return ProductPurchasesRow.nameProperty; }
        protected getService() { return ProductPurchasesService.baseUrl; }
        protected getDeletePermission() { return ProductPurchasesRow.deletePermission; }
        protected getInsertPermission() { return ProductPurchasesRow.insertPermission; }
        protected getUpdatePermission() { return ProductPurchasesRow.updatePermission; }

        protected form = new ProductPurchasesForm(this.idPrefix);

    }
}