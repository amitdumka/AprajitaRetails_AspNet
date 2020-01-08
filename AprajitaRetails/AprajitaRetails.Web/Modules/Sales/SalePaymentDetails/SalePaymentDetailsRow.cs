
namespace AprajitaRetails.Sales.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Sales"), TableName("[dbo].[SalePaymentDetails]")]
    [DisplayName("Sale Payment Details"), InstanceName("Sale Payment Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SalePaymentDetailsRow : Row, IIdRow
    {
        [DisplayName("Sale Payment Detail"), PrimaryKey, ForeignKey("[dbo].[SaleInvoices]", "SaleInvoiceId"), LeftJoin("jSalePaymentDetail"), TextualField("SalePaymentDetailInvoiceNo")]
        public Int32? SalePaymentDetailId
        {
            get { return Fields.SalePaymentDetailId[this]; }
            set { Fields.SalePaymentDetailId[this] = value; }
        }

        [DisplayName("Pay Mode"), NotNull]
        public Int32? PayMode
        {
            get { return Fields.PayMode[this]; }
            set { Fields.PayMode[this] = value; }
        }

        [DisplayName("Cash Amount"), Size(19), Scale(4), NotNull]
        public Decimal? CashAmount
        {
            get { return Fields.CashAmount[this]; }
            set { Fields.CashAmount[this] = value; }
        }

        [DisplayName("Card Amount"), Size(19), Scale(4), NotNull]
        public Decimal? CardAmount
        {
            get { return Fields.CardAmount[this]; }
            set { Fields.CardAmount[this] = value; }
        }

        [DisplayName("Mix Amount"), Size(19), Scale(4), NotNull]
        public Decimal? MixAmount
        {
            get { return Fields.MixAmount[this]; }
            set { Fields.MixAmount[this] = value; }
        }

        [DisplayName("Sale Payment Detail Customer Id"), Expression("jSalePaymentDetail.[CustomerId]")]
        public Int32? SalePaymentDetailCustomerId
        {
            get { return Fields.SalePaymentDetailCustomerId[this]; }
            set { Fields.SalePaymentDetailCustomerId[this] = value; }
        }

        [DisplayName("Sale Payment Detail On Date"), Expression("jSalePaymentDetail.[OnDate]")]
        public DateTime? SalePaymentDetailOnDate
        {
            get { return Fields.SalePaymentDetailOnDate[this]; }
            set { Fields.SalePaymentDetailOnDate[this] = value; }
        }

        [DisplayName("Sale Payment Detail Invoice No"), Expression("jSalePaymentDetail.[InvoiceNo]")]
        public String SalePaymentDetailInvoiceNo
        {
            get { return Fields.SalePaymentDetailInvoiceNo[this]; }
            set { Fields.SalePaymentDetailInvoiceNo[this] = value; }
        }

        [DisplayName("Sale Payment Detail Total Items"), Expression("jSalePaymentDetail.[TotalItems]")]
        public Int32? SalePaymentDetailTotalItems
        {
            get { return Fields.SalePaymentDetailTotalItems[this]; }
            set { Fields.SalePaymentDetailTotalItems[this] = value; }
        }

        [DisplayName("Sale Payment Detail Total Qty"), Expression("jSalePaymentDetail.[TotalQty]")]
        public Double? SalePaymentDetailTotalQty
        {
            get { return Fields.SalePaymentDetailTotalQty[this]; }
            set { Fields.SalePaymentDetailTotalQty[this] = value; }
        }

        [DisplayName("Sale Payment Detail Total Bill Amount"), Expression("jSalePaymentDetail.[TotalBillAmount]")]
        public Decimal? SalePaymentDetailTotalBillAmount
        {
            get { return Fields.SalePaymentDetailTotalBillAmount[this]; }
            set { Fields.SalePaymentDetailTotalBillAmount[this] = value; }
        }

        [DisplayName("Sale Payment Detail Total Discount Amount"), Expression("jSalePaymentDetail.[TotalDiscountAmount]")]
        public Decimal? SalePaymentDetailTotalDiscountAmount
        {
            get { return Fields.SalePaymentDetailTotalDiscountAmount[this]; }
            set { Fields.SalePaymentDetailTotalDiscountAmount[this] = value; }
        }

        [DisplayName("Sale Payment Detail Round Off Amount"), Expression("jSalePaymentDetail.[RoundOffAmount]")]
        public Decimal? SalePaymentDetailRoundOffAmount
        {
            get { return Fields.SalePaymentDetailRoundOffAmount[this]; }
            set { Fields.SalePaymentDetailRoundOffAmount[this] = value; }
        }

        [DisplayName("Sale Payment Detail Total Tax Amount"), Expression("jSalePaymentDetail.[TotalTaxAmount]")]
        public Decimal? SalePaymentDetailTotalTaxAmount
        {
            get { return Fields.SalePaymentDetailTotalTaxAmount[this]; }
            set { Fields.SalePaymentDetailTotalTaxAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SalePaymentDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SalePaymentDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SalePaymentDetailId;
            public Int32Field PayMode;
            public DecimalField CashAmount;
            public DecimalField CardAmount;
            public DecimalField MixAmount;

            public Int32Field SalePaymentDetailCustomerId;
            public DateTimeField SalePaymentDetailOnDate;
            public StringField SalePaymentDetailInvoiceNo;
            public Int32Field SalePaymentDetailTotalItems;
            public DoubleField SalePaymentDetailTotalQty;
            public DecimalField SalePaymentDetailTotalBillAmount;
            public DecimalField SalePaymentDetailTotalDiscountAmount;
            public DecimalField SalePaymentDetailRoundOffAmount;
            public DecimalField SalePaymentDetailTotalTaxAmount;
        }
    }
}
