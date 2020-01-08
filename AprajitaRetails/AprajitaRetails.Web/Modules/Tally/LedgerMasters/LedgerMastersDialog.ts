
namespace AprajitaRetails.Tally {

    @Serenity.Decorators.registerClass()
    export class LedgerMastersDialog extends Serenity.EntityDialog<LedgerMastersRow, any> {
        protected getFormKey() { return LedgerMastersForm.formKey; }
        protected getIdProperty() { return LedgerMastersRow.idProperty; }
        protected getLocalTextPrefix() { return LedgerMastersRow.localTextPrefix; }
        protected getService() { return LedgerMastersService.baseUrl; }
        protected getDeletePermission() { return LedgerMastersRow.deletePermission; }
        protected getInsertPermission() { return LedgerMastersRow.insertPermission; }
        protected getUpdatePermission() { return LedgerMastersRow.updatePermission; }

        protected form = new LedgerMastersForm(this.idPrefix);

    }
}