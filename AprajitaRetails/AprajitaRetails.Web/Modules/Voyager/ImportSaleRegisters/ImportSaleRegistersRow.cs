
namespace AprajitaRetails.Voyager.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Voyager"), TableName("[dbo].[ImportSaleRegisters]")]
    [DisplayName("Import Sale Registers"), InstanceName("Import Sale Registers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImportSaleRegistersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Sale Register Id"), Identity]
        public Int32? ImportSaleRegisterId
        {
            get { return Fields.ImportSaleRegisterId[this]; }
            set { Fields.ImportSaleRegisterId[this] = value; }
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

        [DisplayName("Invoice Date")]
        public String InvoiceDate
        {
            get { return Fields.InvoiceDate[this]; }
            set { Fields.InvoiceDate[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Mrp"), Column("MRP"), Size(18), Scale(2), NotNull]
        public Decimal? Mrp
        {
            get { return Fields.Mrp[this]; }
            set { Fields.Mrp[this] = value; }
        }

        [DisplayName("Discount"), Size(18), Scale(2), NotNull]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Basic Rate"), Size(18), Scale(2), NotNull]
        public Decimal? BasicRate
        {
            get { return Fields.BasicRate[this]; }
            set { Fields.BasicRate[this] = value; }
        }

        [DisplayName("Tax"), Size(18), Scale(2), NotNull]
        public Decimal? Tax
        {
            get { return Fields.Tax[this]; }
            set { Fields.Tax[this] = value; }
        }

        [DisplayName("Round Off"), Size(18), Scale(2), NotNull]
        public Decimal? RoundOff
        {
            get { return Fields.RoundOff[this]; }
            set { Fields.RoundOff[this] = value; }
        }

        [DisplayName("Bill Amnt"), Size(18), Scale(2), NotNull]
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

        [DisplayName("Is Consumed"), NotNull]
        public Boolean? IsConsumed
        {
            get { return Fields.IsConsumed[this]; }
            set { Fields.IsConsumed[this] = value; }
        }

        [DisplayName("Import Time")]
        public DateTime? ImportTime
        {
            get { return Fields.ImportTime[this]; }
            set { Fields.ImportTime[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportSaleRegisterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportSaleRegistersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportSaleRegisterId;
            public StringField InvoiceNo;
            public StringField InvoiceType;
            public StringField InvoiceDate;
            public DoubleField Quantity;
            public DecimalField Mrp;
            public DecimalField Discount;
            public DecimalField BasicRate;
            public DecimalField Tax;
            public DecimalField RoundOff;
            public DecimalField BillAmnt;
            public StringField PaymentType;
            public BooleanField IsConsumed;
            public DateTimeField ImportTime;
        }
    }
}
