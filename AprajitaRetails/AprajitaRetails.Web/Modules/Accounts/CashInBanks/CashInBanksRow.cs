
namespace AprajitaRetails.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Accounts"), TableName("[dbo].[CashInBanks]")]
    [DisplayName("Cash In Banks"), InstanceName("Cash In Banks")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CashInBanksRow : Row, IIdRow
    {
        [DisplayName("Cash In Bank Id"), Identity]
        public Int32? CashInBankId
        {
            get { return Fields.CashInBankId[this]; }
            set { Fields.CashInBankId[this] = value; }
        }

        [DisplayName("Cib Date"), Column("CIBDate"), NotNull]
        public DateTime? CibDate
        {
            get { return Fields.CibDate[this]; }
            set { Fields.CibDate[this] = value; }
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
            get { return Fields.CashInBankId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CashInBanksRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CashInBankId;
            public DateTimeField CibDate;
            public DecimalField OpenningBalance;
            public DecimalField ClosingBalance;
            public DecimalField CashIn;
            public DecimalField CashOut;
        }
    }
}
