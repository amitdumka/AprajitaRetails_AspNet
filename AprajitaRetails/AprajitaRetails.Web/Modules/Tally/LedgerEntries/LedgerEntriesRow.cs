
namespace AprajitaRetails.Tally.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tally"), TableName("[dbo].[LedgerEntries]")]
    [DisplayName("Ledger Entries"), InstanceName("Ledger Entries")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LedgerEntriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ledger Entry Id"), Identity]
        public Int32? LedgerEntryId
        {
            get { return Fields.LedgerEntryId[this]; }
            set { Fields.LedgerEntryId[this] = value; }
        }

        [DisplayName("Party"), NotNull, ForeignKey("[dbo].[Parties]", "PartyId"), LeftJoin("jParty"), TextualField("PartyPartyName")]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }

        [DisplayName("Entry Date"), NotNull]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }

        [DisplayName("Particulars"), QuickSearch]
        public String Particulars
        {
            get { return Fields.Particulars[this]; }
            set { Fields.Particulars[this] = value; }
        }

        [DisplayName("Amount In"), Size(19), Scale(4), NotNull]
        public Decimal? AmountIn
        {
            get { return Fields.AmountIn[this]; }
            set { Fields.AmountIn[this] = value; }
        }

        [DisplayName("Amount Out"), Size(19), Scale(4), NotNull]
        public Decimal? AmountOut
        {
            get { return Fields.AmountOut[this]; }
            set { Fields.AmountOut[this] = value; }
        }

        [DisplayName("Balance"), Size(19), Scale(4), NotNull]
        public Decimal? Balance
        {
            get { return Fields.Balance[this]; }
            set { Fields.Balance[this] = value; }
        }

        [DisplayName("Party Party Name"), Expression("jParty.[PartyName]")]
        public String PartyPartyName
        {
            get { return Fields.PartyPartyName[this]; }
            set { Fields.PartyPartyName[this] = value; }
        }

        [DisplayName("Party Openning Date"), Expression("jParty.[OpenningDate]")]
        public DateTime? PartyOpenningDate
        {
            get { return Fields.PartyOpenningDate[this]; }
            set { Fields.PartyOpenningDate[this] = value; }
        }

        [DisplayName("Party Openning Balance"), Expression("jParty.[OpenningBalance]")]
        public Decimal? PartyOpenningBalance
        {
            get { return Fields.PartyOpenningBalance[this]; }
            set { Fields.PartyOpenningBalance[this] = value; }
        }

        [DisplayName("Party Address"), Expression("jParty.[Address]")]
        public String PartyAddress
        {
            get { return Fields.PartyAddress[this]; }
            set { Fields.PartyAddress[this] = value; }
        }

        [DisplayName("Party Pan No"), Expression("jParty.[PANNo]")]
        public String PartyPanNo
        {
            get { return Fields.PartyPanNo[this]; }
            set { Fields.PartyPanNo[this] = value; }
        }

        [DisplayName("Party Gst No"), Expression("jParty.[GSTNo]")]
        public String PartyGstNo
        {
            get { return Fields.PartyGstNo[this]; }
            set { Fields.PartyGstNo[this] = value; }
        }

        [DisplayName("Party Ledger Type"), Expression("jParty.[LedgerType]")]
        public Int32? PartyLedgerType
        {
            get { return Fields.PartyLedgerType[this]; }
            set { Fields.PartyLedgerType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LedgerEntryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Particulars; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LedgerEntriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LedgerEntryId;
            public Int32Field PartyId;
            public DateTimeField EntryDate;
            public StringField Particulars;
            public DecimalField AmountIn;
            public DecimalField AmountOut;
            public DecimalField Balance;

            public StringField PartyPartyName;
            public DateTimeField PartyOpenningDate;
            public DecimalField PartyOpenningBalance;
            public StringField PartyAddress;
            public StringField PartyPanNo;
            public StringField PartyGstNo;
            public Int32Field PartyLedgerType;
        }
    }
}
