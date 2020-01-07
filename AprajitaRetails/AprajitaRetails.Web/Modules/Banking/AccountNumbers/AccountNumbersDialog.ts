
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class AccountNumbersDialog extends Serenity.EntityDialog<AccountNumbersRow, any> {
        protected getFormKey() { return AccountNumbersForm.formKey; }
        protected getIdProperty() { return AccountNumbersRow.idProperty; }
        protected getLocalTextPrefix() { return AccountNumbersRow.localTextPrefix; }
        protected getNameProperty() { return AccountNumbersRow.nameProperty; }
        protected getService() { return AccountNumbersService.baseUrl; }
        protected getDeletePermission() { return AccountNumbersRow.deletePermission; }
        protected getInsertPermission() { return AccountNumbersRow.insertPermission; }
        protected getUpdatePermission() { return AccountNumbersRow.updatePermission; }

        protected form = new AccountNumbersForm(this.idPrefix);

    }
}