namespace AprajitaRetails.PayRoll {
    export interface AttendancesRow {
        AttendanceId?: number;
        EmployeeId?: number;
        AttDate?: string;
        EntryTime?: string;
        Status?: number;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }

    export namespace AttendancesRow {
        export const idProperty = 'AttendanceId';
        export const nameProperty = 'EntryTime';
        export const localTextPrefix = 'PayRoll.Attendances';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AttendanceId = "AttendanceId",
            EmployeeId = "EmployeeId",
            AttDate = "AttDate",
            EntryTime = "EntryTime",
            Status = "Status",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
