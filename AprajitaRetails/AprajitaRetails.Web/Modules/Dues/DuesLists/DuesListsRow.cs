
namespace AprajitaRetails.Dues.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Dues"), TableName("[dbo].[DuesLists]")]
    [DisplayName("Dues Lists"), InstanceName("Dues Lists")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DuesListsRow : Row, IIdRow
    {
        [DisplayName("Dues List Id"), Identity]
        public Int32? DuesListId
        {
            get { return Fields.DuesListId[this]; }
            set { Fields.DuesListId[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(2), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Is Recovered"), NotNull]
        public Boolean? IsRecovered
        {
            get { return Fields.IsRecovered[this]; }
            set { Fields.IsRecovered[this] = value; }
        }

        [DisplayName("Daily Sale"), NotNull, ForeignKey("[dbo].[DailySales]", "DailySaleId"), LeftJoin("jDailySale"), TextualField("DailySaleInvNo")]
        public Int32? DailySaleId
        {
            get { return Fields.DailySaleId[this]; }
            set { Fields.DailySaleId[this] = value; }
        }

        [DisplayName("Recovery Date")]
        public DateTime? RecoveryDate
        {
            get { return Fields.RecoveryDate[this]; }
            set { Fields.RecoveryDate[this] = value; }
        }

        [DisplayName("Is Partial Recovery"), NotNull]
        public Boolean? IsPartialRecovery
        {
            get { return Fields.IsPartialRecovery[this]; }
            set { Fields.IsPartialRecovery[this] = value; }
        }

        [DisplayName("Daily Sale Sale Date"), Expression("jDailySale.[SaleDate]")]
        public DateTime? DailySaleSaleDate
        {
            get { return Fields.DailySaleSaleDate[this]; }
            set { Fields.DailySaleSaleDate[this] = value; }
        }

        [DisplayName("Daily Sale Inv No"), Expression("jDailySale.[InvNo]")]
        public String DailySaleInvNo
        {
            get { return Fields.DailySaleInvNo[this]; }
            set { Fields.DailySaleInvNo[this] = value; }
        }

        [DisplayName("Daily Sale Amount"), Expression("jDailySale.[Amount]")]
        public Decimal? DailySaleAmount
        {
            get { return Fields.DailySaleAmount[this]; }
            set { Fields.DailySaleAmount[this] = value; }
        }

        [DisplayName("Daily Sale Pay Mode"), Expression("jDailySale.[PayMode]")]
        public Int32? DailySalePayMode
        {
            get { return Fields.DailySalePayMode[this]; }
            set { Fields.DailySalePayMode[this] = value; }
        }

        [DisplayName("Daily Sale Cash Amount"), Expression("jDailySale.[CashAmount]")]
        public Decimal? DailySaleCashAmount
        {
            get { return Fields.DailySaleCashAmount[this]; }
            set { Fields.DailySaleCashAmount[this] = value; }
        }

        [DisplayName("Daily Sale Salesman Id"), Expression("jDailySale.[SalesmanId]")]
        public Int32? DailySaleSalesmanId
        {
            get { return Fields.DailySaleSalesmanId[this]; }
            set { Fields.DailySaleSalesmanId[this] = value; }
        }

        [DisplayName("Daily Sale Is Due"), Expression("jDailySale.[IsDue]")]
        public Boolean? DailySaleIsDue
        {
            get { return Fields.DailySaleIsDue[this]; }
            set { Fields.DailySaleIsDue[this] = value; }
        }

        [DisplayName("Daily Sale Is Manual Bill"), Expression("jDailySale.[IsManualBill]")]
        public Boolean? DailySaleIsManualBill
        {
            get { return Fields.DailySaleIsManualBill[this]; }
            set { Fields.DailySaleIsManualBill[this] = value; }
        }

        [DisplayName("Daily Sale Is Tailoring Bill"), Expression("jDailySale.[IsTailoringBill]")]
        public Boolean? DailySaleIsTailoringBill
        {
            get { return Fields.DailySaleIsTailoringBill[this]; }
            set { Fields.DailySaleIsTailoringBill[this] = value; }
        }

        [DisplayName("Daily Sale Remarks"), Expression("jDailySale.[Remarks]")]
        public String DailySaleRemarks
        {
            get { return Fields.DailySaleRemarks[this]; }
            set { Fields.DailySaleRemarks[this] = value; }
        }

        [DisplayName("Daily Sale Is Sale Return"), Expression("jDailySale.[IsSaleReturn]")]
        public Boolean? DailySaleIsSaleReturn
        {
            get { return Fields.DailySaleIsSaleReturn[this]; }
            set { Fields.DailySaleIsSaleReturn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DuesListId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DuesListsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DuesListId;
            public DecimalField Amount;
            public BooleanField IsRecovered;
            public Int32Field DailySaleId;
            public DateTimeField RecoveryDate;
            public BooleanField IsPartialRecovery;

            public DateTimeField DailySaleSaleDate;
            public StringField DailySaleInvNo;
            public DecimalField DailySaleAmount;
            public Int32Field DailySalePayMode;
            public DecimalField DailySaleCashAmount;
            public Int32Field DailySaleSalesmanId;
            public BooleanField DailySaleIsDue;
            public BooleanField DailySaleIsManualBill;
            public BooleanField DailySaleIsTailoringBill;
            public StringField DailySaleRemarks;
            public BooleanField DailySaleIsSaleReturn;
        }
    }
}
