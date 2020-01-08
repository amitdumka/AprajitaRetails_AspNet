namespace AprajitaRetails.Accounts {
    export interface SaleTaxTypesForm {
        TaxName: Serenity.StringEditor;
        TaxType: Serenity.IntegerEditor;
        CompositeRate: Serenity.DecimalEditor;
    }

    export class SaleTaxTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.SaleTaxTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SaleTaxTypesForm.init)  {
                SaleTaxTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(SaleTaxTypesForm, [
                    'TaxName', w0,
                    'TaxType', w1,
                    'CompositeRate', w2
                ]);
            }
        }
    }
}
