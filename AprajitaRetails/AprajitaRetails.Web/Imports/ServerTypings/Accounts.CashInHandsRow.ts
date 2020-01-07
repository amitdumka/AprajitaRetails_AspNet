namespace AprajitaRetails.Accounts {
    export interface CashInHandsRow {
        CashInHandId?: number;
        CihDate?: string;
        OpenningBalance?: number;
        ClosingBalance?: number;
        CashIn?: number;
        CashOut?: number;
    }

    export namespace CashInHandsRow {
        export const idProperty = 'CashInHandId';
        export const localTextPrefix = 'Accounts.CashInHands';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CashInHandId = "CashInHandId",
            CihDate = "CihDate",
            OpenningBalance = "OpenningBalance",
            ClosingBalance = "ClosingBalance",
            CashIn = "CashIn",
            CashOut = "CashOut"
        }
    }
}
