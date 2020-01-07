
namespace AprajitaRetails.Process {

    @Serenity.Decorators.registerClass()
    export class MonthEndsGrid extends Serenity.EntityGrid<MonthEndsRow, any> {
        protected getColumnsKey() { return 'Process.MonthEnds'; }
        protected getDialogType() { return MonthEndsDialog; }
        protected getIdProperty() { return MonthEndsRow.idProperty; }
        protected getInsertPermission() { return MonthEndsRow.insertPermission; }
        protected getLocalTextPrefix() { return MonthEndsRow.localTextPrefix; }
        protected getService() { return MonthEndsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}