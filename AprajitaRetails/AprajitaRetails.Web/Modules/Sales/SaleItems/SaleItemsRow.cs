
namespace AprajitaRetails.Sales.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Sales"), TableName("[dbo].[SaleItems]")]
    [DisplayName("Sale Items"), InstanceName("Sale Items")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SaleItemsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sale Item Id"), Identity]
        public Int32? SaleItemId
        {
            get { return Fields.SaleItemId[this]; }
            set { Fields.SaleItemId[this] = value; }
        }

        [DisplayName("Sale Invoice"), NotNull, ForeignKey("[dbo].[SaleInvoices]", "SaleInvoiceId"), LeftJoin("jSaleInvoice"), TextualField("SaleInvoiceInvoiceNo")]
        public Int32? SaleInvoiceId
        {
            get { return Fields.SaleInvoiceId[this]; }
            set { Fields.SaleInvoiceId[this] = value; }
        }

        [DisplayName("Product Item"), NotNull, ForeignKey("[dbo].[ProductItems]", "ProductItemId"), LeftJoin("jProductItem"), TextualField("ProductItemBarcode")]
        public Int32? ProductItemId
        {
            get { return Fields.ProductItemId[this]; }
            set { Fields.ProductItemId[this] = value; }
        }

        [DisplayName("Bar Code"), QuickSearch]
        public String BarCode
        {
            get { return Fields.BarCode[this]; }
            set { Fields.BarCode[this] = value; }
        }

        [DisplayName("Qty"), NotNull]
        public Double? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Units"), NotNull]
        public Int32? Units
        {
            get { return Fields.Units[this]; }
            set { Fields.Units[this] = value; }
        }

        [DisplayName("Mrp"), Column("MRP"), Size(19), Scale(4), NotNull]
        public Decimal? Mrp
        {
            get { return Fields.Mrp[this]; }
            set { Fields.Mrp[this] = value; }
        }

        [DisplayName("Basic Amount"), Size(19), Scale(4), NotNull]
        public Decimal? BasicAmount
        {
            get { return Fields.BasicAmount[this]; }
            set { Fields.BasicAmount[this] = value; }
        }

        [DisplayName("Discount"), Size(19), Scale(4), NotNull]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Tax Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }

        [DisplayName("Sale Tax Type"), ForeignKey("[dbo].[SaleTaxTypes]", "SaleTaxTypeId"), LeftJoin("jSaleTaxType"), TextualField("SaleTaxTypeTaxName")]
        public Int32? SaleTaxTypeId
        {
            get { return Fields.SaleTaxTypeId[this]; }
            set { Fields.SaleTaxTypeId[this] = value; }
        }

        [DisplayName("Bill Amount"), Size(19), Scale(4), NotNull]
        public Decimal? BillAmount
        {
            get { return Fields.BillAmount[this]; }
            set { Fields.BillAmount[this] = value; }
        }

        [DisplayName("Salesman"), NotNull, ForeignKey("[dbo].[Salesmen]", "SalesmanId"), LeftJoin("jSalesman"), TextualField("SalesmanSalesmanName")]
        public Int32? SalesmanId
        {
            get { return Fields.SalesmanId[this]; }
            set { Fields.SalesmanId[this] = value; }
        }

        [DisplayName("Sale Invoice Customer Id"), Expression("jSaleInvoice.[CustomerId]")]
        public Int32? SaleInvoiceCustomerId
        {
            get { return Fields.SaleInvoiceCustomerId[this]; }
            set { Fields.SaleInvoiceCustomerId[this] = value; }
        }

        [DisplayName("Sale Invoice On Date"), Expression("jSaleInvoice.[OnDate]")]
        public DateTime? SaleInvoiceOnDate
        {
            get { return Fields.SaleInvoiceOnDate[this]; }
            set { Fields.SaleInvoiceOnDate[this] = value; }
        }

        [DisplayName("Sale Invoice Invoice No"), Expression("jSaleInvoice.[InvoiceNo]")]
        public String SaleInvoiceInvoiceNo
        {
            get { return Fields.SaleInvoiceInvoiceNo[this]; }
            set { Fields.SaleInvoiceInvoiceNo[this] = value; }
        }

        [DisplayName("Sale Invoice Total Items"), Expression("jSaleInvoice.[TotalItems]")]
        public Int32? SaleInvoiceTotalItems
        {
            get { return Fields.SaleInvoiceTotalItems[this]; }
            set { Fields.SaleInvoiceTotalItems[this] = value; }
        }

        [DisplayName("Sale Invoice Total Qty"), Expression("jSaleInvoice.[TotalQty]")]
        public Double? SaleInvoiceTotalQty
        {
            get { return Fields.SaleInvoiceTotalQty[this]; }
            set { Fields.SaleInvoiceTotalQty[this] = value; }
        }

        [DisplayName("Sale Invoice Total Bill Amount"), Expression("jSaleInvoice.[TotalBillAmount]")]
        public Decimal? SaleInvoiceTotalBillAmount
        {
            get { return Fields.SaleInvoiceTotalBillAmount[this]; }
            set { Fields.SaleInvoiceTotalBillAmount[this] = value; }
        }

        [DisplayName("Sale Invoice Total Discount Amount"), Expression("jSaleInvoice.[TotalDiscountAmount]")]
        public Decimal? SaleInvoiceTotalDiscountAmount
        {
            get { return Fields.SaleInvoiceTotalDiscountAmount[this]; }
            set { Fields.SaleInvoiceTotalDiscountAmount[this] = value; }
        }

        [DisplayName("Sale Invoice Round Off Amount"), Expression("jSaleInvoice.[RoundOffAmount]")]
        public Decimal? SaleInvoiceRoundOffAmount
        {
            get { return Fields.SaleInvoiceRoundOffAmount[this]; }
            set { Fields.SaleInvoiceRoundOffAmount[this] = value; }
        }

        [DisplayName("Sale Invoice Total Tax Amount"), Expression("jSaleInvoice.[TotalTaxAmount]")]
        public Decimal? SaleInvoiceTotalTaxAmount
        {
            get { return Fields.SaleInvoiceTotalTaxAmount[this]; }
            set { Fields.SaleInvoiceTotalTaxAmount[this] = value; }
        }

        [DisplayName("Product Item Barcode"), Expression("jProductItem.[Barcode]")]
        public String ProductItemBarcode
        {
            get { return Fields.ProductItemBarcode[this]; }
            set { Fields.ProductItemBarcode[this] = value; }
        }

        [DisplayName("Product Item Brand Id"), Expression("jProductItem.[BrandId]")]
        public Int32? ProductItemBrandId
        {
            get { return Fields.ProductItemBrandId[this]; }
            set { Fields.ProductItemBrandId[this] = value; }
        }

        [DisplayName("Product Item Style Code"), Expression("jProductItem.[StyleCode]")]
        public String ProductItemStyleCode
        {
            get { return Fields.ProductItemStyleCode[this]; }
            set { Fields.ProductItemStyleCode[this] = value; }
        }

        [DisplayName("Product Item Product Name"), Expression("jProductItem.[ProductName]")]
        public String ProductItemProductName
        {
            get { return Fields.ProductItemProductName[this]; }
            set { Fields.ProductItemProductName[this] = value; }
        }

        [DisplayName("Product Item Item Desc"), Expression("jProductItem.[ItemDesc]")]
        public String ProductItemItemDesc
        {
            get { return Fields.ProductItemItemDesc[this]; }
            set { Fields.ProductItemItemDesc[this] = value; }
        }

        [DisplayName("Product Item Categorys"), Expression("jProductItem.[Categorys]")]
        public Int32? ProductItemCategorys
        {
            get { return Fields.ProductItemCategorys[this]; }
            set { Fields.ProductItemCategorys[this] = value; }
        }

        [DisplayName("Product Item Mrp"), Expression("jProductItem.[MRP]")]
        public Decimal? ProductItemMrp
        {
            get { return Fields.ProductItemMrp[this]; }
            set { Fields.ProductItemMrp[this] = value; }
        }

        [DisplayName("Product Item Tax Rate"), Expression("jProductItem.[TaxRate]")]
        public Decimal? ProductItemTaxRate
        {
            get { return Fields.ProductItemTaxRate[this]; }
            set { Fields.ProductItemTaxRate[this] = value; }
        }

        [DisplayName("Product Item Cost"), Expression("jProductItem.[Cost]")]
        public Decimal? ProductItemCost
        {
            get { return Fields.ProductItemCost[this]; }
            set { Fields.ProductItemCost[this] = value; }
        }

        [DisplayName("Product Item Size"), Expression("jProductItem.[Size]")]
        public Int32? ProductItemSize
        {
            get { return Fields.ProductItemSize[this]; }
            set { Fields.ProductItemSize[this] = value; }
        }

        [DisplayName("Product Item Units"), Expression("jProductItem.[Units]")]
        public Int32? ProductItemUnits
        {
            get { return Fields.ProductItemUnits[this]; }
            set { Fields.ProductItemUnits[this] = value; }
        }

        [DisplayName("Product Item Main Category Category Id"), Expression("jProductItem.[MainCategory_CategoryId]")]
        public Int32? ProductItemMainCategoryCategoryId
        {
            get { return Fields.ProductItemMainCategoryCategoryId[this]; }
            set { Fields.ProductItemMainCategoryCategoryId[this] = value; }
        }

        [DisplayName("Product Item Product Category Category Id"), Expression("jProductItem.[ProductCategory_CategoryId]")]
        public Int32? ProductItemProductCategoryCategoryId
        {
            get { return Fields.ProductItemProductCategoryCategoryId[this]; }
            set { Fields.ProductItemProductCategoryCategoryId[this] = value; }
        }

        [DisplayName("Product Item Product Type Category Id"), Expression("jProductItem.[ProductType_CategoryId]")]
        public Int32? ProductItemProductTypeCategoryId
        {
            get { return Fields.ProductItemProductTypeCategoryId[this]; }
            set { Fields.ProductItemProductTypeCategoryId[this] = value; }
        }

        [DisplayName("Sale Tax Type Tax Name"), Expression("jSaleTaxType.[TaxName]")]
        public String SaleTaxTypeTaxName
        {
            get { return Fields.SaleTaxTypeTaxName[this]; }
            set { Fields.SaleTaxTypeTaxName[this] = value; }
        }

        [DisplayName("Sale Tax Type Tax Type"), Expression("jSaleTaxType.[TaxType]")]
        public Int32? SaleTaxTypeTaxType
        {
            get { return Fields.SaleTaxTypeTaxType[this]; }
            set { Fields.SaleTaxTypeTaxType[this] = value; }
        }

        [DisplayName("Sale Tax Type Composite Rate"), Expression("jSaleTaxType.[CompositeRate]")]
        public Decimal? SaleTaxTypeCompositeRate
        {
            get { return Fields.SaleTaxTypeCompositeRate[this]; }
            set { Fields.SaleTaxTypeCompositeRate[this] = value; }
        }

        [DisplayName("Salesman Salesman Name"), Expression("jSalesman.[SalesmanName]")]
        public String SalesmanSalesmanName
        {
            get { return Fields.SalesmanSalesmanName[this]; }
            set { Fields.SalesmanSalesmanName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SaleItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BarCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SaleItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SaleItemId;
            public Int32Field SaleInvoiceId;
            public Int32Field ProductItemId;
            public StringField BarCode;
            public DoubleField Qty;
            public Int32Field Units;
            public DecimalField Mrp;
            public DecimalField BasicAmount;
            public DecimalField Discount;
            public DecimalField TaxAmount;
            public Int32Field SaleTaxTypeId;
            public DecimalField BillAmount;
            public Int32Field SalesmanId;

            public Int32Field SaleInvoiceCustomerId;
            public DateTimeField SaleInvoiceOnDate;
            public StringField SaleInvoiceInvoiceNo;
            public Int32Field SaleInvoiceTotalItems;
            public DoubleField SaleInvoiceTotalQty;
            public DecimalField SaleInvoiceTotalBillAmount;
            public DecimalField SaleInvoiceTotalDiscountAmount;
            public DecimalField SaleInvoiceRoundOffAmount;
            public DecimalField SaleInvoiceTotalTaxAmount;

            public StringField ProductItemBarcode;
            public Int32Field ProductItemBrandId;
            public StringField ProductItemStyleCode;
            public StringField ProductItemProductName;
            public StringField ProductItemItemDesc;
            public Int32Field ProductItemCategorys;
            public DecimalField ProductItemMrp;
            public DecimalField ProductItemTaxRate;
            public DecimalField ProductItemCost;
            public Int32Field ProductItemSize;
            public Int32Field ProductItemUnits;
            public Int32Field ProductItemMainCategoryCategoryId;
            public Int32Field ProductItemProductCategoryCategoryId;
            public Int32Field ProductItemProductTypeCategoryId;

            public StringField SaleTaxTypeTaxName;
            public Int32Field SaleTaxTypeTaxType;
            public DecimalField SaleTaxTypeCompositeRate;

            public StringField SalesmanSalesmanName;
        }
    }
}
