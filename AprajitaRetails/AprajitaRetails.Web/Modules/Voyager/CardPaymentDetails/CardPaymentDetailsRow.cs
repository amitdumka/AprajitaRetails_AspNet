
namespace AprajitaRetails.Voyager.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Voyager"), TableName("[dbo].[CardPaymentDetails]")]
    [DisplayName("Card Payment Details"), InstanceName("Card Payment Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CardPaymentDetailsRow : Row, IIdRow
    {
        [DisplayName("Card Payment Detail"), PrimaryKey, ForeignKey("[dbo].[SalePaymentDetails]", "SalePaymentDetailId"), LeftJoin("jCardPaymentDetail")]
        public Int32? CardPaymentDetailId
        {
            get { return Fields.CardPaymentDetailId[this]; }
            set { Fields.CardPaymentDetailId[this] = value; }
        }

        [DisplayName("Sale Invoice Id"), NotNull]
        public Int32? SaleInvoiceId
        {
            get { return Fields.SaleInvoiceId[this]; }
            set { Fields.SaleInvoiceId[this] = value; }
        }

        [DisplayName("Card Type"), NotNull]
        public Int32? CardType
        {
            get { return Fields.CardType[this]; }
            set { Fields.CardType[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Auth Code"), NotNull]
        public Int32? AuthCode
        {
            get { return Fields.AuthCode[this]; }
            set { Fields.AuthCode[this] = value; }
        }

        [DisplayName("Last Digit"), NotNull]
        public Int32? LastDigit
        {
            get { return Fields.LastDigit[this]; }
            set { Fields.LastDigit[this] = value; }
        }

        [DisplayName("Card Payment Detail Pay Mode"), Expression("jCardPaymentDetail.[PayMode]")]
        public Int32? CardPaymentDetailPayMode
        {
            get { return Fields.CardPaymentDetailPayMode[this]; }
            set { Fields.CardPaymentDetailPayMode[this] = value; }
        }

        [DisplayName("Card Payment Detail Cash Amount"), Expression("jCardPaymentDetail.[CashAmount]")]
        public Decimal? CardPaymentDetailCashAmount
        {
            get { return Fields.CardPaymentDetailCashAmount[this]; }
            set { Fields.CardPaymentDetailCashAmount[this] = value; }
        }

        [DisplayName("Card Payment Detail Card Amount"), Expression("jCardPaymentDetail.[CardAmount]")]
        public Decimal? CardPaymentDetailCardAmount
        {
            get { return Fields.CardPaymentDetailCardAmount[this]; }
            set { Fields.CardPaymentDetailCardAmount[this] = value; }
        }

        [DisplayName("Card Payment Detail Mix Amount"), Expression("jCardPaymentDetail.[MixAmount]")]
        public Decimal? CardPaymentDetailMixAmount
        {
            get { return Fields.CardPaymentDetailMixAmount[this]; }
            set { Fields.CardPaymentDetailMixAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CardPaymentDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CardPaymentDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CardPaymentDetailId;
            public Int32Field SaleInvoiceId;
            public Int32Field CardType;
            public DecimalField Amount;
            public Int32Field AuthCode;
            public Int32Field LastDigit;

            public Int32Field CardPaymentDetailPayMode;
            public DecimalField CardPaymentDetailCashAmount;
            public DecimalField CardPaymentDetailCardAmount;
            public DecimalField CardPaymentDetailMixAmount;
        }
    }
}
