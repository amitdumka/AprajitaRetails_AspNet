
namespace AprajitaRetails.Receipts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Receipts"), TableName("[dbo].[CashReceipts]")]
    [DisplayName("Cash Receipts"), InstanceName("Cash Receipts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CashReceiptsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cash Receipt Id"), Identity]
        public Int32? CashReceiptId
        {
            get { return Fields.CashReceiptId[this]; }
            set { Fields.CashReceiptId[this] = value; }
        }

        [DisplayName("Inward Date"), NotNull]
        public DateTime? InwardDate
        {
            get { return Fields.InwardDate[this]; }
            set { Fields.InwardDate[this] = value; }
        }

        [DisplayName("Transcation Mode"), NotNull, ForeignKey("[dbo].[TranscationModes]", "TranscationModeId"), LeftJoin("jTranscationMode"), TextualField("TranscationModeTranscation")]
        public Int32? TranscationModeId
        {
            get { return Fields.TranscationModeId[this]; }
            set { Fields.TranscationModeId[this] = value; }
        }

        [DisplayName("Receipt From"), NotNull, QuickSearch]
        public String ReceiptFrom
        {
            get { return Fields.ReceiptFrom[this]; }
            set { Fields.ReceiptFrom[this] = value; }
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
            get { return Fields.CashReceiptId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReceiptFrom; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CashReceiptsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CashReceiptId;
            public DateTimeField InwardDate;
            public Int32Field TranscationModeId;
            public StringField ReceiptFrom;
            public DecimalField Amount;
            public StringField SlipNo;

            public StringField TranscationModeTranscation;
        }
    }
}
