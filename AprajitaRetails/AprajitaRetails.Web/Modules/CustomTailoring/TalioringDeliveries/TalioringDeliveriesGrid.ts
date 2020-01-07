
namespace AprajitaRetails.CustomTailoring {

    @Serenity.Decorators.registerClass()
    export class TalioringDeliveriesGrid extends Serenity.EntityGrid<TalioringDeliveriesRow, any> {
        protected getColumnsKey() { return 'CustomTailoring.TalioringDeliveries'; }
        protected getDialogType() { return TalioringDeliveriesDialog; }
        protected getIdProperty() { return TalioringDeliveriesRow.idProperty; }
        protected getInsertPermission() { return TalioringDeliveriesRow.insertPermission; }
        protected getLocalTextPrefix() { return TalioringDeliveriesRow.localTextPrefix; }
        protected getService() { return TalioringDeliveriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}