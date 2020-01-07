namespace AprajitaRetails.Accounts {
    export interface CashInBanksRow {
        CashInBankId?: number;
        CibDate?: string;
        OpenningBalance?: number;
        ClosingBalance?: number;
        CashIn?: number;
        CashOut?: number;
    }

    export namespace CashInBanksRow {
        export const idProperty = 'CashInBankId';
        export const localTextPrefix = 'Accounts.CashInBanks';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CashInBankId = "CashInBankId",
            CibDate = "CibDate",
            OpenningBalance = "OpenningBalance",
            ClosingBalance = "ClosingBalance",
            CashIn = "CashIn",
            CashOut = "CashOut"
        }
    }
}
