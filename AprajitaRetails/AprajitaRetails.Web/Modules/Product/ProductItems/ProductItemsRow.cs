
namespace AprajitaRetails.Product.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Product"), TableName("[dbo].[ProductItems]")]
    [DisplayName("Product Items"), InstanceName("Product Items")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductItemsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Item Id"), Identity]
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

        [DisplayName("Brand"), NotNull, ForeignKey("[dbo].[Brands]", "BrandId"), LeftJoin("jBrand"), TextualField("BrandBrandName")]
        public Int32? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Style Code")]
        public String StyleCode
        {
            get { return Fields.StyleCode[this]; }
            set { Fields.StyleCode[this] = value; }
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

        [DisplayName("Categorys"), NotNull]
        public Int32? Categorys
        {
            get { return Fields.Categorys[this]; }
            set { Fields.Categorys[this] = value; }
        }

        [DisplayName("Mrp"), Column("MRP"), Size(18), Scale(2), NotNull]
        public Decimal? Mrp
        {
            get { return Fields.Mrp[this]; }
            set { Fields.Mrp[this] = value; }
        }

        [DisplayName("Tax Rate"), Size(18), Scale(2), NotNull]
        public Decimal? TaxRate
        {
            get { return Fields.TaxRate[this]; }
            set { Fields.TaxRate[this] = value; }
        }

        [DisplayName("Cost"), Size(18), Scale(2), NotNull]
        public Decimal? Cost
        {
            get { return Fields.Cost[this]; }
            set { Fields.Cost[this] = value; }
        }

        [DisplayName("Size"), NotNull]
        public Int32? Size
        {
            get { return Fields.Size[this]; }
            set { Fields.Size[this] = value; }
        }

        [DisplayName("Units"), NotNull]
        public Int32? Units
        {
            get { return Fields.Units[this]; }
            set { Fields.Units[this] = value; }
        }

        [DisplayName("Main Category Category"), Column("MainCategory_CategoryId"), ForeignKey("[dbo].[Categories]", "CategoryId"), LeftJoin("jMainCategoryCategory"), TextualField("MainCategoryCategoryCategoryName")]
        public Int32? MainCategoryCategoryId
        {
            get { return Fields.MainCategoryCategoryId[this]; }
            set { Fields.MainCategoryCategoryId[this] = value; }
        }

        [DisplayName("Product Category Category"), Column("ProductCategory_CategoryId"), ForeignKey("[dbo].[Categories]", "CategoryId"), LeftJoin("jProductCategoryCategory"), TextualField("ProductCategoryCategoryCategoryName")]
        public Int32? ProductCategoryCategoryId
        {
            get { return Fields.ProductCategoryCategoryId[this]; }
            set { Fields.ProductCategoryCategoryId[this] = value; }
        }

        [DisplayName("Product Type Category"), Column("ProductType_CategoryId"), ForeignKey("[dbo].[Categories]", "CategoryId"), LeftJoin("jProductTypeCategory"), TextualField("ProductTypeCategoryCategoryName")]
        public Int32? ProductTypeCategoryId
        {
            get { return Fields.ProductTypeCategoryId[this]; }
            set { Fields.ProductTypeCategoryId[this] = value; }
        }

        [DisplayName("Brand Brand Name"), Expression("jBrand.[BrandName]")]
        public String BrandBrandName
        {
            get { return Fields.BrandBrandName[this]; }
            set { Fields.BrandBrandName[this] = value; }
        }

        [DisplayName("Brand B Code"), Expression("jBrand.[BCode]")]
        public String BrandBCode
        {
            get { return Fields.BrandBCode[this]; }
            set { Fields.BrandBCode[this] = value; }
        }

        [DisplayName("Main Category Category Category Name"), Expression("jMainCategoryCategory.[CategoryName]")]
        public String MainCategoryCategoryCategoryName
        {
            get { return Fields.MainCategoryCategoryCategoryName[this]; }
            set { Fields.MainCategoryCategoryCategoryName[this] = value; }
        }

        [DisplayName("Main Category Category Is Primary Category"), Expression("jMainCategoryCategory.[IsPrimaryCategory]")]
        public Boolean? MainCategoryCategoryIsPrimaryCategory
        {
            get { return Fields.MainCategoryCategoryIsPrimaryCategory[this]; }
            set { Fields.MainCategoryCategoryIsPrimaryCategory[this] = value; }
        }

        [DisplayName("Main Category Category Is Secondary Category"), Expression("jMainCategoryCategory.[IsSecondaryCategory]")]
        public Boolean? MainCategoryCategoryIsSecondaryCategory
        {
            get { return Fields.MainCategoryCategoryIsSecondaryCategory[this]; }
            set { Fields.MainCategoryCategoryIsSecondaryCategory[this] = value; }
        }

        [DisplayName("Product Category Category Category Name"), Expression("jProductCategoryCategory.[CategoryName]")]
        public String ProductCategoryCategoryCategoryName
        {
            get { return Fields.ProductCategoryCategoryCategoryName[this]; }
            set { Fields.ProductCategoryCategoryCategoryName[this] = value; }
        }

        [DisplayName("Product Category Category Is Primary Category"), Expression("jProductCategoryCategory.[IsPrimaryCategory]")]
        public Boolean? ProductCategoryCategoryIsPrimaryCategory
        {
            get { return Fields.ProductCategoryCategoryIsPrimaryCategory[this]; }
            set { Fields.ProductCategoryCategoryIsPrimaryCategory[this] = value; }
        }

        [DisplayName("Product Category Category Is Secondary Category"), Expression("jProductCategoryCategory.[IsSecondaryCategory]")]
        public Boolean? ProductCategoryCategoryIsSecondaryCategory
        {
            get { return Fields.ProductCategoryCategoryIsSecondaryCategory[this]; }
            set { Fields.ProductCategoryCategoryIsSecondaryCategory[this] = value; }
        }

        [DisplayName("Product Type Category Category Name"), Expression("jProductTypeCategory.[CategoryName]")]
        public String ProductTypeCategoryCategoryName
        {
            get { return Fields.ProductTypeCategoryCategoryName[this]; }
            set { Fields.ProductTypeCategoryCategoryName[this] = value; }
        }

        [DisplayName("Product Type Category Is Primary Category"), Expression("jProductTypeCategory.[IsPrimaryCategory]")]
        public Boolean? ProductTypeCategoryIsPrimaryCategory
        {
            get { return Fields.ProductTypeCategoryIsPrimaryCategory[this]; }
            set { Fields.ProductTypeCategoryIsPrimaryCategory[this] = value; }
        }

        [DisplayName("Product Type Category Is Secondary Category"), Expression("jProductTypeCategory.[IsSecondaryCategory]")]
        public Boolean? ProductTypeCategoryIsSecondaryCategory
        {
            get { return Fields.ProductTypeCategoryIsSecondaryCategory[this]; }
            set { Fields.ProductTypeCategoryIsSecondaryCategory[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Barcode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductItemId;
            public StringField Barcode;
            public Int32Field BrandId;
            public StringField StyleCode;
            public StringField ProductName;
            public StringField ItemDesc;
            public Int32Field Categorys;
            public DecimalField Mrp;
            public DecimalField TaxRate;
            public DecimalField Cost;
            public Int32Field Size;
            public Int32Field Units;
            public Int32Field MainCategoryCategoryId;
            public Int32Field ProductCategoryCategoryId;
            public Int32Field ProductTypeCategoryId;

            public StringField BrandBrandName;
            public StringField BrandBCode;

            public StringField MainCategoryCategoryCategoryName;
            public BooleanField MainCategoryCategoryIsPrimaryCategory;
            public BooleanField MainCategoryCategoryIsSecondaryCategory;

            public StringField ProductCategoryCategoryCategoryName;
            public BooleanField ProductCategoryCategoryIsPrimaryCategory;
            public BooleanField ProductCategoryCategoryIsSecondaryCategory;

            public StringField ProductTypeCategoryCategoryName;
            public BooleanField ProductTypeCategoryIsPrimaryCategory;
            public BooleanField ProductTypeCategoryIsSecondaryCategory;
        }
    }
}
