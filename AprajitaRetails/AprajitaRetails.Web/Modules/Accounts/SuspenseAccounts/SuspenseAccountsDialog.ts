
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class SuspenseAccountsDialog extends Serenity.EntityDialog<SuspenseAccountsRow, any> {
        protected getFormKey() { return SuspenseAccountsForm.formKey; }
        protected getIdProperty() { return SuspenseAccountsRow.idProperty; }
        protected getLocalTextPrefix() { return SuspenseAccountsRow.localTextPrefix; }
        protected getNameProperty() { return SuspenseAccountsRow.nameProperty; }
        protected getService() { return SuspenseAccountsService.baseUrl; }
        protected getDeletePermission() { return SuspenseAccountsRow.deletePermission; }
        protected getInsertPermission() { return SuspenseAccountsRow.insertPermission; }
        protected getUpdatePermission() { return SuspenseAccountsRow.updatePermission; }

        protected form = new SuspenseAccountsForm(this.idPrefix);

    }
}