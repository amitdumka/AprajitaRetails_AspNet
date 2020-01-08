
namespace AprajitaRetails.Voyager.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Voyager"), TableName("[dbo].[ImportPurchases]")]
    [DisplayName("Import Purchases"), InstanceName("Import Purchases")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImportPurchasesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Purchase Id"), Identity]
        public Int32? ImportPurchaseId
        {
            get { return Fields.ImportPurchaseId[this]; }
            set { Fields.ImportPurchaseId[this] = value; }
        }

        [DisplayName("Grn No"), Column("GRNNo"), QuickSearch]
        public String GrnNo
        {
            get { return Fields.GrnNo[this]; }
            set { Fields.GrnNo[this] = value; }
        }

        [DisplayName("Grn Date"), Column("GRNDate"), NotNull]
        public DateTime? GrnDate
        {
            get { return Fields.GrnDate[this]; }
            set { Fields.GrnDate[this] = value; }
        }

        [DisplayName("Invoice No")]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Date"), NotNull]
        public DateTime? InvoiceDate
        {
            get { return Fields.InvoiceDate[this]; }
            set { Fields.InvoiceDate[this] = value; }
        }

        [DisplayName("Supplier Name")]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [DisplayName("Barcode")]
        public String Barcode
        {
            get { return Fields.Barcode[this]; }
            set { Fields.Barcode[this] = value; }
        }

        [DisplayName("Product Name")]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Style Code")]
        public String StyleCode
        {
            get { return Fields.StyleCode[this]; }
            set { Fields.StyleCode[this] = value; }
        }

        [DisplayName("Item Desc")]
        public String ItemDesc
        {
            get { return Fields.ItemDesc[this]; }
            set { Fields.ItemDesc[this] = value; }
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

        [DisplayName("Mrp Value"), Column("MRPValue"), Size(19), Scale(4), NotNull]
        public Decimal? MrpValue
        {
            get { return Fields.MrpValue[this]; }
            set { Fields.MrpValue[this] = value; }
        }

        [DisplayName("Cost"), Size(19), Scale(4), NotNull]
        public Decimal? Cost
        {
            get { return Fields.Cost[this]; }
            set { Fields.Cost[this] = value; }
        }

        [DisplayName("Cost Value"), Size(19), Scale(4), NotNull]
        public Decimal? CostValue
        {
            get { return Fields.CostValue[this]; }
            set { Fields.CostValue[this] = value; }
        }

        [DisplayName("Tax Amt"), Size(19), Scale(4), NotNull]
        public Decimal? TaxAmt
        {
            get { return Fields.TaxAmt[this]; }
            set { Fields.TaxAmt[this] = value; }
        }

        [DisplayName("Is Vat Bill"), NotNull]
        public Boolean? IsVatBill
        {
            get { return Fields.IsVatBill[this]; }
            set { Fields.IsVatBill[this] = value; }
        }

        [DisplayName("Is Local"), NotNull]
        public Boolean? IsLocal
        {
            get { return Fields.IsLocal[this]; }
            set { Fields.IsLocal[this] = value; }
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
            get { return Fields.ImportPurchaseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GrnNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportPurchasesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportPurchaseId;
            public StringField GrnNo;
            public DateTimeField GrnDate;
            public StringField InvoiceNo;
            public DateTimeField InvoiceDate;
            public StringField SupplierName;
            public StringField Barcode;
            public StringField ProductName;
            public StringField StyleCode;
            public StringField ItemDesc;
            public DoubleField Quantity;
            public DecimalField Mrp;
            public DecimalField MrpValue;
            public DecimalField Cost;
            public DecimalField CostValue;
            public DecimalField TaxAmt;
            public BooleanField IsVatBill;
            public BooleanField IsLocal;
            public BooleanField IsDataConsumed;
            public DateTimeField ImportTime;
        }
    }
}
