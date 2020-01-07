namespace AprajitaRetails.Dues {
    export interface DueRecoverdsForm {
        PaidDate: Serenity.DateEditor;
        DuesListId: Serenity.IntegerEditor;
        AmountPaid: Serenity.DecimalEditor;
        IsPartialPayment: Serenity.BooleanEditor;
        Modes: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }

    export class DueRecoverdsForm extends Serenity.PrefixedContext {
        static formKey = 'Dues.DueRecoverds';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DueRecoverdsForm.init)  {
                DueRecoverdsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.StringEditor;

                Q.initFormType(DueRecoverdsForm, [
                    'PaidDate', w0,
                    'DuesListId', w1,
                    'AmountPaid', w2,
                    'IsPartialPayment', w3,
                    'Modes', w1,
                    'Remarks', w4
                ]);
            }
        }
    }
}
