namespace AprajitaRetails.Process {
    export interface EndOfDaysForm {
        EodDate: Serenity.DateEditor;
        Shirting: Serenity.DecimalEditor;
        Suiting: Serenity.DecimalEditor;
        Uspa: Serenity.IntegerEditor;
        FmArrow: Serenity.IntegerEditor;
        Rwt: Serenity.IntegerEditor;
        Access: Serenity.IntegerEditor;
        CashInHand: Serenity.DecimalEditor;
    }

    export class EndOfDaysForm extends Serenity.PrefixedContext {
        static formKey = 'Process.EndOfDays';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EndOfDaysForm.init)  {
                EndOfDaysForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(EndOfDaysForm, [
                    'EodDate', w0,
                    'Shirting', w1,
                    'Suiting', w1,
                    'Uspa', w2,
                    'FmArrow', w2,
                    'Rwt', w2,
                    'Access', w2,
                    'CashInHand', w1
                ]);
            }
        }
    }
}
