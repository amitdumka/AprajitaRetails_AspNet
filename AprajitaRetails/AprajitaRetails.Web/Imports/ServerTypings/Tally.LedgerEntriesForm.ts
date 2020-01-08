namespace AprajitaRetails.Tally {
    export interface LedgerEntriesForm {
        PartyId: Serenity.IntegerEditor;
        EntryDate: Serenity.DateEditor;
        Particulars: Serenity.StringEditor;
        AmountIn: Serenity.DecimalEditor;
        AmountOut: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
    }

    export class LedgerEntriesForm extends Serenity.PrefixedContext {
        static formKey = 'Tally.LedgerEntries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LedgerEntriesForm.init)  {
                LedgerEntriesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(LedgerEntriesForm, [
                    'PartyId', w0,
                    'EntryDate', w1,
                    'Particulars', w2,
                    'AmountIn', w3,
                    'AmountOut', w3,
                    'Balance', w3
                ]);
            }
        }
    }
}
