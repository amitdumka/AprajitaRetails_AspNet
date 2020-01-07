
namespace AprajitaRetails.Process {

    @Serenity.Decorators.registerClass()
    export class EndOfDaysGrid extends Serenity.EntityGrid<EndOfDaysRow, any> {
        protected getColumnsKey() { return 'Process.EndOfDays'; }
        protected getDialogType() { return EndOfDaysDialog; }
        protected getIdProperty() { return EndOfDaysRow.idProperty; }
        protected getInsertPermission() { return EndOfDaysRow.insertPermission; }
        protected getLocalTextPrefix() { return EndOfDaysRow.localTextPrefix; }
        protected getService() { return EndOfDaysService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}