namespace AprajitaRetails.Voyager {
    export interface CardPaymentDetailsForm {
        SaleInvoiceId: Serenity.IntegerEditor;
        CardType: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        AuthCode: Serenity.IntegerEditor;
        LastDigit: Serenity.IntegerEditor;
    }

    export class CardPaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Voyager.CardPaymentDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CardPaymentDetailsForm.init)  {
                CardPaymentDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CardPaymentDetailsForm, [
                    'SaleInvoiceId', w0,
                    'CardType', w0,
                    'Amount', w1,
                    'AuthCode', w0,
                    'LastDigit', w0
                ]);
            }
        }
    }
}
