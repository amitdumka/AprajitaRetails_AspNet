
namespace AprajitaRetails.Product.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Product"), TableName("[dbo].[Stocks]")]
    [DisplayName("Stocks"), InstanceName("Stocks")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StocksRow : Row, IIdRow
    {
        [DisplayName("Stock Id"), Column("StockID"), Identity]
        public Int32? StockId
        {
            get { return Fields.StockId[this]; }
            set { Fields.StockId[this] = value; }
        }

        [DisplayName("Product Item"), NotNull, ForeignKey("[dbo].[ProductItems]", "ProductItemId"), LeftJoin("jProductItem"), TextualField("ProductItemBarcode")]
        public Int32? ProductItemId
        {
            get { return Fields.ProductItemId[this]; }
            set { Fields.ProductItemId[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Sale Qty"), NotNull]
        public Double? SaleQty
        {
            get { return Fields.SaleQty[this]; }
            set { Fields.SaleQty[this] = value; }
        }

        [DisplayName("Purchase Qty"), NotNull]
        public Double? PurchaseQty
        {
            get { return Fields.PurchaseQty[this]; }
            set { Fields.PurchaseQty[this] = value; }
        }

        [DisplayName("Units"), NotNull]
        public Int32? Units
        {
            get { return Fields.Units[this]; }
            set { Fields.Units[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.StockId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StocksRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StockId;
            public Int32Field ProductItemId;
            public DoubleField Quantity;
            public DoubleField SaleQty;
            public DoubleField PurchaseQty;
            public Int32Field Units;

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
        }
    }
}
