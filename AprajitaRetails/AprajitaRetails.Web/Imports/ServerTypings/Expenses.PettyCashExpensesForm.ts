namespace AprajitaRetails.Expenses {
    export interface PettyCashExpensesForm {
        ExpDate: Serenity.DateEditor;
        Particulars: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        EmployeeId: Serenity.IntegerEditor;
        PaidTo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class PettyCashExpensesForm extends Serenity.PrefixedContext {
        static formKey = 'Expenses.PettyCashExpenses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PettyCashExpensesForm.init)  {
                PettyCashExpensesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(PettyCashExpensesForm, [
                    'ExpDate', w0,
                    'Particulars', w1,
                    'Amount', w2,
                    'EmployeeId', w3,
                    'PaidTo', w1,
                    'Remarks', w1
                ]);
            }
        }
    }
}
