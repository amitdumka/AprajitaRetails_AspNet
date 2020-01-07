namespace AprajitaRetails.Banking {
    export interface BanksForm {
        BankName: Serenity.StringEditor;
    }

    export class BanksForm extends Serenity.PrefixedContext {
        static formKey = 'Banking.Banks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BanksForm.init)  {
                BanksForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BanksForm, [
                    'BankName', w0
                ]);
            }
        }
    }
}
