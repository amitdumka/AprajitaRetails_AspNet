
namespace AprajitaRetails.Dues.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Dues"), TableName("[dbo].[DueRecoverds]")]
    [DisplayName("Due Recoverds"), InstanceName("Due Recoverds")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DueRecoverdsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Due Recoverd Id"), Identity]
        public Int32? DueRecoverdId
        {
            get { return Fields.DueRecoverdId[this]; }
            set { Fields.DueRecoverdId[this] = value; }
        }

        [DisplayName("Paid Date"), NotNull]
        public DateTime? PaidDate
        {
            get { return Fields.PaidDate[this]; }
            set { Fields.PaidDate[this] = value; }
        }

        [DisplayName("Dues List"), NotNull, ForeignKey("[dbo].[DuesLists]", "DuesListId"), LeftJoin("jDuesList")]
        public Int32? DuesListId
        {
            get { return Fields.DuesListId[this]; }
            set { Fields.DuesListId[this] = value; }
        }

        [DisplayName("Amount Paid"), Size(19), Scale(4), NotNull]
        public Decimal? AmountPaid
        {
            get { return Fields.AmountPaid[this]; }
            set { Fields.AmountPaid[this] = value; }
        }

        [DisplayName("Is Partial Payment"), NotNull]
        public Boolean? IsPartialPayment
        {
            get { return Fields.IsPartialPayment[this]; }
            set { Fields.IsPartialPayment[this] = value; }
        }

        [DisplayName("Modes"), NotNull]
        public Int32? Modes
        {
            get { return Fields.Modes[this]; }
            set { Fields.Modes[this] = value; }
        }

        [DisplayName("Remarks"), QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Dues List Amount"), Expression("jDuesList.[Amount]")]
        public Decimal? DuesListAmount
        {
            get { return Fields.DuesListAmount[this]; }
            set { Fields.DuesListAmount[this] = value; }
        }

        [DisplayName("Dues List Is Recovered"), Expression("jDuesList.[IsRecovered]")]
        public Boolean? DuesListIsRecovered
        {
            get { return Fields.DuesListIsRecovered[this]; }
            set { Fields.DuesListIsRecovered[this] = value; }
        }

        [DisplayName("Dues List Daily Sale Id"), Expression("jDuesList.[DailySaleId]")]
        public Int32? DuesListDailySaleId
        {
            get { return Fields.DuesListDailySaleId[this]; }
            set { Fields.DuesListDailySaleId[this] = value; }
        }

        [DisplayName("Dues List Recovery Date"), Expression("jDuesList.[RecoveryDate]")]
        public DateTime? DuesListRecoveryDate
        {
            get { return Fields.DuesListRecoveryDate[this]; }
            set { Fields.DuesListRecoveryDate[this] = value; }
        }

        [DisplayName("Dues List Is Partial Recovery"), Expression("jDuesList.[IsPartialRecovery]")]
        public Boolean? DuesListIsPartialRecovery
        {
            get { return Fields.DuesListIsPartialRecovery[this]; }
            set { Fields.DuesListIsPartialRecovery[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DueRecoverdId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DueRecoverdsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DueRecoverdId;
            public DateTimeField PaidDate;
            public Int32Field DuesListId;
            public DecimalField AmountPaid;
            public BooleanField IsPartialPayment;
            public Int32Field Modes;
            public StringField Remarks;

            public DecimalField DuesListAmount;
            public BooleanField DuesListIsRecovered;
            public Int32Field DuesListDailySaleId;
            public DateTimeField DuesListRecoveryDate;
            public BooleanField DuesListIsPartialRecovery;
        }
    }
}
