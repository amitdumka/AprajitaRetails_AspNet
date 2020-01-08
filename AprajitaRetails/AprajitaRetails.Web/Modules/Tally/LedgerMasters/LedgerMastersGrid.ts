
namespace AprajitaRetails.Tally {

    @Serenity.Decorators.registerClass()
    export class LedgerMastersGrid extends Serenity.EntityGrid<LedgerMastersRow, any> {
        protected getColumnsKey() { return 'Tally.LedgerMasters'; }
        protected getDialogType() { return LedgerMastersDialog; }
        protected getIdProperty() { return LedgerMastersRow.idProperty; }
        protected getInsertPermission() { return LedgerMastersRow.insertPermission; }
        protected getLocalTextPrefix() { return LedgerMastersRow.localTextPrefix; }
        protected getService() { return LedgerMastersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}