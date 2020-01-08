namespace AprajitaRetails.Sales {
    export interface CustomersRow {
        CustomerId?: number;
        FirstName?: string;
        LastName?: string;
        Age?: number;
        DateOfBirth?: string;
        City?: string;
        MobileNo?: string;
        Gender?: number;
        NoOfBills?: number;
        TotalAmount?: number;
        CreatedDate?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'FirstName';
        export const localTextPrefix = 'Sales.Customers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            FirstName = "FirstName",
            LastName = "LastName",
            Age = "Age",
            DateOfBirth = "DateOfBirth",
            City = "City",
            MobileNo = "MobileNo",
            Gender = "Gender",
            NoOfBills = "NoOfBills",
            TotalAmount = "TotalAmount",
            CreatedDate = "CreatedDate"
        }
    }
}
