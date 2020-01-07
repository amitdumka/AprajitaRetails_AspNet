
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class CashInBanksDialog extends Serenity.EntityDialog<CashInBanksRow, any> {
        protected getFormKey() { return CashInBanksForm.formKey; }
        protected getIdProperty() { return CashInBanksRow.idProperty; }
        protected getLocalTextPrefix() { return CashInBanksRow.localTextPrefix; }
        protected getService() { return CashInBanksService.baseUrl; }
        protected getDeletePermission() { return CashInBanksRow.deletePermission; }
        protected getInsertPermission() { return CashInBanksRow.insertPermission; }
        protected getUpdatePermission() { return CashInBanksRow.updatePermission; }

        protected form = new CashInBanksForm(this.idPrefix);

    }
}