
namespace AprajitaRetails.Banking.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Banking"), TableName("[dbo].[ChequesLogs]")]
    [DisplayName("Cheques Logs"), InstanceName("Cheques Logs")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ChequesLogsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cheques Log Id"), Identity]
        public Int32? ChequesLogId
        {
            get { return Fields.ChequesLogId[this]; }
            set { Fields.ChequesLogId[this] = value; }
        }

        [DisplayName("Bank Name"), QuickSearch]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        [DisplayName("Account Number")]
        public String AccountNumber
        {
            get { return Fields.AccountNumber[this]; }
            set { Fields.AccountNumber[this] = value; }
        }

        [DisplayName("Cheques Date")]
        public DateTime? ChequesDate
        {
            get { return Fields.ChequesDate[this]; }
            set { Fields.ChequesDate[this] = value; }
        }

        [DisplayName("Deposit Date")]
        public DateTime? DepositDate
        {
            get { return Fields.DepositDate[this]; }
            set { Fields.DepositDate[this] = value; }
        }

        [DisplayName("Cleared Date")]
        public DateTime? ClearedDate
        {
            get { return Fields.ClearedDate[this]; }
            set { Fields.ClearedDate[this] = value; }
        }

        [DisplayName("Issued By")]
        public String IssuedBy
        {
            get { return Fields.IssuedBy[this]; }
            set { Fields.IssuedBy[this] = value; }
        }

        [DisplayName("Issued To")]
        public String IssuedTo
        {
            get { return Fields.IssuedTo[this]; }
            set { Fields.IssuedTo[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Is Pdc"), Column("IsPDC"), NotNull]
        public Boolean? IsPdc
        {
            get { return Fields.IsPdc[this]; }
            set { Fields.IsPdc[this] = value; }
        }

        [DisplayName("Is Issued By Aprajita Retails"), NotNull]
        public Boolean? IsIssuedByAprajitaRetails
        {
            get { return Fields.IsIssuedByAprajitaRetails[this]; }
            set { Fields.IsIssuedByAprajitaRetails[this] = value; }
        }

        [DisplayName("Is Deposited On Aprajita Retails"), NotNull]
        public Boolean? IsDepositedOnAprajitaRetails
        {
            get { return Fields.IsDepositedOnAprajitaRetails[this]; }
            set { Fields.IsDepositedOnAprajitaRetails[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ChequesLogId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BankName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ChequesLogsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ChequesLogId;
            public StringField BankName;
            public StringField AccountNumber;
            public DateTimeField ChequesDate;
            public DateTimeField DepositDate;
            public DateTimeField ClearedDate;
            public StringField IssuedBy;
            public StringField IssuedTo;
            public DecimalField Amount;
            public BooleanField IsPdc;
            public BooleanField IsIssuedByAprajitaRetails;
            public BooleanField IsDepositedOnAprajitaRetails;
            public StringField Remarks;
        }
    }
}
