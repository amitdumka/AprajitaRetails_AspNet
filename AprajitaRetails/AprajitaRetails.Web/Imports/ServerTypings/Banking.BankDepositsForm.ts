namespace AprajitaRetails.Banking {
    export interface BankDepositsForm {
        DepoDate: Serenity.DateEditor;
        AccountNumberId: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class BankDepositsForm extends Serenity.PrefixedContext {
        static formKey = 'Banking.BankDeposits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BankDepositsForm.init)  {
                BankDepositsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(BankDepositsForm, [
                    'DepoDate', w0,
                    'AccountNumberId', w1,
                    'Amount', w2,
                    'PayMode', w1,
                    'Details', w3,
                    'Remarks', w3
                ]);
            }
        }
    }
}
