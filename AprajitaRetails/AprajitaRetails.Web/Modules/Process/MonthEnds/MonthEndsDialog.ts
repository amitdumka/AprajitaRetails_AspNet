
namespace AprajitaRetails.Process {

    @Serenity.Decorators.registerClass()
    export class MonthEndsDialog extends Serenity.EntityDialog<MonthEndsRow, any> {
        protected getFormKey() { return MonthEndsForm.formKey; }
        protected getIdProperty() { return MonthEndsRow.idProperty; }
        protected getLocalTextPrefix() { return MonthEndsRow.localTextPrefix; }
        protected getService() { return MonthEndsService.baseUrl; }
        protected getDeletePermission() { return MonthEndsRow.deletePermission; }
        protected getInsertPermission() { return MonthEndsRow.insertPermission; }
        protected getUpdatePermission() { return MonthEndsRow.updatePermission; }

        protected form = new MonthEndsForm(this.idPrefix);

    }
}