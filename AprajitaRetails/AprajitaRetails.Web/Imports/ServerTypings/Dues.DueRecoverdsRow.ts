namespace AprajitaRetails.Dues {
    export interface DueRecoverdsRow {
        DueRecoverdId?: number;
        PaidDate?: string;
        DuesListId?: number;
        AmountPaid?: number;
        IsPartialPayment?: boolean;
        Modes?: number;
        Remarks?: string;
        DuesListAmount?: number;
        DuesListIsRecovered?: boolean;
        DuesListDailySaleId?: number;
        DuesListRecoveryDate?: string;
        DuesListIsPartialRecovery?: boolean;
    }

    export namespace DueRecoverdsRow {
        export const idProperty = 'DueRecoverdId';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Dues.DueRecoverds';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DueRecoverdId = "DueRecoverdId",
            PaidDate = "PaidDate",
            DuesListId = "DuesListId",
            AmountPaid = "AmountPaid",
            IsPartialPayment = "IsPartialPayment",
            Modes = "Modes",
            Remarks = "Remarks",
            DuesListAmount = "DuesListAmount",
            DuesListIsRecovered = "DuesListIsRecovered",
            DuesListDailySaleId = "DuesListDailySaleId",
            DuesListRecoveryDate = "DuesListRecoveryDate",
            DuesListIsPartialRecovery = "DuesListIsPartialRecovery"
        }
    }
}
