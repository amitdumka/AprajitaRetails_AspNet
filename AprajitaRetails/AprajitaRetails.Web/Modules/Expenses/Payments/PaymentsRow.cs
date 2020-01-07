
namespace AprajitaRetails.Expenses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Expenses"), TableName("[dbo].[Payments]")]
    [DisplayName("Payments"), InstanceName("Payments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PaymentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Payment Id"), Identity]
        public Int32? PaymentId
        {
            get { return Fields.PaymentId[this]; }
            set { Fields.PaymentId[this] = value; }
        }

        [DisplayName("Pay Date"), NotNull]
        public DateTime? PayDate
        {
            get { return Fields.PayDate[this]; }
            set { Fields.PayDate[this] = value; }
        }

        [DisplayName("Payment Partry"), QuickSearch]
        public String PaymentPartry
        {
            get { return Fields.PaymentPartry[this]; }
            set { Fields.PaymentPartry[this] = value; }
        }

        [DisplayName("Pay Mode"), NotNull]
        public Int32? PayMode
        {
            get { return Fields.PayMode[this]; }
            set { Fields.PayMode[this] = value; }
        }

        [DisplayName("Payment Details")]
        public String PaymentDetails
        {
            get { return Fields.PaymentDetails[this]; }
            set { Fields.PaymentDetails[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Payment Slip No")]
        public String PaymentSlipNo
        {
            get { return Fields.PaymentSlipNo[this]; }
            set { Fields.PaymentSlipNo[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PaymentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PaymentPartry; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PaymentId;
            public DateTimeField PayDate;
            public StringField PaymentPartry;
            public Int32Field PayMode;
            public StringField PaymentDetails;
            public DecimalField Amount;
            public StringField PaymentSlipNo;
            public StringField Remarks;
        }
    }
}
