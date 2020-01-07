namespace AprajitaRetails.Process {
    export interface EndOfDaysRow {
        EndOfDayId?: number;
        EodDate?: string;
        Shirting?: number;
        Suiting?: number;
        Uspa?: number;
        FmArrow?: number;
        Rwt?: number;
        Access?: number;
        CashInHand?: number;
    }

    export namespace EndOfDaysRow {
        export const idProperty = 'EndOfDayId';
        export const localTextPrefix = 'Process.EndOfDays';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EndOfDayId = "EndOfDayId",
            EodDate = "EodDate",
            Shirting = "Shirting",
            Suiting = "Suiting",
            Uspa = "Uspa",
            FmArrow = "FmArrow",
            Rwt = "Rwt",
            Access = "Access",
            CashInHand = "CashInHand"
        }
    }
}
