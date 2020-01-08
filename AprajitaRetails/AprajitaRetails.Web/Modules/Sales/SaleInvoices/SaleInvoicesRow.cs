
namespace AprajitaRetails.Sales.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Sales"), TableName("[dbo].[SaleInvoices]")]
    [DisplayName("Sale Invoices"), InstanceName("Sale Invoices")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SaleInvoicesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sale Invoice Id"), Identity]
        public Int32? SaleInvoiceId
        {
            get { return Fields.SaleInvoiceId[this]; }
            set { Fields.SaleInvoiceId[this] = value; }
        }

        [DisplayName("Customer Id"), NotNull]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("On Date"), NotNull]
        public DateTime? OnDate
        {
            get { return Fields.OnDate[this]; }
            set { Fields.OnDate[this] = value; }
        }

        [DisplayName("Invoice No"), QuickSearch]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Total Items"), NotNull]
        public Int32? TotalItems
        {
            get { return Fields.TotalItems[this]; }
            set { Fields.TotalItems[this] = value; }
        }

        [DisplayName("Total Qty"), NotNull]
        public Double? TotalQty
        {
            get { return Fields.TotalQty[this]; }
            set { Fields.TotalQty[this] = value; }
        }

        [DisplayName("Total Bill Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TotalBillAmount
        {
            get { return Fields.TotalBillAmount[this]; }
            set { Fields.TotalBillAmount[this] = value; }
        }

        [DisplayName("Total Discount Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TotalDiscountAmount
        {
            get { return Fields.TotalDiscountAmount[this]; }
            set { Fields.TotalDiscountAmount[this] = value; }
        }

        [DisplayName("Round Off Amount"), Size(19), Scale(4), NotNull]
        public Decimal? RoundOffAmount
        {
            get { return Fields.RoundOffAmount[this]; }
            set { Fields.RoundOffAmount[this] = value; }
        }

        [DisplayName("Total Tax Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TotalTaxAmount
        {
            get { return Fields.TotalTaxAmount[this]; }
            set { Fields.TotalTaxAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SaleInvoiceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SaleInvoicesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SaleInvoiceId;
            public Int32Field CustomerId;
            public DateTimeField OnDate;
            public StringField InvoiceNo;
            public Int32Field TotalItems;
            public DoubleField TotalQty;
            public DecimalField TotalBillAmount;
            public DecimalField TotalDiscountAmount;
            public DecimalField RoundOffAmount;
            public DecimalField TotalTaxAmount;
        }
    }
}
