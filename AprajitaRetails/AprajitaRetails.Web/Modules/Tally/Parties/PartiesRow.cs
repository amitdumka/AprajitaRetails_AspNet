
namespace AprajitaRetails.Tally.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tally"), TableName("[dbo].[Parties]")]
    [DisplayName("Parties"), InstanceName("Parties")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PartiesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Party Id"), Identity]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }

        [DisplayName("Party Name"), QuickSearch]
        public String PartyName
        {
            get { return Fields.PartyName[this]; }
            set { Fields.PartyName[this] = value; }
        }

        [DisplayName("Openning Date"), NotNull]
        public DateTime? OpenningDate
        {
            get { return Fields.OpenningDate[this]; }
            set { Fields.OpenningDate[this] = value; }
        }

        [DisplayName("Openning Balance"), Size(19), Scale(4), NotNull]
        public Decimal? OpenningBalance
        {
            get { return Fields.OpenningBalance[this]; }
            set { Fields.OpenningBalance[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Pan No"), Column("PANNo")]
        public String PanNo
        {
            get { return Fields.PanNo[this]; }
            set { Fields.PanNo[this] = value; }
        }

        [DisplayName("Gst No"), Column("GSTNo")]
        public String GstNo
        {
            get { return Fields.GstNo[this]; }
            set { Fields.GstNo[this] = value; }
        }

        [DisplayName("Ledger Type"), NotNull]
        public Int32? LedgerType
        {
            get { return Fields.LedgerType[this]; }
            set { Fields.LedgerType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PartyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PartyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PartiesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PartyId;
            public StringField PartyName;
            public DateTimeField OpenningDate;
            public DecimalField OpenningBalance;
            public StringField Address;
            public StringField PanNo;
            public StringField GstNo;
            public Int32Field LedgerType;
        }
    }
}
