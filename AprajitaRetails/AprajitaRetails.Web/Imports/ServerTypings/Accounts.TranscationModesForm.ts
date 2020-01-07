namespace AprajitaRetails.Accounts {
    export interface TranscationModesForm {
        Transcation: Serenity.StringEditor;
    }

    export class TranscationModesForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.TranscationModes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TranscationModesForm.init)  {
                TranscationModesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TranscationModesForm, [
                    'Transcation', w0
                ]);
            }
        }
    }
}
