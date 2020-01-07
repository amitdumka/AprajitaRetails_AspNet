namespace AprajitaRetails.Expenses {
    export interface CashPaymentsForm {
        PaymentDate: Serenity.DateEditor;
        TranscationModeId: Serenity.IntegerEditor;
        PaidTo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        SlipNo: Serenity.StringEditor;
    }

    export class CashPaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Expenses.CashPayments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashPaymentsForm.init)  {
                CashPaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(CashPaymentsForm, [
                    'PaymentDate', w0,
                    'TranscationModeId', w1,
                    'PaidTo', w2,
                    'Amount', w3,
                    'SlipNo', w2
                ]);
            }
        }
    }
}
