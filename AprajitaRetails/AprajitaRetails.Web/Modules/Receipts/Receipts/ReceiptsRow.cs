
namespace AprajitaRetails.Receipts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Receipts"), TableName("[dbo].[Receipts]")]
    [DisplayName("Receipts"), InstanceName("Receipts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReceiptsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Receipt Id"), Identity]
        public Int32? ReceiptId
        {
            get { return Fields.ReceiptId[this]; }
            set { Fields.ReceiptId[this] = value; }
        }

        [DisplayName("Reciept Date"), NotNull]
        public DateTime? RecieptDate
        {
            get { return Fields.RecieptDate[this]; }
            set { Fields.RecieptDate[this] = value; }
        }

        [DisplayName("Receipt From"), QuickSearch]
        public String ReceiptFrom
        {
            get { return Fields.ReceiptFrom[this]; }
            set { Fields.ReceiptFrom[this] = value; }
        }

        [DisplayName("Pay Mode"), NotNull]
        public Int32? PayMode
        {
            get { return Fields.PayMode[this]; }
            set { Fields.PayMode[this] = value; }
        }

        [DisplayName("Receipt Details")]
        public String ReceiptDetails
        {
            get { return Fields.ReceiptDetails[this]; }
            set { Fields.ReceiptDetails[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Reciept Slip No")]
        public String RecieptSlipNo
        {
            get { return Fields.RecieptSlipNo[this]; }
            set { Fields.RecieptSlipNo[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ReceiptId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReceiptFrom; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiptsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReceiptId;
            public DateTimeField RecieptDate;
            public StringField ReceiptFrom;
            public Int32Field PayMode;
            public StringField ReceiptDetails;
            public DecimalField Amount;
            public StringField RecieptSlipNo;
            public StringField Remarks;
        }
    }
}
