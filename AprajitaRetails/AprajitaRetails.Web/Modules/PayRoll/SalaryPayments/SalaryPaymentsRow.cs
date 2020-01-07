
namespace AprajitaRetails.PayRoll.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("PayRoll"), TableName("[dbo].[SalaryPayments]")]
    [DisplayName("Salary Payments"), InstanceName("Salary Payments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SalaryPaymentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Salary Payment Id"), Identity]
        public Int32? SalaryPaymentId
        {
            get { return Fields.SalaryPaymentId[this]; }
            set { Fields.SalaryPaymentId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeStaffName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Salary Month"), QuickSearch]
        public String SalaryMonth
        {
            get { return Fields.SalaryMonth[this]; }
            set { Fields.SalaryMonth[this] = value; }
        }

        [DisplayName("Salary Componet"), NotNull]
        public Int32? SalaryComponet
        {
            get { return Fields.SalaryComponet[this]; }
            set { Fields.SalaryComponet[this] = value; }
        }

        [DisplayName("Payment Date"), NotNull]
        public DateTime? PaymentDate
        {
            get { return Fields.PaymentDate[this]; }
            set { Fields.PaymentDate[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Pay Mode"), NotNull]
        public Int32? PayMode
        {
            get { return Fields.PayMode[this]; }
            set { Fields.PayMode[this] = value; }
        }

        [DisplayName("Details")]
        public String Details
        {
            get { return Fields.Details[this]; }
            set { Fields.Details[this] = value; }
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
            get { return Fields.SalaryPaymentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SalaryMonth; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SalaryPaymentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SalaryPaymentId;
            public Int32Field EmployeeId;
            public StringField SalaryMonth;
            public Int32Field SalaryComponet;
            public DateTimeField PaymentDate;
            public DecimalField Amount;
            public Int32Field PayMode;
            public StringField Details;

            public StringField EmployeeStaffName;
            public StringField EmployeeMobileNo;
            public DateTimeField EmployeeJoiningDate;
            public DateTimeField EmployeeLeavingDate;
            public BooleanField EmployeeIsWorking;
        }
    }
}
