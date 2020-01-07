
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class TranscationModesGrid extends Serenity.EntityGrid<TranscationModesRow, any> {
        protected getColumnsKey() { return 'Accounts.TranscationModes'; }
        protected getDialogType() { return TranscationModesDialog; }
        protected getIdProperty() { return TranscationModesRow.idProperty; }
        protected getInsertPermission() { return TranscationModesRow.insertPermission; }
        protected getLocalTextPrefix() { return TranscationModesRow.localTextPrefix; }
        protected getService() { return TranscationModesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}