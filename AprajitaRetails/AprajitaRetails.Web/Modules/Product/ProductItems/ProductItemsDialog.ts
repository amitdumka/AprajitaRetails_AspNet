
namespace AprajitaRetails.Product {

    @Serenity.Decorators.registerClass()
    export class ProductItemsDialog extends Serenity.EntityDialog<ProductItemsRow, any> {
        protected getFormKey() { return ProductItemsForm.formKey; }
        protected getIdProperty() { return ProductItemsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductItemsRow.localTextPrefix; }
        protected getNameProperty() { return ProductItemsRow.nameProperty; }
        protected getService() { return ProductItemsService.baseUrl; }
        protected getDeletePermission() { return ProductItemsRow.deletePermission; }
        protected getInsertPermission() { return ProductItemsRow.insertPermission; }
        protected getUpdatePermission() { return ProductItemsRow.updatePermission; }

        protected form = new ProductItemsForm(this.idPrefix);

    }
}