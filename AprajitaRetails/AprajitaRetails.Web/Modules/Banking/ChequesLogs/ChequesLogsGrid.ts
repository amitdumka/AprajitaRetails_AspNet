
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class ChequesLogsGrid extends Serenity.EntityGrid<ChequesLogsRow, any> {
        protected getColumnsKey() { return 'Banking.ChequesLogs'; }
        protected getDialogType() { return ChequesLogsDialog; }
        protected getIdProperty() { return ChequesLogsRow.idProperty; }
        protected getInsertPermission() { return ChequesLogsRow.insertPermission; }
        protected getLocalTextPrefix() { return ChequesLogsRow.localTextPrefix; }
        protected getService() { return ChequesLogsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}