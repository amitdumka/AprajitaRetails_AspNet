
namespace AprajitaRetails.Voyager.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Voyager"), TableName("[dbo].[ImportSaleItemWises]")]
    [DisplayName("Import Sale Item Wises"), InstanceName("Import Sale Item Wises")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImportSaleItemWisesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Sale Item Wise Id"), Identity]
        public Int32? ImportSaleItemWiseId
        {
            get { return Fields.ImportSaleItemWiseId[this]; }
            set { Fields.ImportSaleItemWiseId[this] = value; }
        }

        [DisplayName("Invoice Date"), NotNull]
        public DateTime? InvoiceDate
        {
            get { return Fields.InvoiceDate[this]; }
            set { Fields.InvoiceDate[this] = value; }
        }

        [DisplayName("Invoice No"), QuickSearch]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Type")]
        public String InvoiceType
        {
            get { return Fields.InvoiceType[this]; }
            set { Fields.InvoiceType[this] = value; }
        }

        [DisplayName("Brand Name")]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }

        [DisplayName("Product Name")]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Item Desc")]
        public String ItemDesc
        {
            get { return Fields.ItemDesc[this]; }
            set { Fields.ItemDesc[this] = value; }
        }

        [DisplayName("Hsn Code"), Column("HSNCode")]
        public String HsnCode
        {
            get { return Fields.HsnCode[this]; }
            set { Fields.HsnCode[this] = value; }
        }

        [DisplayName("Barcode")]
        public String Barcode
        {
            get { return Fields.Barcode[this]; }
            set { Fields.Barcode[this] = value; }
        }

        [DisplayName("Style Code")]
        public String StyleCode
        {
            get { return Fields.StyleCode[this]; }
            set { Fields.StyleCode[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Mrp"), Column("MRP"), Size(19), Scale(4), NotNull]
        public Decimal? Mrp
        {
            get { return Fields.Mrp[this]; }
            set { Fields.Mrp[this] = value; }
        }

        [DisplayName("Discount"), Size(19), Scale(4), NotNull]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Basic Rate"), Size(19), Scale(4), NotNull]
        public Decimal? BasicRate
        {
            get { return Fields.BasicRate[this]; }
            set { Fields.BasicRate[this] = value; }
        }

        [DisplayName("Tax"), Size(19), Scale(4), NotNull]
        public Decimal? Tax
        {
            get { return Fields.Tax[this]; }
            set { Fields.Tax[this] = value; }
        }

        [DisplayName("Sgst"), Column("SGST"), Size(19), Scale(4), NotNull]
        public Decimal? Sgst
        {
            get { return Fields.Sgst[this]; }
            set { Fields.Sgst[this] = value; }
        }

        [DisplayName("Cgst"), Column("CGST"), Size(19), Scale(4), NotNull]
        public Decimal? Cgst
        {
            get { return Fields.Cgst[this]; }
            set { Fields.Cgst[this] = value; }
        }

        [DisplayName("Line Total"), Size(19), Scale(4), NotNull]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("Round Off"), Size(19), Scale(4), NotNull]
        public Decimal? RoundOff
        {
            get { return Fields.RoundOff[this]; }
            set { Fields.RoundOff[this] = value; }
        }

        [DisplayName("Bill Amnt"), Size(19), Scale(4), NotNull]
        public Decimal? BillAmnt
        {
            get { return Fields.BillAmnt[this]; }
            set { Fields.BillAmnt[this] = value; }
        }

        [DisplayName("Payment Type")]
        public String PaymentType
        {
            get { return Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = value; }
        }

        [DisplayName("Saleman")]
        public String Saleman
        {
            get { return Fields.Saleman[this]; }
            set { Fields.Saleman[this] = value; }
        }

        [DisplayName("Is Data Consumed"), NotNull]
        public Boolean? IsDataConsumed
        {
            get { return Fields.IsDataConsumed[this]; }
            set { Fields.IsDataConsumed[this] = value; }
        }

        [DisplayName("Import Time")]
        public DateTime? ImportTime
        {
            get { return Fields.ImportTime[this]; }
            set { Fields.ImportTime[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportSaleItemWiseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportSaleItemWisesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportSaleItemWiseId;
            public DateTimeField InvoiceDate;
            public StringField InvoiceNo;
            public StringField InvoiceType;
            public StringField BrandName;
            public StringField ProductName;
            public StringField ItemDesc;
            public StringField HsnCode;
            public StringField Barcode;
            public StringField StyleCode;
            public DoubleField Quantity;
            public DecimalField Mrp;
            public DecimalField Discount;
            public DecimalField BasicRate;
            public DecimalField Tax;
            public DecimalField Sgst;
            public DecimalField Cgst;
            public DecimalField LineTotal;
            public DecimalField RoundOff;
            public DecimalField BillAmnt;
            public StringField PaymentType;
            public StringField Saleman;
            public BooleanField IsDataConsumed;
            public DateTimeField ImportTime;
        }
    }
}
