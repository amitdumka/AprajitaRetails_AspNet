
namespace AprajitaRetails.Banking.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Banking"), TableName("[dbo].[BankDeposits]")]
    [DisplayName("Bank Deposits"), InstanceName("Bank Deposits")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BankDepositsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bank Deposit Id"), Identity]
        public Int32? BankDepositId
        {
            get { return Fields.BankDepositId[this]; }
            set { Fields.BankDepositId[this] = value; }
        }

        [DisplayName("Depo Date"), NotNull]
        public DateTime? DepoDate
        {
            get { return Fields.DepoDate[this]; }
            set { Fields.DepoDate[this] = value; }
        }

        [DisplayName("Account Number"), NotNull, ForeignKey("[dbo].[AccountNumbers]", "AccountNumberId"), LeftJoin("jAccountNumber"), TextualField("AccountNumberAccount")]
        public Int32? AccountNumberId
        {
            get { return Fields.AccountNumberId[this]; }
            set { Fields.AccountNumberId[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Pay Mode"), NotNull]
        public Int32? PayMode
        {
            get { return Fields.PayMode[this]; }
            set { Fields.PayMode[this] = value; }
        }

        [DisplayName("Details"), QuickSearch]
        public String Details
        {
            get { return Fields.Details[this]; }
            set { Fields.Details[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Account Number Bank Id"), Expression("jAccountNumber.[BankId]")]
        public Int32? AccountNumberBankId
        {
            get { return Fields.AccountNumberBankId[this]; }
            set { Fields.AccountNumberBankId[this] = value; }
        }

        [DisplayName("Account Number Account"), Expression("jAccountNumber.[Account]")]
        public String AccountNumberAccount
        {
            get { return Fields.AccountNumberAccount[this]; }
            set { Fields.AccountNumberAccount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BankDepositId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Details; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BankDepositsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BankDepositId;
            public DateTimeField DepoDate;
            public Int32Field AccountNumberId;
            public DecimalField Amount;
            public Int32Field PayMode;
            public StringField Details;
            public StringField Remarks;

            public Int32Field AccountNumberBankId;
            public StringField AccountNumberAccount;
        }
    }
}
