
namespace AprajitaRetails.Purchases.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Purchases"), TableName("[dbo].[ProductPurchases]")]
    [DisplayName("Product Purchases"), InstanceName("Product Purchases")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductPurchasesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Purchase Id"), Identity]
        public Int32? ProductPurchaseId
        {
            get { return Fields.ProductPurchaseId[this]; }
            set { Fields.ProductPurchaseId[this] = value; }
        }

        [DisplayName("In Ward No"), QuickSearch]
        public String InWardNo
        {
            get { return Fields.InWardNo[this]; }
            set { Fields.InWardNo[this] = value; }
        }

        [DisplayName("In Ward Date"), NotNull]
        public DateTime? InWardDate
        {
            get { return Fields.InWardDate[this]; }
            set { Fields.InWardDate[this] = value; }
        }

        [DisplayName("Purchase Date"), NotNull]
        public DateTime? PurchaseDate
        {
            get { return Fields.PurchaseDate[this]; }
            set { Fields.PurchaseDate[this] = value; }
        }

        [DisplayName("Invoice No")]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Total Qty"), NotNull]
        public Double? TotalQty
        {
            get { return Fields.TotalQty[this]; }
            set { Fields.TotalQty[this] = value; }
        }

        [DisplayName("Total Basic Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TotalBasicAmount
        {
            get { return Fields.TotalBasicAmount[this]; }
            set { Fields.TotalBasicAmount[this] = value; }
        }

        [DisplayName("Shipping Cost"), Size(19), Scale(4), NotNull]
        public Decimal? ShippingCost
        {
            get { return Fields.ShippingCost[this]; }
            set { Fields.ShippingCost[this] = value; }
        }

        [DisplayName("Total Tax"), Size(19), Scale(4), NotNull]
        public Decimal? TotalTax
        {
            get { return Fields.TotalTax[this]; }
            set { Fields.TotalTax[this] = value; }
        }

        [DisplayName("Total Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Supplier"), Column("SupplierID"), NotNull, ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierSuppilerName")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Is Paid"), NotNull]
        public Boolean? IsPaid
        {
            get { return Fields.IsPaid[this]; }
            set { Fields.IsPaid[this] = value; }
        }

        [DisplayName("Supplier Suppiler Name"), Expression("jSupplier.[SuppilerName]")]
        public String SupplierSuppilerName
        {
            get { return Fields.SupplierSuppilerName[this]; }
            set { Fields.SupplierSuppilerName[this] = value; }
        }

        [DisplayName("Supplier Warehouse"), Expression("jSupplier.[Warehouse]")]
        public String SupplierWarehouse
        {
            get { return Fields.SupplierWarehouse[this]; }
            set { Fields.SupplierWarehouse[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductPurchaseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InWardNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductPurchasesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductPurchaseId;
            public StringField InWardNo;
            public DateTimeField InWardDate;
            public DateTimeField PurchaseDate;
            public StringField InvoiceNo;
            public DoubleField TotalQty;
            public DecimalField TotalBasicAmount;
            public DecimalField ShippingCost;
            public DecimalField TotalTax;
            public DecimalField TotalAmount;
            public StringField Remarks;
            public Int32Field SupplierId;
            public BooleanField IsPaid;

            public StringField SupplierSuppilerName;
            public StringField SupplierWarehouse;
        }
    }
}
