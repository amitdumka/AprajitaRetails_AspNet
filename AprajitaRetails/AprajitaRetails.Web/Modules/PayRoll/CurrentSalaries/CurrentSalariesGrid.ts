
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class CurrentSalariesGrid extends Serenity.EntityGrid<CurrentSalariesRow, any> {
        protected getColumnsKey() { return 'PayRoll.CurrentSalaries'; }
        protected getDialogType() { return CurrentSalariesDialog; }
        protected getIdProperty() { return CurrentSalariesRow.idProperty; }
        protected getInsertPermission() { return CurrentSalariesRow.insertPermission; }
        protected getLocalTextPrefix() { return CurrentSalariesRow.localTextPrefix; }
        protected getService() { return CurrentSalariesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}