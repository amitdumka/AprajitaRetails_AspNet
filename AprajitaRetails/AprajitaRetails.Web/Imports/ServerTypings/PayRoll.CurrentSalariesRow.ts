namespace AprajitaRetails.PayRoll {
    export interface CurrentSalariesRow {
        CurrentSalaryId?: number;
        EmployeeId?: number;
        BasicSalary?: number;
        SundaySalary?: number;
        LpRate?: number;
        IncentiveRate?: number;
        IncentiveTarget?: number;
        WowBillRate?: number;
        WowBillTarget?: number;
        IsSundayBillable?: boolean;
        EffectiveDate?: string;
        CloseDate?: string;
        IsEffective?: boolean;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }

    export namespace CurrentSalariesRow {
        export const idProperty = 'CurrentSalaryId';
        export const localTextPrefix = 'PayRoll.CurrentSalaries';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CurrentSalaryId = "CurrentSalaryId",
            EmployeeId = "EmployeeId",
            BasicSalary = "BasicSalary",
            SundaySalary = "SundaySalary",
            LpRate = "LpRate",
            IncentiveRate = "IncentiveRate",
            IncentiveTarget = "IncentiveTarget",
            WowBillRate = "WowBillRate",
            WowBillTarget = "WowBillTarget",
            IsSundayBillable = "IsSundayBillable",
            EffectiveDate = "EffectiveDate",
            CloseDate = "CloseDate",
            IsEffective = "IsEffective",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
