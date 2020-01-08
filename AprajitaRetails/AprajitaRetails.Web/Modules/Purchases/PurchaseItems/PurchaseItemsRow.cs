
namespace AprajitaRetails.Purchases.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Purchases"), TableName("[dbo].[PurchaseItems]")]
    [DisplayName("Purchase Items"), InstanceName("Purchase Items")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseItemsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Item Id"), Identity]
        public Int32? PurchaseItemId
        {
            get { return Fields.PurchaseItemId[this]; }
            set { Fields.PurchaseItemId[this] = value; }
        }

        [DisplayName("Product Purchase"), NotNull, ForeignKey("[dbo].[ProductPurchases]", "ProductPurchaseId"), LeftJoin("jProductPurchase"), TextualField("ProductPurchaseInWardNo")]
        public Int32? ProductPurchaseId
        {
            get { return Fields.ProductPurchaseId[this]; }
            set { Fields.ProductPurchaseId[this] = value; }
        }

        [DisplayName("Product Item"), NotNull, ForeignKey("[dbo].[ProductItems]", "ProductItemId"), LeftJoin("jProductItem"), TextualField("ProductItemBarcode")]
        public Int32? ProductItemId
        {
            get { return Fields.ProductItemId[this]; }
            set { Fields.ProductItemId[this] = value; }
        }

        [DisplayName("Barcode"), QuickSearch]
        public String Barcode
        {
            get { return Fields.Barcode[this]; }
            set { Fields.Barcode[this] = value; }
        }

        [DisplayName("Qty"), NotNull]
        public Double? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Unit"), NotNull]
        public Int32? Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Cost"), Size(19), Scale(4), NotNull]
        public Decimal? Cost
        {
            get { return Fields.Cost[this]; }
            set { Fields.Cost[this] = value; }
        }

        [DisplayName("Tax Amout"), Size(19), Scale(4), NotNull]
        public Decimal? TaxAmout
        {
            get { return Fields.TaxAmout[this]; }
            set { Fields.TaxAmout[this] = value; }
        }

        [DisplayName("Purchase Tax Type"), ForeignKey("[dbo].[PurchaseTaxTypes]", "PurchaseTaxTypeId"), LeftJoin("jPurchaseTaxType"), TextualField("PurchaseTaxTypeTaxName")]
        public Int32? PurchaseTaxTypeId
        {
            get { return Fields.PurchaseTaxTypeId[this]; }
            set { Fields.PurchaseTaxTypeId[this] = value; }
        }

        [DisplayName("Cost Value"), Size(19), Scale(4), NotNull]
        public Decimal? CostValue
        {
            get { return Fields.CostValue[this]; }
            set { Fields.CostValue[this] = value; }
        }

        [DisplayName("Product Purchase In Ward No"), Expression("jProductPurchase.[InWardNo]")]
        public String ProductPurchaseInWardNo
        {
            get { return Fields.ProductPurchaseInWardNo[this]; }
            set { Fields.ProductPurchaseInWardNo[this] = value; }
        }

        [DisplayName("Product Purchase In Ward Date"), Expression("jProductPurchase.[InWardDate]")]
        public DateTime? ProductPurchaseInWardDate
        {
            get { return Fields.ProductPurchaseInWardDate[this]; }
            set { Fields.ProductPurchaseInWardDate[this] = value; }
        }

        [DisplayName("Product Purchase Purchase Date"), Expression("jProductPurchase.[PurchaseDate]")]
        public DateTime? ProductPurchasePurchaseDate
        {
            get { return Fields.ProductPurchasePurchaseDate[this]; }
            set { Fields.ProductPurchasePurchaseDate[this] = value; }
        }

        [DisplayName("Product Purchase Invoice No"), Expression("jProductPurchase.[InvoiceNo]")]
        public String ProductPurchaseInvoiceNo
        {
            get { return Fields.ProductPurchaseInvoiceNo[this]; }
            set { Fields.ProductPurchaseInvoiceNo[this] = value; }
        }

        [DisplayName("Product Purchase Total Qty"), Expression("jProductPurchase.[TotalQty]")]
        public Double? ProductPurchaseTotalQty
        {
            get { return Fields.ProductPurchaseTotalQty[this]; }
            set { Fields.ProductPurchaseTotalQty[this] = value; }
        }

        [DisplayName("Product Purchase Total Basic Amount"), Expression("jProductPurchase.[TotalBasicAmount]")]
        public Decimal? ProductPurchaseTotalBasicAmount
        {
            get { return Fields.ProductPurchaseTotalBasicAmount[this]; }
            set { Fields.ProductPurchaseTotalBasicAmount[this] = value; }
        }

        [DisplayName("Product Purchase Shipping Cost"), Expression("jProductPurchase.[ShippingCost]")]
        public Decimal? ProductPurchaseShippingCost
        {
            get { return Fields.ProductPurchaseShippingCost[this]; }
            set { Fields.ProductPurchaseShippingCost[this] = value; }
        }

        [DisplayName("Product Purchase Total Tax"), Expression("jProductPurchase.[TotalTax]")]
        public Decimal? ProductPurchaseTotalTax
        {
            get { return Fields.ProductPurchaseTotalTax[this]; }
            set { Fields.ProductPurchaseTotalTax[this] = value; }
        }

        [DisplayName("Product Purchase Total Amount"), Expression("jProductPurchase.[TotalAmount]")]
        public Decimal? ProductPurchaseTotalAmount
        {
            get { return Fields.ProductPurchaseTotalAmount[this]; }
            set { Fields.ProductPurchaseTotalAmount[this] = value; }
        }

        [DisplayName("Product Purchase Remarks"), Expression("jProductPurchase.[Remarks]")]
        public String ProductPurchaseRemarks
        {
            get { return Fields.ProductPurchaseRemarks[this]; }
            set { Fields.ProductPurchaseRemarks[this] = value; }
        }

        [DisplayName("Product Purchase Supplier Id"), Expression("jProductPurchase.[SupplierID]")]
        public Int32? ProductPurchaseSupplierId
        {
            get { return Fields.ProductPurchaseSupplierId[this]; }
            set { Fields.ProductPurchaseSupplierId[this] = value; }
        }

        [DisplayName("Product Purchase Is Paid"), Expression("jProductPurchase.[IsPaid]")]
        public Boolean? ProductPurchaseIsPaid
        {
            get { return Fields.ProductPurchaseIsPaid[this]; }
            set { Fields.ProductPurchaseIsPaid[this] = value; }
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

        [DisplayName("Purchase Tax Type Tax Name"), Expression("jPurchaseTaxType.[TaxName]")]
        public String PurchaseTaxTypeTaxName
        {
            get { return Fields.PurchaseTaxTypeTaxName[this]; }
            set { Fields.PurchaseTaxTypeTaxName[this] = value; }
        }

        [DisplayName("Purchase Tax Type Tax Type"), Expression("jPurchaseTaxType.[TaxType]")]
        public Int32? PurchaseTaxTypeTaxType
        {
            get { return Fields.PurchaseTaxTypeTaxType[this]; }
            set { Fields.PurchaseTaxTypeTaxType[this] = value; }
        }

        [DisplayName("Purchase Tax Type Composite Rate"), Expression("jPurchaseTaxType.[CompositeRate]")]
        public Decimal? PurchaseTaxTypeCompositeRate
        {
            get { return Fields.PurchaseTaxTypeCompositeRate[this]; }
            set { Fields.PurchaseTaxTypeCompositeRate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Barcode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseItemId;
            public Int32Field ProductPurchaseId;
            public Int32Field ProductItemId;
            public StringField Barcode;
            public DoubleField Qty;
            public Int32Field Unit;
            public DecimalField Cost;
            public DecimalField TaxAmout;
            public Int32Field PurchaseTaxTypeId;
            public DecimalField CostValue;

            public StringField ProductPurchaseInWardNo;
            public DateTimeField ProductPurchaseInWardDate;
            public DateTimeField ProductPurchasePurchaseDate;
            public StringField ProductPurchaseInvoiceNo;
            public DoubleField ProductPurchaseTotalQty;
            public DecimalField ProductPurchaseTotalBasicAmount;
            public DecimalField ProductPurchaseShippingCost;
            public DecimalField ProductPurchaseTotalTax;
            public DecimalField ProductPurchaseTotalAmount;
            public StringField ProductPurchaseRemarks;
            public Int32Field ProductPurchaseSupplierId;
            public BooleanField ProductPurchaseIsPaid;

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

            public StringField PurchaseTaxTypeTaxName;
            public Int32Field PurchaseTaxTypeTaxType;
            public DecimalField PurchaseTaxTypeCompositeRate;
        }
    }
}
