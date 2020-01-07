
namespace AprajitaRetails.CustomTailoring {

    @Serenity.Decorators.registerClass()
    export class TalioringBookingsGrid extends Serenity.EntityGrid<TalioringBookingsRow, any> {
        protected getColumnsKey() { return 'CustomTailoring.TalioringBookings'; }
        protected getDialogType() { return TalioringBookingsDialog; }
        protected getIdProperty() { return TalioringBookingsRow.idProperty; }
        protected getInsertPermission() { return TalioringBookingsRow.insertPermission; }
        protected getLocalTextPrefix() { return TalioringBookingsRow.localTextPrefix; }
        protected getService() { return TalioringBookingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}