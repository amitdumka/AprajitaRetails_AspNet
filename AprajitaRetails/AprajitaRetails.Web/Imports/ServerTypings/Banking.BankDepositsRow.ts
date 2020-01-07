namespace AprajitaRetails.Banking {
    export interface BankDepositsRow {
        BankDepositId?: number;
        DepoDate?: string;
        AccountNumberId?: number;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        Remarks?: string;
        AccountNumberBankId?: number;
        AccountNumberAccount?: string;
    }

    export namespace BankDepositsRow {
        export const idProperty = 'BankDepositId';
        export const nameProperty = 'Details';
        export const localTextPrefix = 'Banking.BankDeposits';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BankDepositId = "BankDepositId",
            DepoDate = "DepoDate",
            AccountNumberId = "AccountNumberId",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            Remarks = "Remarks",
            AccountNumberBankId = "AccountNumberBankId",
            AccountNumberAccount = "AccountNumberAccount"
        }
    }
}
