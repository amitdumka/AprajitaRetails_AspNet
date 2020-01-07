
namespace AprajitaRetails.Expenses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Expenses"), TableName("[dbo].[CashPayments]")]
    [DisplayName("Cash Payments"), InstanceName("Cash Payments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CashPaymentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cash Payment Id"), Identity]
        public Int32? CashPaymentId
        {
            get { return Fields.CashPaymentId[this]; }
            set { Fields.CashPaymentId[this] = value; }
        }

        [DisplayName("Payment Date"), NotNull]
        public DateTime? PaymentDate
        {
            get { return Fields.PaymentDate[this]; }
            set { Fields.PaymentDate[this] = value; }
        }

        [DisplayName("Transcation Mode"), NotNull, ForeignKey("[dbo].[TranscationModes]", "TranscationModeId"), LeftJoin("jTranscationMode"), TextualField("TranscationModeTranscation")]
        public Int32? TranscationModeId
        {
            get { return Fields.TranscationModeId[this]; }
            set { Fields.TranscationModeId[this] = value; }
        }

        [DisplayName("Paid To"), NotNull, QuickSearch]
        public String PaidTo
        {
            get { return Fields.PaidTo[this]; }
            set { Fields.PaidTo[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Slip No")]
        public String SlipNo
        {
            get { return Fields.SlipNo[this]; }
            set { Fields.SlipNo[this] = value; }
        }

        [DisplayName("Transcation Mode Transcation"), Expression("jTranscationMode.[Transcation]")]
        public String TranscationModeTranscation
        {
            get { return Fields.TranscationModeTranscation[this]; }
            set { Fields.TranscationModeTranscation[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CashPaymentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PaidTo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CashPaymentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CashPaymentId;
            public DateTimeField PaymentDate;
            public Int32Field TranscationModeId;
            public StringField PaidTo;
            public DecimalField Amount;
            public StringField SlipNo;

            public StringField TranscationModeTranscation;
        }
    }
}
