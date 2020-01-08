namespace AprajitaRetails.Accounts {
    export interface PurchaseTaxTypesForm {
        TaxName: Serenity.StringEditor;
        TaxType: Serenity.IntegerEditor;
        CompositeRate: Serenity.DecimalEditor;
    }

    export class PurchaseTaxTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.PurchaseTaxTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseTaxTypesForm.init)  {
                PurchaseTaxTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PurchaseTaxTypesForm, [
                    'TaxName', w0,
                    'TaxType', w1,
                    'CompositeRate', w2
                ]);
            }
        }
    }
}
