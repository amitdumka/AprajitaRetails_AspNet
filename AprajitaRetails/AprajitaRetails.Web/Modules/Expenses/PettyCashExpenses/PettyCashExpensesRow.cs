
namespace AprajitaRetails.Expenses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Expenses"), TableName("[dbo].[PettyCashExpenses]")]
    [DisplayName("Petty Cash Expenses"), InstanceName("Petty Cash Expenses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PettyCashExpensesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Petty Cash Expense Id"), Identity]
        public Int32? PettyCashExpenseId
        {
            get { return Fields.PettyCashExpenseId[this]; }
            set { Fields.PettyCashExpenseId[this] = value; }
        }

        [DisplayName("Exp Date"), NotNull]
        public DateTime? ExpDate
        {
            get { return Fields.ExpDate[this]; }
            set { Fields.ExpDate[this] = value; }
        }

        [DisplayName("Particulars"), QuickSearch]
        public String Particulars
        {
            get { return Fields.Particulars[this]; }
            set { Fields.Particulars[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeStaffName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Paid To")]
        public String PaidTo
        {
            get { return Fields.PaidTo[this]; }
            set { Fields.PaidTo[this] = value; }
        }

        [DisplayName("Remarks")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.PettyCashExpenseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Particulars; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PettyCashExpensesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PettyCashExpenseId;
            public DateTimeField ExpDate;
            public StringField Particulars;
            public DecimalField Amount;
            public Int32Field EmployeeId;
            public StringField PaidTo;
            public StringField Remarks;

            public StringField EmployeeStaffName;
            public StringField EmployeeMobileNo;
            public DateTimeField EmployeeJoiningDate;
            public DateTimeField EmployeeLeavingDate;
            public BooleanField EmployeeIsWorking;
        }
    }
}
