namespace AprajitaRetails.Process {
    export interface MonthEndsForm {
        EntryDate: Serenity.DateEditor;
        Month: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        TotalBill: Serenity.DecimalEditor;
        TotalFabric: Serenity.DecimalEditor;
        TotalRmz: Serenity.DecimalEditor;
        TotalAccess: Serenity.DecimalEditor;
        TotalOthers: Serenity.DecimalEditor;
        TotalAmountFabric: Serenity.DecimalEditor;
        TotalAmountRmz: Serenity.DecimalEditor;
        TotalAmountAccess: Serenity.DecimalEditor;
        TotalAmountOthers: Serenity.DecimalEditor;
        TotalSaleIncome: Serenity.DecimalEditor;
        TotalTailoringIncome: Serenity.DecimalEditor;
        TotalOtherIncome: Serenity.DecimalEditor;
        TotalInward: Serenity.DecimalEditor;
        TotalInwardByAmitKumar: Serenity.DecimalEditor;
        TotalInwardOthers: Serenity.DecimalEditor;
        TotalDues: Serenity.DecimalEditor;
        TotalDuesOfMonth: Serenity.DecimalEditor;
        TotalDuesRecovered: Serenity.DecimalEditor;
        TotalExpenses: Serenity.DecimalEditor;
        TotalOnBookExpenes: Serenity.DecimalEditor;
        TotalCashExpenses: Serenity.DecimalEditor;
        TotalSalary: Serenity.DecimalEditor;
        TotalTailoringExpenses: Serenity.DecimalEditor;
        TotalTrimsAndOtherExpenses: Serenity.DecimalEditor;
        TotalHomeExpenses: Serenity.DecimalEditor;
        TotalOtherHomeExpenses: Serenity.DecimalEditor;
        TotalOtherExpenses: Serenity.DecimalEditor;
        TotalPayments: Serenity.DecimalEditor;
        TotalRecipts: Serenity.DecimalEditor;
    }

    export class MonthEndsForm extends Serenity.PrefixedContext {
        static formKey = 'Process.MonthEnds';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MonthEndsForm.init)  {
                MonthEndsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(MonthEndsForm, [
                    'EntryDate', w0,
                    'Month', w1,
                    'Year', w1,
                    'TotalBill', w2,
                    'TotalFabric', w2,
                    'TotalRmz', w2,
                    'TotalAccess', w2,
                    'TotalOthers', w2,
                    'TotalAmountFabric', w2,
                    'TotalAmountRmz', w2,
                    'TotalAmountAccess', w2,
                    'TotalAmountOthers', w2,
                    'TotalSaleIncome', w2,
                    'TotalTailoringIncome', w2,
                    'TotalOtherIncome', w2,
                    'TotalInward', w2,
                    'TotalInwardByAmitKumar', w2,
                    'TotalInwardOthers', w2,
                    'TotalDues', w2,
                    'TotalDuesOfMonth', w2,
                    'TotalDuesRecovered', w2,
                    'TotalExpenses', w2,
                    'TotalOnBookExpenes', w2,
                    'TotalCashExpenses', w2,
                    'TotalSalary', w2,
                    'TotalTailoringExpenses', w2,
                    'TotalTrimsAndOtherExpenses', w2,
                    'TotalHomeExpenses', w2,
                    'TotalOtherHomeExpenses', w2,
                    'TotalOtherExpenses', w2,
                    'TotalPayments', w2,
                    'TotalRecipts', w2
                ]);
            }
        }
    }
}
