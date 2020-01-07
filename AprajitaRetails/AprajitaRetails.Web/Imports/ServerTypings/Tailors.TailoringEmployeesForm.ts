namespace AprajitaRetails.Tailors {
    export interface TailoringEmployeesForm {
        StaffName: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        JoiningDate: Serenity.DateEditor;
        LeavingDate: Serenity.DateEditor;
        IsWorking: Serenity.BooleanEditor;
    }

    export class TailoringEmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'Tailors.TailoringEmployees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TailoringEmployeesForm.init)  {
                TailoringEmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(TailoringEmployeesForm, [
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
