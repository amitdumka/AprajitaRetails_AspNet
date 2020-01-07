
namespace AprajitaRetails.Receipts {

    @Serenity.Decorators.registerClass()
    export class ReceiptsDialog extends Serenity.EntityDialog<ReceiptsRow, any> {
        protected getFormKey() { return ReceiptsForm.formKey; }
        protected getIdProperty() { return ReceiptsRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiptsRow.localTextPrefix; }
        protected getNameProperty() { return ReceiptsRow.nameProperty; }
        protected getService() { return ReceiptsService.baseUrl; }
        protected getDeletePermission() { return ReceiptsRow.deletePermission; }
        protected getInsertPermission() { return ReceiptsRow.insertPermission; }
        protected getUpdatePermission() { return ReceiptsRow.updatePermission; }

        protected form = new ReceiptsForm(this.idPrefix);

    }
}