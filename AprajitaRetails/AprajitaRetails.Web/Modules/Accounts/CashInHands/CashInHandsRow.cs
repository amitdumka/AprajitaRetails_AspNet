
namespace AprajitaRetails.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Accounts"), TableName("[dbo].[CashInHands]")]
    [DisplayName("Cash In Hands"), InstanceName("Cash In Hands")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CashInHandsRow : Row, IIdRow
    {
        [DisplayName("Cash In Hand Id"), Identity]
        public Int32? CashInHandId
        {
            get { return Fields.CashInHandId[this]; }
            set { Fields.CashInHandId[this] = value; }
        }

        [DisplayName("On Date"), Column("CIHDate"), NotNull]
        public DateTime? CihDate
        {
            get { return Fields.CihDate[this]; }
            set { Fields.CihDate[this] = value; }
        }

        [DisplayName("Openning Balance"), Size(18), Scale(2), NotNull]
        public Decimal? OpenningBalance
        {
            get { return Fields.OpenningBalance[this]; }
            set { Fields.OpenningBalance[this] = value; }
        }

        [DisplayName("Closing Balance"), Size(18), Scale(2), NotNull]
        public Decimal? ClosingBalance
        {
            get { return Fields.ClosingBalance[this]; }
            set { Fields.ClosingBalance[this] = value; }
        }

        [DisplayName("Cash In"), Size(18), Scale(2), NotNull]
        public Decimal? CashIn
        {
            get { return Fields.CashIn[this]; }
            set { Fields.CashIn[this] = value; }
        }

        [DisplayName("Cash Out"), Size(18), Scale(2), NotNull]
        public Decimal? CashOut
        {
            get { return Fields.CashOut[this]; }
            set { Fields.CashOut[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CashInHandId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CashInHandsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CashInHandId;
            public DateTimeField CihDate;
            public DecimalField OpenningBalance;
            public DecimalField ClosingBalance;
            public DecimalField CashIn;
            public DecimalField CashOut;
        }
    }
}
