namespace AprajitaRetails.Accounts {
    export interface CashInBanksForm {
        CibDate: Serenity.DateEditor;
        OpenningBalance: Serenity.DecimalEditor;
        ClosingBalance: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
    }

    export class CashInBanksForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.CashInBanks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashInBanksForm.init)  {
                CashInBanksForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CashInBanksForm, [
                    'CibDate', w0,
                    'OpenningBalance', w1,
                    'ClosingBalance', w1,
                    'CashIn', w1,
                    'CashOut', w1
                ]);
            }
        }
    }
}
