namespace AprajitaRetails.Banking {
    export interface BankWithdrawalsRow {
        BankWithdrawalId?: number;
        DepoDate?: string;
        AccountNumberId?: number;
        Amount?: number;
        ChequeNo?: string;
        SignedBy?: string;
        ApprovedBy?: string;
        InNameOf?: string;
        AccountNumberBankId?: number;
        AccountNumberAccount?: string;
    }

    export namespace BankWithdrawalsRow {
        export const idProperty = 'BankWithdrawalId';
        export const nameProperty = 'ChequeNo';
        export const localTextPrefix = 'Banking.BankWithdrawals';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BankWithdrawalId = "BankWithdrawalId",
            DepoDate = "DepoDate",
            AccountNumberId = "AccountNumberId",
            Amount = "Amount",
            ChequeNo = "ChequeNo",
            SignedBy = "SignedBy",
            ApprovedBy = "ApprovedBy",
            InNameOf = "InNameOf",
            AccountNumberBankId = "AccountNumberBankId",
            AccountNumberAccount = "AccountNumberAccount"
        }
    }
}
