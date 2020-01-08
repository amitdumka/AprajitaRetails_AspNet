
namespace AprajitaRetails.Tally {

    @Serenity.Decorators.registerClass()
    export class LedgerEntriesDialog extends Serenity.EntityDialog<LedgerEntriesRow, any> {
        protected getFormKey() { return LedgerEntriesForm.formKey; }
        protected getIdProperty() { return LedgerEntriesRow.idProperty; }
        protected getLocalTextPrefix() { return LedgerEntriesRow.localTextPrefix; }
        protected getNameProperty() { return LedgerEntriesRow.nameProperty; }
        protected getService() { return LedgerEntriesService.baseUrl; }
        protected getDeletePermission() { return LedgerEntriesRow.deletePermission; }
        protected getInsertPermission() { return LedgerEntriesRow.insertPermission; }
        protected getUpdatePermission() { return LedgerEntriesRow.updatePermission; }

        protected form = new LedgerEntriesForm(this.idPrefix);

    }
}