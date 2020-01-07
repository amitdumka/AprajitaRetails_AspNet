namespace AprajitaRetails.Tailors {
    export interface TailorAttendancesRow {
        TailorAttendanceId?: number;
        TailoringEmployeeId?: number;
        AttDate?: string;
        EntryTime?: string;
        Status?: number;
        Remarks?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }

    export namespace TailorAttendancesRow {
        export const idProperty = 'TailorAttendanceId';
        export const nameProperty = 'EntryTime';
        export const localTextPrefix = 'Tailors.TailorAttendances';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TailorAttendanceId = "TailorAttendanceId",
            TailoringEmployeeId = "TailoringEmployeeId",
            AttDate = "AttDate",
            EntryTime = "EntryTime",
            Status = "Status",
            Remarks = "Remarks",
            TailoringEmployeeStaffName = "TailoringEmployeeStaffName",
            TailoringEmployeeMobileNo = "TailoringEmployeeMobileNo",
            TailoringEmployeeJoiningDate = "TailoringEmployeeJoiningDate",
            TailoringEmployeeLeavingDate = "TailoringEmployeeLeavingDate",
            TailoringEmployeeIsWorking = "TailoringEmployeeIsWorking"
        }
    }
}
