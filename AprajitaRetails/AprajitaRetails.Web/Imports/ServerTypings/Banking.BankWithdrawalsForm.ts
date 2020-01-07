namespace AprajitaRetails.Banking {
    export interface BankWithdrawalsForm {
        DepoDate: Serenity.DateEditor;
        AccountNumberId: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        ChequeNo: Serenity.StringEditor;
        SignedBy: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        InNameOf: Serenity.StringEditor;
    }

    export class BankWithdrawalsForm extends Serenity.PrefixedContext {
        static formKey = 'Banking.BankWithdrawals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BankWithdrawalsForm.init)  {
                BankWithdrawalsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(BankWithdrawalsForm, [
                    'DepoDate', w0,
                    'AccountNumberId', w1,
                    'Amount', w2,
                    'ChequeNo', w3,
                    'SignedBy', w3,
                    'ApprovedBy', w3,
                    'InNameOf', w3
                ]);
            }
        }
    }
}
