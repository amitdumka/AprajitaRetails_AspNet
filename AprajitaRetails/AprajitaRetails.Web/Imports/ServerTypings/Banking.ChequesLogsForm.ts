namespace AprajitaRetails.Banking {
    export interface ChequesLogsForm {
        BankName: Serenity.StringEditor;
        AccountNumber: Serenity.StringEditor;
        ChequesDate: Serenity.DateEditor;
        DepositDate: Serenity.DateEditor;
        ClearedDate: Serenity.DateEditor;
        IssuedBy: Serenity.StringEditor;
        IssuedTo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        IsPdc: Serenity.BooleanEditor;
        IsIssuedByAprajitaRetails: Serenity.BooleanEditor;
        IsDepositedOnAprajitaRetails: Serenity.BooleanEditor;
        Remarks: Serenity.StringEditor;
    }

    export class ChequesLogsForm extends Serenity.PrefixedContext {
        static formKey = 'Banking.ChequesLogs';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChequesLogsForm.init)  {
                ChequesLogsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ChequesLogsForm, [
                    'BankName', w0,
                    'AccountNumber', w0,
                    'ChequesDate', w1,
                    'DepositDate', w1,
                    'ClearedDate', w1,
                    'IssuedBy', w0,
                    'IssuedTo', w0,
                    'Amount', w2,
                    'IsPdc', w3,
                    'IsIssuedByAprajitaRetails', w3,
                    'IsDepositedOnAprajitaRetails', w3,
                    'Remarks', w0
                ]);
            }
        }
    }
}
