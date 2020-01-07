
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailorAttendancesGrid extends Serenity.EntityGrid<TailorAttendancesRow, any> {
        protected getColumnsKey() { return 'Tailors.TailorAttendances'; }
        protected getDialogType() { return TailorAttendancesDialog; }
        protected getIdProperty() { return TailorAttendancesRow.idProperty; }
        protected getInsertPermission() { return TailorAttendancesRow.insertPermission; }
        protected getLocalTextPrefix() { return TailorAttendancesRow.localTextPrefix; }
        protected getService() { return TailorAttendancesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}