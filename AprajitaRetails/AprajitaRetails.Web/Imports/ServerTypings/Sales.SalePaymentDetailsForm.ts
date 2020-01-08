namespace AprajitaRetails.Sales {
    export interface SalePaymentDetailsForm {
        PayMode: Serenity.IntegerEditor;
        CashAmount: Serenity.DecimalEditor;
        CardAmount: Serenity.DecimalEditor;
        MixAmount: Serenity.DecimalEditor;
    }

    export class SalePaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SalePaymentDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalePaymentDetailsForm.init)  {
                SalePaymentDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(SalePaymentDetailsForm, [
                    'PayMode', w0,
                    'CashAmount', w1,
                    'CardAmount', w1,
                    'MixAmount', w1
                ]);
            }
        }
    }
}
