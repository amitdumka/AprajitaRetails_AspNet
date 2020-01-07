
namespace AprajitaRetails.Tailors.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tailors"), TableName("[dbo].[TailoringStaffAdvanceReceipts]")]
    [DisplayName("Tailoring Staff Advance Receipts"), InstanceName("Tailoring Staff Advance Receipts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TailoringStaffAdvanceReceiptsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tailoring Staff Advance Receipt Id"), Identity]
        public Int32? TailoringStaffAdvanceReceiptId
        {
            get { return Fields.TailoringStaffAdvanceReceiptId[this]; }
            set { Fields.TailoringStaffAdvanceReceiptId[this] = value; }
        }

        [DisplayName("Tailoring Employee"), NotNull, ForeignKey("[dbo].[TailoringEmployees]", "TailoringEmployeeId"), LeftJoin("jTailoringEmployee"), TextualField("TailoringEmployeeStaffName")]
        public Int32? TailoringEmployeeId
        {
            get { return Fields.TailoringEmployeeId[this]; }
            set { Fields.TailoringEmployeeId[this] = value; }
        }

        [DisplayName("Receipt Date"), NotNull]
        public DateTime? ReceiptDate
        {
            get { return Fields.ReceiptDate[this]; }
            set { Fields.ReceiptDate[this] = value; }
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

        [DisplayName("Details"), QuickSearch]
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
            get { return Fields.TailoringStaffAdvanceReceiptId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Details; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TailoringStaffAdvanceReceiptsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TailoringStaffAdvanceReceiptId;
            public Int32Field TailoringEmployeeId;
            public DateTimeField ReceiptDate;
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
