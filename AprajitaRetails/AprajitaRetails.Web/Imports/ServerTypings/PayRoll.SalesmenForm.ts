namespace AprajitaRetails.PayRoll {
    export interface SalesmenForm {
        SalesmanName: Serenity.StringEditor;
    }

    export class SalesmenForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.Salesmen';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesmenForm.init)  {
                SalesmenForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SalesmenForm, [
                    'SalesmanName', w0
                ]);
            }
        }
    }
}
