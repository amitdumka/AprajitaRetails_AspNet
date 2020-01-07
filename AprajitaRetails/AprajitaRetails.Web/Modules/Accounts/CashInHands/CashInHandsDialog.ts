
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class CashInHandsDialog extends Serenity.EntityDialog<CashInHandsRow, any> {
        protected getFormKey() { return CashInHandsForm.formKey; }
        protected getIdProperty() { return CashInHandsRow.idProperty; }
        protected getLocalTextPrefix() { return CashInHandsRow.localTextPrefix; }
        protected getService() { return CashInHandsService.baseUrl; }
        protected getDeletePermission() { return CashInHandsRow.deletePermission; }
        protected getInsertPermission() { return CashInHandsRow.insertPermission; }
        protected getUpdatePermission() { return CashInHandsRow.updatePermission; }

        protected form = new CashInHandsForm(this.idPrefix);

    }
}