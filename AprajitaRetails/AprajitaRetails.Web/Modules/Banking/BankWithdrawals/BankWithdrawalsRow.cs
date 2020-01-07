
namespace AprajitaRetails.Banking.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Banking"), TableName("[dbo].[BankWithdrawals]")]
    [DisplayName("Bank Withdrawals"), InstanceName("Bank Withdrawals")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BankWithdrawalsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bank Withdrawal Id"), Identity]
        public Int32? BankWithdrawalId
        {
            get { return Fields.BankWithdrawalId[this]; }
            set { Fields.BankWithdrawalId[this] = value; }
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

        [DisplayName("Cheque No"), QuickSearch]
        public String ChequeNo
        {
            get { return Fields.ChequeNo[this]; }
            set { Fields.ChequeNo[this] = value; }
        }

        [DisplayName("Signed By")]
        public String SignedBy
        {
            get { return Fields.SignedBy[this]; }
            set { Fields.SignedBy[this] = value; }
        }

        [DisplayName("Approved By")]
        public String ApprovedBy
        {
            get { return Fields.ApprovedBy[this]; }
            set { Fields.ApprovedBy[this] = value; }
        }

        [DisplayName("In Name Of")]
        public String InNameOf
        {
            get { return Fields.InNameOf[this]; }
            set { Fields.InNameOf[this] = value; }
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
            get { return Fields.BankWithdrawalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ChequeNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BankWithdrawalsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BankWithdrawalId;
            public DateTimeField DepoDate;
            public Int32Field AccountNumberId;
            public DecimalField Amount;
            public StringField ChequeNo;
            public StringField SignedBy;
            public StringField ApprovedBy;
            public StringField InNameOf;

            public Int32Field AccountNumberBankId;
            public StringField AccountNumberAccount;
        }
    }
}
