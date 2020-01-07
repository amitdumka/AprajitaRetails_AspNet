
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class AttendancesGrid extends Serenity.EntityGrid<AttendancesRow, any> {
        protected getColumnsKey() { return 'PayRoll.Attendances'; }
        protected getDialogType() { return AttendancesDialog; }
        protected getIdProperty() { return AttendancesRow.idProperty; }
        protected getInsertPermission() { return AttendancesRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendancesRow.localTextPrefix; }
        protected getService() { return AttendancesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}