
namespace AprajitaRetails.Tailors.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tailors"), TableName("[dbo].[TailoringSalaryPayments]")]
    [DisplayName("Tailoring Salary Payments"), InstanceName("Tailoring Salary Payments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TailoringSalaryPaymentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tailoring Salary Payment Id"), Identity]
        public Int32? TailoringSalaryPaymentId
        {
            get { return Fields.TailoringSalaryPaymentId[this]; }
            set { Fields.TailoringSalaryPaymentId[this] = value; }
        }

        [DisplayName("Tailoring Employee"), NotNull, ForeignKey("[dbo].[TailoringEmployees]", "TailoringEmployeeId"), LeftJoin("jTailoringEmployee"), TextualField("TailoringEmployeeStaffName")]
        public Int32? TailoringEmployeeId
        {
            get { return Fields.TailoringEmployeeId[this]; }
            set { Fields.TailoringEmployeeId[this] = value; }
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

        [DisplayName("Tailoring Employee Staff Name"), Expression("jTailoringEmployee.[StaffName]")]
        public String TailoringEmployeeStaffName
        {
            get { return Fields.TailoringEmployeeStaffName[this]; }
            set { Fields.TailoringEmployeeStaffName[this] = value; }
        }

        [DisplayName("Tailoring Employee Mobile No"), Expression("jTailoringEmployee.[MobileNo]")]
        public String TailoringEmployeeMobileNo
        {
            get { return Fields.TailoringEmployeeMobileNo[this]; }
            set { Fields.TailoringEmployeeMobileNo[this] = value; }
        }

        [DisplayName("Tailoring Employee Joining Date"), Expression("jTailoringEmployee.[JoiningDate]")]
        public DateTime? TailoringEmployeeJoiningDate
        {
            get { return Fields.TailoringEmployeeJoiningDate[this]; }
            set { Fields.TailoringEmployeeJoiningDate[this] = value; }
        }

        [DisplayName("Tailoring Employee Leaving Date"), Expression("jTailoringEmployee.[LeavingDate]")]
        public DateTime? TailoringEmployeeLeavingDate
        {
            get { return Fields.TailoringEmployeeLeavingDate[this]; }
            set { Fields.TailoringEmployeeLeavingDate[this] = value; }
        }

        [DisplayName("Tailoring Employee Is Working"), Expression("jTailoringEmployee.[IsWorking]")]
        public Boolean? TailoringEmployeeIsWorking
        {
            get { return Fields.TailoringEmployeeIsWorking[this]; }
            set { Fields.TailoringEmployeeIsWorking[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TailoringSalaryPaymentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SalaryMonth; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TailoringSalaryPaymentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TailoringSalaryPaymentId;
            public Int32Field TailoringEmployeeId;
            public StringField SalaryMonth;
            public Int32Field SalaryComponet;
            public DateTimeField PaymentDate;
            public DecimalField Amount;
            public Int32Field PayMode;
            public StringField Details;

            public StringField TailoringEmployeeStaffName;
            public StringField TailoringEmployeeMobileNo;
            public DateTimeField TailoringEmployeeJoiningDate;
            public DateTimeField TailoringEmployeeLeavingDate;
            public BooleanField TailoringEmployeeIsWorking;
        }
    }
}
