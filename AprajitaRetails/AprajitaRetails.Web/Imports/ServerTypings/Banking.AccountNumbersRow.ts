namespace AprajitaRetails.Banking {
    export interface AccountNumbersRow {
        AccountNumberId?: number;
        BankId?: number;
        Account?: string;
        BankBankName?: string;
    }

    export namespace AccountNumbersRow {
        export const idProperty = 'AccountNumberId';
        export const nameProperty = 'Account';
        export const localTextPrefix = 'Banking.AccountNumbers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AccountNumberId = "AccountNumberId",
            BankId = "BankId",
            Account = "Account",
            BankBankName = "BankBankName"
        }
    }
}
