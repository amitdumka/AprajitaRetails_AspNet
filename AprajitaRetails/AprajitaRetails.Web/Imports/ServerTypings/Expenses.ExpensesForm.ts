namespace AprajitaRetails.Expenses {
    export interface ExpensesForm {
        ExpDate: Serenity.DateEditor;
        Particulars: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        PaymentDetails: Serenity.StringEditor;
        EmployeeId: Serenity.IntegerEditor;
        PaidTo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class ExpensesForm extends Serenity.PrefixedContext {
        static formKey = 'Expenses.Expenses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpensesForm.init)  {
                ExpensesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(ExpensesForm, [
                    'ExpDate', w0,
                    'Particulars', w1,
                    'Amount', w2,
                    'PayMode', w3,
                    'PaymentDetails', w1,
                    'EmployeeId', w3,
                    'PaidTo', w1,
                    'Remarks', w1
                ]);
            }
        }
    }
}
