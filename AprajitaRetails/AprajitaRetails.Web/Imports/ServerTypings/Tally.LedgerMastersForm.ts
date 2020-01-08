namespace AprajitaRetails.Tally {
    export interface LedgerMastersForm {
        PartyId: Serenity.IntegerEditor;
        CreatingDate: Serenity.DateEditor;
        LedgerType: Serenity.IntegerEditor;
    }

    export class LedgerMastersForm extends Serenity.PrefixedContext {
        static formKey = 'Tally.LedgerMasters';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LedgerMastersForm.init)  {
                LedgerMastersForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(LedgerMastersForm, [
                    'PartyId', w0,
                    'CreatingDate', w1,
                    'LedgerType', w0
                ]);
            }
        }
    }
}
