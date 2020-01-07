
namespace AprajitaRetails.PayRoll.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("PayRoll"), TableName("[dbo].[CurrentSalaries]")]
    [DisplayName("Current Salaries"), InstanceName("Current Salaries")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CurrentSalariesRow : Row, IIdRow
    {
        [DisplayName("Current Salary Id"), Identity]
        public Int32? CurrentSalaryId
        {
            get { return Fields.CurrentSalaryId[this]; }
            set { Fields.CurrentSalaryId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeStaffName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Basic Salary"), Size(19), Scale(4), NotNull]
        public Decimal? BasicSalary
        {
            get { return Fields.BasicSalary[this]; }
            set { Fields.BasicSalary[this] = value; }
        }

        [DisplayName("Sunday Salary"), Size(19), Scale(4), NotNull]
        public Decimal? SundaySalary
        {
            get { return Fields.SundaySalary[this]; }
            set { Fields.SundaySalary[this] = value; }
        }

        [DisplayName("Lp Rate"), Column("LPRate"), Size(18), Scale(2), NotNull]
        public Decimal? LpRate
        {
            get { return Fields.LpRate[this]; }
            set { Fields.LpRate[this] = value; }
        }

        [DisplayName("Incentive Rate"), Size(18), Scale(2), NotNull]
        public Decimal? IncentiveRate
        {
            get { return Fields.IncentiveRate[this]; }
            set { Fields.IncentiveRate[this] = value; }
        }

        [DisplayName("Incentive Target"), Size(19), Scale(4), NotNull]
        public Decimal? IncentiveTarget
        {
            get { return Fields.IncentiveTarget[this]; }
            set { Fields.IncentiveTarget[this] = value; }
        }

        [DisplayName("Wow Bill Rate"), Column("WOWBillRate"), Size(18), Scale(2), NotNull]
        public Decimal? WowBillRate
        {
            get { return Fields.WowBillRate[this]; }
            set { Fields.WowBillRate[this] = value; }
        }

        [DisplayName("Wow Bill Target"), Column("WOWBillTarget"), Size(19), Scale(4), NotNull]
        public Decimal? WowBillTarget
        {
            get { return Fields.WowBillTarget[this]; }
            set { Fields.WowBillTarget[this] = value; }
        }

        [DisplayName("Is Sunday Billable"), NotNull]
        public Boolean? IsSundayBillable
        {
            get { return Fields.IsSundayBillable[this]; }
            set { Fields.IsSundayBillable[this] = value; }
        }

        [DisplayName("Effective Date"), NotNull]
        public DateTime? EffectiveDate
        {
            get { return Fields.EffectiveDate[this]; }
            set { Fields.EffectiveDate[this] = value; }
        }

        [DisplayName("Close Date"), NotNull]
        public DateTime? CloseDate
        {
            get { return Fields.CloseDate[this]; }
            set { Fields.CloseDate[this] = value; }
        }

        [DisplayName("Is Effective"), NotNull]
        public Boolean? IsEffective
        {
            get { return Fields.IsEffective[this]; }
            set { Fields.IsEffective[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CurrentSalaryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrentSalariesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CurrentSalaryId;
            public Int32Field EmployeeId;
            public DecimalField BasicSalary;
            public DecimalField SundaySalary;
            public DecimalField LpRate;
            public DecimalField IncentiveRate;
            public DecimalField IncentiveTarget;
            public DecimalField WowBillRate;
            public DecimalField WowBillTarget;
            public BooleanField IsSundayBillable;
            public DateTimeField EffectiveDate;
            public DateTimeField CloseDate;
            public BooleanField IsEffective;

            public StringField EmployeeStaffName;
            public StringField EmployeeMobileNo;
            public DateTimeField EmployeeJoiningDate;
            public DateTimeField EmployeeLeavingDate;
            public BooleanField EmployeeIsWorking;
        }
    }
}
