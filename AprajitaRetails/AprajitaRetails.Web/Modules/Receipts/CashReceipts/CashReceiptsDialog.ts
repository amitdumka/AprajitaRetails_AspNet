
namespace AprajitaRetails.Receipts {

    @Serenity.Decorators.registerClass()
    export class CashReceiptsDialog extends Serenity.EntityDialog<CashReceiptsRow, any> {
        protected getFormKey() { return CashReceiptsForm.formKey; }
        protected getIdProperty() { return CashReceiptsRow.idProperty; }
        protected getLocalTextPrefix() { return CashReceiptsRow.localTextPrefix; }
        protected getNameProperty() { return CashReceiptsRow.nameProperty; }
        protected getService() { return CashReceiptsService.baseUrl; }
        protected getDeletePermission() { return CashReceiptsRow.deletePermission; }
        protected getInsertPermission() { return CashReceiptsRow.insertPermission; }
        protected getUpdatePermission() { return CashReceiptsRow.updatePermission; }

        protected form = new CashReceiptsForm(this.idPrefix);

    }
}