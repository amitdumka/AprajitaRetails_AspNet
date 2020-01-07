
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class BankWithdrawalsDialog extends Serenity.EntityDialog<BankWithdrawalsRow, any> {
        protected getFormKey() { return BankWithdrawalsForm.formKey; }
        protected getIdProperty() { return BankWithdrawalsRow.idProperty; }
        protected getLocalTextPrefix() { return BankWithdrawalsRow.localTextPrefix; }
        protected getNameProperty() { return BankWithdrawalsRow.nameProperty; }
        protected getService() { return BankWithdrawalsService.baseUrl; }
        protected getDeletePermission() { return BankWithdrawalsRow.deletePermission; }
        protected getInsertPermission() { return BankWithdrawalsRow.insertPermission; }
        protected getUpdatePermission() { return BankWithdrawalsRow.updatePermission; }

        protected form = new BankWithdrawalsForm(this.idPrefix);

    }
}