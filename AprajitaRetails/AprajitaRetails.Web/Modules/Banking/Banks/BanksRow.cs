
namespace AprajitaRetails.Banking.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Banking"), TableName("[dbo].[Banks]")]
    [DisplayName("Banks"), InstanceName("Banks")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BanksRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bank Id"), Identity]
        public Int32? BankId
        {
            get { return Fields.BankId[this]; }
            set { Fields.BankId[this] = value; }
        }

        [DisplayName("Bank Name"), QuickSearch]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BankId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BankName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BanksRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BankId;
            public StringField BankName;
        }
    }
}
