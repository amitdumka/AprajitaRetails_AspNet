
namespace AprajitaRetails.Banking.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Banking"), TableName("[dbo].[AccountNumbers]")]
    [DisplayName("Account Numbers"), InstanceName("Account Numbers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AccountNumbersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Account Number Id"), Identity]
        public Int32? AccountNumberId
        {
            get { return Fields.AccountNumberId[this]; }
            set { Fields.AccountNumberId[this] = value; }
        }

        [DisplayName("Bank"), NotNull, ForeignKey("[dbo].[Banks]", "BankId"), LeftJoin("jBank"), TextualField("BankBankName")]
        public Int32? BankId
        {
            get { return Fields.BankId[this]; }
            set { Fields.BankId[this] = value; }
        }

        [DisplayName("Account"), QuickSearch]
        public String Account
        {
            get { return Fields.Account[this]; }
            set { Fields.Account[this] = value; }
        }

        [DisplayName("Bank Bank Name"), Expression("jBank.[BankName]")]
        public String BankBankName
        {
            get { return Fields.BankBankName[this]; }
            set { Fields.BankBankName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AccountNumberId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Account; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountNumbersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AccountNumberId;
            public Int32Field BankId;
            public StringField Account;

            public StringField BankBankName;
        }
    }
}
