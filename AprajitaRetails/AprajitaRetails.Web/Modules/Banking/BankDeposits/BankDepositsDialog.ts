
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class BankDepositsDialog extends Serenity.EntityDialog<BankDepositsRow, any> {
        protected getFormKey() { return BankDepositsForm.formKey; }
        protected getIdProperty() { return BankDepositsRow.idProperty; }
        protected getLocalTextPrefix() { return BankDepositsRow.localTextPrefix; }
        protected getNameProperty() { return BankDepositsRow.nameProperty; }
        protected getService() { return BankDepositsService.baseUrl; }
        protected getDeletePermission() { return BankDepositsRow.deletePermission; }
        protected getInsertPermission() { return BankDepositsRow.insertPermission; }
        protected getUpdatePermission() { return BankDepositsRow.updatePermission; }

        protected form = new BankDepositsForm(this.idPrefix);

    }
}