namespace AprajitaRetails.PayRoll {
    export interface EmployeesForm {
        StaffName: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        JoiningDate: Serenity.DateEditor;
        LeavingDate: Serenity.DateEditor;
        IsWorking: Serenity.BooleanEditor;
    }

    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.Employees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesForm.init)  {
                EmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(EmployeesForm, [
                    'StaffName', w0,
                    'MobileNo', w0,
                    'JoiningDate', w1,
                    'LeavingDate', w1,
                    'IsWorking', w2
                ]);
            }
        }
    }
}
