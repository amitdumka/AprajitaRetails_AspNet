namespace AprajitaRetails.Banking {
    export interface AccountNumbersForm {
        BankId: Serenity.IntegerEditor;
        Account: Serenity.StringEditor;
    }

    export class AccountNumbersForm extends Serenity.PrefixedContext {
        static formKey = 'Banking.AccountNumbers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountNumbersForm.init)  {
                AccountNumbersForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(AccountNumbersForm, [
                    'BankId', w0,
                    'Account', w1
                ]);
            }
        }
    }
}
