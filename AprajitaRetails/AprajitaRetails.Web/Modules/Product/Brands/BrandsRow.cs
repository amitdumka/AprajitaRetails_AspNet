
namespace AprajitaRetails.Product.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Product"), TableName("[dbo].[Brands]")]
    [DisplayName("Brands"), InstanceName("Brands")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BrandsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Brand Id"), Identity]
        public Int32? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Brand Name"), QuickSearch]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }

        [DisplayName("B Code")]
        public String BCode
        {
            get { return Fields.BCode[this]; }
            set { Fields.BCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BrandId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BrandName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BrandsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BrandId;
            public StringField BrandName;
            public StringField BCode;
        }
    }
}
