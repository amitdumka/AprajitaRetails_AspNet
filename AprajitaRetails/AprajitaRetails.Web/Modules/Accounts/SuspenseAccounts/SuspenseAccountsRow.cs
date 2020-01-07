
namespace AprajitaRetails.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Accounts"), TableName("[dbo].[SuspenseAccounts]")]
    [DisplayName("Suspense Accounts"), InstanceName("Suspense Accounts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SuspenseAccountsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Suspense Account Id"), Identity]
        public Int32? SuspenseAccountId
        {
            get { return Fields.SuspenseAccountId[this]; }
            set { Fields.SuspenseAccountId[this] = value; }
        }

        [DisplayName("Entry Date"), NotNull]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }

        [DisplayName("Referance Details"), QuickSearch]
        public String ReferanceDetails
        {
            get { return Fields.ReferanceDetails[this]; }
            set { Fields.ReferanceDetails[this] = value; }
        }

        [DisplayName("In Amount"), Size(19), Scale(4), NotNull]
        public Decimal? InAmount
        {
            get { return Fields.InAmount[this]; }
            set { Fields.InAmount[this] = value; }
        }

        [DisplayName("Out Amount"), Size(18), Scale(2), NotNull]
        public Decimal? OutAmount
        {
            get { return Fields.OutAmount[this]; }
            set { Fields.OutAmount[this] = value; }
        }

        [DisplayName("Is Cleared"), NotNull]
        public Boolean? IsCleared
        {
            get { return Fields.IsCleared[this]; }
            set { Fields.IsCleared[this] = value; }
        }

        [DisplayName("Cleared Details")]
        public String ClearedDetails
        {
            get { return Fields.ClearedDetails[this]; }
            set { Fields.ClearedDetails[this] = value; }
        }

        [DisplayName("Review By")]
        public String ReviewBy
        {
            get { return Fields.ReviewBy[this]; }
            set { Fields.ReviewBy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SuspenseAccountId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReferanceDetails; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuspenseAccountsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SuspenseAccountId;
            public DateTimeField EntryDate;
            public StringField ReferanceDetails;
            public DecimalField InAmount;
            public DecimalField OutAmount;
            public BooleanField IsCleared;
            public StringField ClearedDetails;
            public StringField ReviewBy;
        }
    }
}
