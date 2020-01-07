namespace AprajitaRetails.Accounts {
    export interface SuspenseAccountsRow {
        SuspenseAccountId?: number;
        EntryDate?: string;
        ReferanceDetails?: string;
        InAmount?: number;
        OutAmount?: number;
        IsCleared?: boolean;
        ClearedDetails?: string;
        ReviewBy?: string;
    }

    export namespace SuspenseAccountsRow {
        export const idProperty = 'SuspenseAccountId';
        export const nameProperty = 'ReferanceDetails';
        export const localTextPrefix = 'Accounts.SuspenseAccounts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SuspenseAccountId = "SuspenseAccountId",
            EntryDate = "EntryDate",
            ReferanceDetails = "ReferanceDetails",
            InAmount = "InAmount",
            OutAmount = "OutAmount",
            IsCleared = "IsCleared",
            ClearedDetails = "ClearedDetails",
            ReviewBy = "ReviewBy"
        }
    }
}
