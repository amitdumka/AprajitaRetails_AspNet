namespace AprajitaRetails.Accounts {
    export interface CashInHandsForm {
        CihDate: Serenity.DateEditor;
        OpenningBalance: Serenity.DecimalEditor;
        ClosingBalance: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
    }

    export class CashInHandsForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.CashInHands';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashInHandsForm.init)  {
                CashInHandsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CashInHandsForm, [
                    'CihDate', w0,
                    'OpenningBalance', w1,
                    'ClosingBalance', w1,
                    'CashIn', w1,
                    'CashOut', w1
                ]);
            }
        }
    }
}
