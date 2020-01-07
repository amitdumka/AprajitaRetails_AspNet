namespace AprajitaRetails.Accounts {
    export interface SuspenseAccountsForm {
        EntryDate: Serenity.DateEditor;
        ReferanceDetails: Serenity.StringEditor;
        InAmount: Serenity.DecimalEditor;
        OutAmount: Serenity.DecimalEditor;
        IsCleared: Serenity.BooleanEditor;
        ClearedDetails: Serenity.StringEditor;
        ReviewBy: Serenity.StringEditor;
    }

    export class SuspenseAccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.SuspenseAccounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuspenseAccountsForm.init)  {
                SuspenseAccountsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(SuspenseAccountsForm, [
                    'EntryDate', w0,
                    'ReferanceDetails', w1,
                    'InAmount', w2,
                    'OutAmount', w2,
                    'IsCleared', w3,
                    'ClearedDetails', w1,
                    'ReviewBy', w1
                ]);
            }
        }
    }
}
