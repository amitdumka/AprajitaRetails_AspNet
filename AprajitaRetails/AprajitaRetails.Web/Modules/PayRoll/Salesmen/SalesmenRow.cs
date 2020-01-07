
namespace AprajitaRetails.PayRoll.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("PayRoll"), TableName("[dbo].[Salesmen]")]
    [DisplayName("Salesmen"), InstanceName("Salesmen")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SalesmenRow : Row, IIdRow, INameRow
    {
        [DisplayName("Salesman Id"), Identity]
        public Int32? SalesmanId
        {
            get { return Fields.SalesmanId[this]; }
            set { Fields.SalesmanId[this] = value; }
        }

        [DisplayName("Salesman Name"), QuickSearch]
        public String SalesmanName
        {
            get { return Fields.SalesmanName[this]; }
            set { Fields.SalesmanName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SalesmanId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SalesmanName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SalesmenRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SalesmanId;
            public StringField SalesmanName;
        }
    }
}
