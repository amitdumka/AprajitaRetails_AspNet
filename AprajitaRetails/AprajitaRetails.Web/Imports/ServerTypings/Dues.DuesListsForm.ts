namespace AprajitaRetails.Dues {
    export interface DuesListsForm {
        Amount: Serenity.DecimalEditor;
        IsRecovered: Serenity.BooleanEditor;
        DailySaleId: Serenity.IntegerEditor;
        RecoveryDate: Serenity.DateEditor;
        IsPartialRecovery: Serenity.BooleanEditor;
    }

    export class DuesListsForm extends Serenity.PrefixedContext {
        static formKey = 'Dues.DuesLists';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DuesListsForm.init)  {
                DuesListsForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(DuesListsForm, [
                    'Amount', w0,
                    'IsRecovered', w1,
                    'DailySaleId', w2,
                    'RecoveryDate', w3,
                    'IsPartialRecovery', w1
                ]);
            }
        }
    }
}
