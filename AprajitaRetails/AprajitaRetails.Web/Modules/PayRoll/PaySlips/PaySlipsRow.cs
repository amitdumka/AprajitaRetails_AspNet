
namespace AprajitaRetails.PayRoll.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("PayRoll"), TableName("[dbo].[PaySlips]")]
    [DisplayName("Pay Slips"), InstanceName("Pay Slips")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PaySlipsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pay Slip Id"), Identity]
        public Int32? PaySlipId
        {
            get { return Fields.PaySlipId[this]; }
            set { Fields.PaySlipId[this] = value; }
        }

        [DisplayName("On Date"), NotNull]
        public DateTime? OnDate
        {
            get { return Fields.OnDate[this]; }
            set { Fields.OnDate[this] = value; }
        }

        [DisplayName("Month"), NotNull]
        public Int32? Month
        {
            get { return Fields.Month[this]; }
            set { Fields.Month[this] = value; }
        }

        [DisplayName("Year"), NotNull]
        public Int32? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeStaffName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Current Salary"), ForeignKey("[dbo].[CurrentSalaries]", "CurrentSalaryId"), LeftJoin("jCurrentSalary")]
        public Int32? CurrentSalaryId
        {
            get { return Fields.CurrentSalaryId[this]; }
            set { Fields.CurrentSalaryId[this] = value; }
        }

        [DisplayName("Basic Salary"), Size(19), Scale(4), NotNull]
        public Decimal? BasicSalary
        {
            get { return Fields.BasicSalary[this]; }
            set { Fields.BasicSalary[this] = value; }
        }

        [DisplayName("No Of Days Present"), NotNull]
        public Int32? NoOfDaysPresent
        {
            get { return Fields.NoOfDaysPresent[this]; }
            set { Fields.NoOfDaysPresent[this] = value; }
        }

        [DisplayName("Total Sale"), Size(19), Scale(4), NotNull]
        public Decimal? TotalSale
        {
            get { return Fields.TotalSale[this]; }
            set { Fields.TotalSale[this] = value; }
        }

        [DisplayName("Sale Incentive"), Size(19), Scale(4), NotNull]
        public Decimal? SaleIncentive
        {
            get { return Fields.SaleIncentive[this]; }
            set { Fields.SaleIncentive[this] = value; }
        }

        [DisplayName("Wow Bill Amount"), Column("WOWBillAmount"), Size(19), Scale(4), NotNull]
        public Decimal? WowBillAmount
        {
            get { return Fields.WowBillAmount[this]; }
            set { Fields.WowBillAmount[this] = value; }
        }

        [DisplayName("Wow Bill Incentive"), Column("WOWBillIncentive"), Size(19), Scale(4), NotNull]
        public Decimal? WowBillIncentive
        {
            get { return Fields.WowBillIncentive[this]; }
            set { Fields.WowBillIncentive[this] = value; }
        }

        [DisplayName("Last Pcs Amount"), Size(19), Scale(4), NotNull]
        public Decimal? LastPcsAmount
        {
            get { return Fields.LastPcsAmount[this]; }
            set { Fields.LastPcsAmount[this] = value; }
        }

        [DisplayName("Last P Cs Incentive"), Size(19), Scale(4), NotNull]
        public Decimal? LastPCsIncentive
        {
            get { return Fields.LastPCsIncentive[this]; }
            set { Fields.LastPCsIncentive[this] = value; }
        }

        [DisplayName("Others Incentive"), Size(19), Scale(4), NotNull]
        public Decimal? OthersIncentive
        {
            get { return Fields.OthersIncentive[this]; }
            set { Fields.OthersIncentive[this] = value; }
        }

        [DisplayName("Gross Salary"), Size(19), Scale(4), NotNull]
        public Decimal? GrossSalary
        {
            get { return Fields.GrossSalary[this]; }
            set { Fields.GrossSalary[this] = value; }
        }

        [DisplayName("Standard Deductions"), Size(19), Scale(4), NotNull]
        public Decimal? StandardDeductions
        {
            get { return Fields.StandardDeductions[this]; }
            set { Fields.StandardDeductions[this] = value; }
        }

        [DisplayName("Tds Deductions"), Column("TDSDeductions"), Size(19), Scale(4), NotNull]
        public Decimal? TdsDeductions
        {
            get { return Fields.TdsDeductions[this]; }
            set { Fields.TdsDeductions[this] = value; }
        }

        [DisplayName("Pf Deductions"), Column("PFDeductions"), Size(19), Scale(4), NotNull]
        public Decimal? PfDeductions
        {
            get { return Fields.PfDeductions[this]; }
            set { Fields.PfDeductions[this] = value; }
        }

        [DisplayName("Advance Deducations"), Size(19), Scale(4), NotNull]
        public Decimal? AdvanceDeducations
        {
            get { return Fields.AdvanceDeducations[this]; }
            set { Fields.AdvanceDeducations[this] = value; }
        }

        [DisplayName("Other Deductions"), Size(19), Scale(4), NotNull]
        public Decimal? OtherDeductions
        {
            get { return Fields.OtherDeductions[this]; }
            set { Fields.OtherDeductions[this] = value; }
        }

        [DisplayName("Remarks"), QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Employee Staff Name"), Expression("jEmployee.[StaffName]")]
        public String EmployeeStaffName
        {
            get { return Fields.EmployeeStaffName[this]; }
            set { Fields.EmployeeStaffName[this] = value; }
        }

        [DisplayName("Employee Mobile No"), Expression("jEmployee.[MobileNo]")]
        public String EmployeeMobileNo
        {
            get { return Fields.EmployeeMobileNo[this]; }
            set { Fields.EmployeeMobileNo[this] = value; }
        }

        [DisplayName("Employee Joining Date"), Expression("jEmployee.[JoiningDate]")]
        public DateTime? EmployeeJoiningDate
        {
            get { return Fields.EmployeeJoiningDate[this]; }
            set { Fields.EmployeeJoiningDate[this] = value; }
        }

        [DisplayName("Employee Leaving Date"), Expression("jEmployee.[LeavingDate]")]
        public DateTime? EmployeeLeavingDate
        {
            get { return Fields.EmployeeLeavingDate[this]; }
            set { Fields.EmployeeLeavingDate[this] = value; }
        }

        [DisplayName("Employee Is Working"), Expression("jEmployee.[IsWorking]")]
        public Boolean? EmployeeIsWorking
        {
            get { return Fields.EmployeeIsWorking[this]; }
            set { Fields.EmployeeIsWorking[this] = value; }
        }

        [DisplayName("Current Salary Employee Id"), Expression("jCurrentSalary.[EmployeeId]")]
        public Int32? CurrentSalaryEmployeeId
        {
            get { return Fields.CurrentSalaryEmployeeId[this]; }
            set { Fields.CurrentSalaryEmployeeId[this] = value; }
        }

        [DisplayName("Current Salary Basic Salary"), Expression("jCurrentSalary.[BasicSalary]")]
        public Decimal? CurrentSalaryBasicSalary
        {
            get { return Fields.CurrentSalaryBasicSalary[this]; }
            set { Fields.CurrentSalaryBasicSalary[this] = value; }
        }

        [DisplayName("Current Salary Sunday Salary"), Expression("jCurrentSalary.[SundaySalary]")]
        public Decimal? CurrentSalarySundaySalary
        {
            get { return Fields.CurrentSalarySundaySalary[this]; }
            set { Fields.CurrentSalarySundaySalary[this] = value; }
        }

        [DisplayName("Current Salary Lp Rate"), Expression("jCurrentSalary.[LPRate]")]
        public Decimal? CurrentSalaryLpRate
        {
            get { return Fields.CurrentSalaryLpRate[this]; }
            set { Fields.CurrentSalaryLpRate[this] = value; }
        }

        [DisplayName("Current Salary Incentive Rate"), Expression("jCurrentSalary.[IncentiveRate]")]
        public Decimal? CurrentSalaryIncentiveRate
        {
            get { return Fields.CurrentSalaryIncentiveRate[this]; }
            set { Fields.CurrentSalaryIncentiveRate[this] = value; }
        }

        [DisplayName("Current Salary Incentive Target"), Expression("jCurrentSalary.[IncentiveTarget]")]
        public Decimal? CurrentSalaryIncentiveTarget
        {
            get { return Fields.CurrentSalaryIncentiveTarget[this]; }
            set { Fields.CurrentSalaryIncentiveTarget[this] = value; }
        }

        [DisplayName("Current Salary Wow Bill Rate"), Expression("jCurrentSalary.[WOWBillRate]")]
        public Decimal? CurrentSalaryWowBillRate
        {
            get { return Fields.CurrentSalaryWowBillRate[this]; }
            set { Fields.CurrentSalaryWowBillRate[this] = value; }
        }

        [DisplayName("Current Salary Wow Bill Target"), Expression("jCurrentSalary.[WOWBillTarget]")]
        public Decimal? CurrentSalaryWowBillTarget
        {
            get { return Fields.CurrentSalaryWowBillTarget[this]; }
            set { Fields.CurrentSalaryWowBillTarget[this] = value; }
        }

        [DisplayName("Current Salary Is Sunday Billable"), Expression("jCurrentSalary.[IsSundayBillable]")]
        public Boolean? CurrentSalaryIsSundayBillable
        {
            get { return Fields.CurrentSalaryIsSundayBillable[this]; }
            set { Fields.CurrentSalaryIsSundayBillable[this] = value; }
        }

        [DisplayName("Current Salary Effective Date"), Expression("jCurrentSalary.[EffectiveDate]")]
        public DateTime? CurrentSalaryEffectiveDate
        {
            get { return Fields.CurrentSalaryEffectiveDate[this]; }
            set { Fields.CurrentSalaryEffectiveDate[this] = value; }
        }

        [DisplayName("Current Salary Close Date"), Expression("jCurrentSalary.[CloseDate]")]
        public DateTime? CurrentSalaryCloseDate
        {
            get { return Fields.CurrentSalaryCloseDate[this]; }
            set { Fields.CurrentSalaryCloseDate[this] = value; }
        }

        [DisplayName("Current Salary Is Effective"), Expression("jCurrentSalary.[IsEffective]")]
        public Boolean? CurrentSalaryIsEffective
        {
            get { return Fields.CurrentSalaryIsEffective[this]; }
            set { Fields.CurrentSalaryIsEffective[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PaySlipId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaySlipsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PaySlipId;
            public DateTimeField OnDate;
            public Int32Field Month;
            public Int32Field Year;
            public Int32Field EmployeeId;
            public Int32Field CurrentSalaryId;
            public DecimalField BasicSalary;
            public Int32Field NoOfDaysPresent;
            public DecimalField TotalSale;
            public DecimalField SaleIncentive;
            public DecimalField WowBillAmount;
            public DecimalField WowBillIncentive;
            public DecimalField LastPcsAmount;
            public DecimalField LastPCsIncentive;
            public DecimalField OthersIncentive;
            public DecimalField GrossSalary;
            public DecimalField StandardDeductions;
            public DecimalField TdsDeductions;
            public DecimalField PfDeductions;
            public DecimalField AdvanceDeducations;
            public DecimalField OtherDeductions;
            public StringField Remarks;

            public StringField EmployeeStaffName;
            public StringField EmployeeMobileNo;
            public DateTimeField EmployeeJoiningDate;
            public DateTimeField EmployeeLeavingDate;
            public BooleanField EmployeeIsWorking;

            public Int32Field CurrentSalaryEmployeeId;
            public DecimalField CurrentSalaryBasicSalary;
            public DecimalField CurrentSalarySundaySalary;
            public DecimalField CurrentSalaryLpRate;
            public DecimalField CurrentSalaryIncentiveRate;
            public DecimalField CurrentSalaryIncentiveTarget;
            public DecimalField CurrentSalaryWowBillRate;
            public DecimalField CurrentSalaryWowBillTarget;
            public BooleanField CurrentSalaryIsSundayBillable;
            public DateTimeField CurrentSalaryEffectiveDate;
            public DateTimeField CurrentSalaryCloseDate;
            public BooleanField CurrentSalaryIsEffective;
        }
    }
}
