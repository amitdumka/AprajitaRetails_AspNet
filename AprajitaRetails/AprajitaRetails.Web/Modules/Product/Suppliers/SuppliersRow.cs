
namespace AprajitaRetails.Product.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Product"), TableName("[dbo].[Suppliers]")]
    [DisplayName("Suppliers"), InstanceName("Suppliers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SuppliersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Supplier Id"), Column("SupplierID"), Identity]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Suppiler Name"), QuickSearch]
        public String SuppilerName
        {
            get { return Fields.SuppilerName[this]; }
            set { Fields.SuppilerName[this] = value; }
        }

        [DisplayName("Warehouse")]
        public String Warehouse
        {
            get { return Fields.Warehouse[this]; }
            set { Fields.Warehouse[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SupplierId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SuppilerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuppliersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SupplierId;
            public StringField SuppilerName;
            public StringField Warehouse;
        }
    }
}
