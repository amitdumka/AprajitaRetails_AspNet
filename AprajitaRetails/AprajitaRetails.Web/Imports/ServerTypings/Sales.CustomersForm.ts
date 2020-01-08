namespace AprajitaRetails.Sales {
    export interface CustomersForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Age: Serenity.IntegerEditor;
        DateOfBirth: Serenity.DateEditor;
        City: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        Gender: Serenity.IntegerEditor;
        NoOfBills: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
        CreatedDate: Serenity.DateEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(CustomersForm, [
                    'FirstName', w0,
                    'LastName', w0,
                    'Age', w1,
                    'DateOfBirth', w2,
                    'City', w0,
                    'MobileNo', w0,
                    'Gender', w1,
                    'NoOfBills', w1,
                    'TotalAmount', w3,
                    'CreatedDate', w2
                ]);
            }
        }
    }
}
