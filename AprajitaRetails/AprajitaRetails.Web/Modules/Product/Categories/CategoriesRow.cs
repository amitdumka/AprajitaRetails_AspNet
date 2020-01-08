
namespace AprajitaRetails.Product.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Product"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Categories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CategoriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Id"), Identity]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Category Name"), QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Is Primary Category"), NotNull]
        public Boolean? IsPrimaryCategory
        {
            get { return Fields.IsPrimaryCategory[this]; }
            set { Fields.IsPrimaryCategory[this] = value; }
        }

        [DisplayName("Is Secondary Category"), NotNull]
        public Boolean? IsSecondaryCategory
        {
            get { return Fields.IsSecondaryCategory[this]; }
            set { Fields.IsSecondaryCategory[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public StringField CategoryName;
            public BooleanField IsPrimaryCategory;
            public BooleanField IsSecondaryCategory;
        }
    }
}
