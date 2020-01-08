
namespace AprajitaRetails.Tally {

    @Serenity.Decorators.registerClass()
    export class LedgerEntriesGrid extends Serenity.EntityGrid<LedgerEntriesRow, any> {
        protected getColumnsKey() { return 'Tally.LedgerEntries'; }
        protected getDialogType() { return LedgerEntriesDialog; }
        protected getIdProperty() { return LedgerEntriesRow.idProperty; }
        protected getInsertPermission() { return LedgerEntriesRow.insertPermission; }
        protected getLocalTextPrefix() { return LedgerEntriesRow.localTextPrefix; }
        protected getService() { return LedgerEntriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}