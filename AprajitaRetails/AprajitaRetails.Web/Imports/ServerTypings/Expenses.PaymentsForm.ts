namespace AprajitaRetails.Expenses {
    export interface PaymentsForm {
        PayDate: Serenity.DateEditor;
        PaymentPartry: Serenity.StringEditor;
        PayMode: Serenity.IntegerEditor;
        PaymentDetails: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        PaymentSlipNo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class PaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Expenses.Payments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentsForm.init)  {
                PaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(PaymentsForm, [
                    'PayDate', w0,
                    'PaymentPartry', w1,
                    'PayMode', w2,
                    'PaymentDetails', w1,
                    'Amount', w3,
                    'PaymentSlipNo', w1,
                    'Remarks', w1
                ]);
            }
        }
    }
}
