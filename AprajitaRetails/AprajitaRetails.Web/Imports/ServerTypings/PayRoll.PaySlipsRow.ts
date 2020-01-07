namespace AprajitaRetails.PayRoll {
    export interface PaySlipsRow {
        PaySlipId?: number;
        OnDate?: string;
        Month?: number;
        Year?: number;
        EmployeeId?: number;
        CurrentSalaryId?: number;
        BasicSalary?: number;
        NoOfDaysPresent?: number;
        TotalSale?: number;
        SaleIncentive?: number;
        WowBillAmount?: number;
        WowBillIncentive?: number;
        LastPcsAmount?: number;
        LastPCsIncentive?: number;
        OthersIncentive?: number;
        GrossSalary?: number;
        StandardDeductions?: number;
        TdsDeductions?: number;
        PfDeductions?: number;
        AdvanceDeducations?: number;
        OtherDeductions?: number;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
        CurrentSalaryEmployeeId?: number;
        CurrentSalaryBasicSalary?: number;
        CurrentSalarySundaySalary?: number;
        CurrentSalaryLpRate?: number;
        CurrentSalaryIncentiveRate?: number;
        CurrentSalaryIncentiveTarget?: number;
        CurrentSalaryWowBillRate?: number;
        CurrentSalaryWowBillTarget?: number;
        CurrentSalaryIsSundayBillable?: boolean;
        CurrentSalaryEffectiveDate?: string;
        CurrentSalaryCloseDate?: string;
        CurrentSalaryIsEffective?: boolean;
    }

    export namespace PaySlipsRow {
        export const idProperty = 'PaySlipId';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'PayRoll.PaySlips';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PaySlipId = "PaySlipId",
            OnDate = "OnDate",
            Month = "Month",
            Year = "Year",
            EmployeeId = "EmployeeId",
            CurrentSalaryId = "CurrentSalaryId",
            BasicSalary = "BasicSalary",
            NoOfDaysPresent = "NoOfDaysPresent",
            TotalSale = "TotalSale",
            SaleIncentive = "SaleIncentive",
            WowBillAmount = "WowBillAmount",
            WowBillIncentive = "WowBillIncentive",
            LastPcsAmount = "LastPcsAmount",
            LastPCsIncentive = "LastPCsIncentive",
            OthersIncentive = "OthersIncentive",
            GrossSalary = "GrossSalary",
            StandardDeductions = "StandardDeductions",
            TdsDeductions = "TdsDeductions",
            PfDeductions = "PfDeductions",
            AdvanceDeducations = "AdvanceDeducations",
            OtherDeductions = "OtherDeductions",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking",
            CurrentSalaryEmployeeId = "CurrentSalaryEmployeeId",
            CurrentSalaryBasicSalary = "CurrentSalaryBasicSalary",
            CurrentSalarySundaySalary = "CurrentSalarySundaySalary",
            CurrentSalaryLpRate = "CurrentSalaryLpRate",
            CurrentSalaryIncentiveRate = "CurrentSalaryIncentiveRate",
            CurrentSalaryIncentiveTarget = "CurrentSalaryIncentiveTarget",
            CurrentSalaryWowBillRate = "CurrentSalaryWowBillRate",
            CurrentSalaryWowBillTarget = "CurrentSalaryWowBillTarget",
            CurrentSalaryIsSundayBillable = "CurrentSalaryIsSundayBillable",
            CurrentSalaryEffectiveDate = "CurrentSalaryEffectiveDate",
            CurrentSalaryCloseDate = "CurrentSalaryCloseDate",
            CurrentSalaryIsEffective = "CurrentSalaryIsEffective"
        }
    }
}
