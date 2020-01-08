
namespace AprajitaRetails.Tally {

    @Serenity.Decorators.registerClass()
    export class PartiesGrid extends Serenity.EntityGrid<PartiesRow, any> {
        protected getColumnsKey() { return 'Tally.Parties'; }
        protected getDialogType() { return PartiesDialog; }
        protected getIdProperty() { return PartiesRow.idProperty; }
        protected getInsertPermission() { return PartiesRow.insertPermission; }
        protected getLocalTextPrefix() { return PartiesRow.localTextPrefix; }
        protected getService() { return PartiesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}