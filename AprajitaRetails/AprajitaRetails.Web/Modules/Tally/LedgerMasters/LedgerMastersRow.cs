
namespace AprajitaRetails.Tally.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tally"), TableName("[dbo].[LedgerMasters]")]
    [DisplayName("Ledger Masters"), InstanceName("Ledger Masters")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LedgerMastersRow : Row, IIdRow
    {
        [DisplayName("Ledger Master Id"), Identity]
        public Int32? LedgerMasterId
        {
            get { return Fields.LedgerMasterId[this]; }
            set { Fields.LedgerMasterId[this] = value; }
        }

        [DisplayName("Party"), NotNull, ForeignKey("[dbo].[Parties]", "PartyId"), LeftJoin("jParty"), TextualField("PartyPartyName")]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }

        [DisplayName("Creating Date"), NotNull]
        public DateTime? CreatingDate
        {
            get { return Fields.CreatingDate[this]; }
            set { Fields.CreatingDate[this] = value; }
        }

        [DisplayName("Ledger Type"), NotNull]
        public Int32? LedgerType
        {
            get { return Fields.LedgerType[this]; }
            set { Fields.LedgerType[this] = value; }
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
            get { return Fields.LedgerMasterId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LedgerMastersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LedgerMasterId;
            public Int32Field PartyId;
            public DateTimeField CreatingDate;
            public Int32Field LedgerType;

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
