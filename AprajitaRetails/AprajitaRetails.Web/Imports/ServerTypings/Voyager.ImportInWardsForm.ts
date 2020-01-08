namespace AprajitaRetails.Voyager {
    export interface ImportInWardsForm {
        InWardNo: Serenity.StringEditor;
        InWardDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        PartyName: Serenity.StringEditor;
        TotalQty: Serenity.DecimalEditor;
        TotalMrpValue: Serenity.DecimalEditor;
        TotalCost: Serenity.DecimalEditor;
        ImportDate: Serenity.DateEditor;
    }

    export class ImportInWardsForm extends Serenity.PrefixedContext {
        static formKey = 'Voyager.ImportInWards';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportInWardsForm.init)  {
                ImportInWardsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ImportInWardsForm, [
                    'InWardNo', w0,
                    'InWardDate', w1,
                    'InvoiceNo', w0,
                    'InvoiceDate', w1,
                    'PartyName', w0,
                    'TotalQty', w2,
                    'TotalMrpValue', w2,
                    'TotalCost', w2,
                    'ImportDate', w1
                ]);
            }
        }
    }
}
