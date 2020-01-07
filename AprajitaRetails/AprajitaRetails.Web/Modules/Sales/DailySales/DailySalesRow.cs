
namespace AprajitaRetails.Sales.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Sales"), TableName("[dbo].[DailySales]")]
    [DisplayName("Daily Sales"), InstanceName("Daily Sales")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DailySalesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Daily Sale Id"), Identity]
        public Int32? DailySaleId
        {
            get { return Fields.DailySaleId[this]; }
            set { Fields.DailySaleId[this] = value; }
        }

        [DisplayName("Sale Date"), NotNull]
        public DateTime? SaleDate
        {
            get { return Fields.SaleDate[this]; }
            set { Fields.SaleDate[this] = value; }
        }

        [DisplayName("Inv No"), QuickSearch]
        public String InvNo
        {
            get { return Fields.InvNo[this]; }
            set { Fields.InvNo[this] = value; }
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

        [DisplayName("Cash Amount"), Size(19), Scale(4), NotNull]
        public Decimal? CashAmount
        {
            get { return Fields.CashAmount[this]; }
            set { Fields.CashAmount[this] = value; }
        }

        [DisplayName("Salesman"), NotNull, ForeignKey("[dbo].[Salesmen]", "SalesmanId"), LeftJoin("jSalesman"), TextualField("SalesmanSalesmanName")]
        public Int32? SalesmanId
        {
            get { return Fields.SalesmanId[this]; }
            set { Fields.SalesmanId[this] = value; }
        }

        [DisplayName("Is Due"), NotNull]
        public Boolean? IsDue
        {
            get { return Fields.IsDue[this]; }
            set { Fields.IsDue[this] = value; }
        }

        [DisplayName("Is Manual Bill"), NotNull]
        public Boolean? IsManualBill
        {
            get { return Fields.IsManualBill[this]; }
            set { Fields.IsManualBill[this] = value; }
        }

        [DisplayName("Is Tailoring Bill"), NotNull]
        public Boolean? IsTailoringBill
        {
            get { return Fields.IsTailoringBill[this]; }
            set { Fields.IsTailoringBill[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Is Sale Return"), NotNull]
        public Boolean? IsSaleReturn
        {
            get { return Fields.IsSaleReturn[this]; }
            set { Fields.IsSaleReturn[this] = value; }
        }

        [DisplayName("Salesman Salesman Name"), Expression("jSalesman.[SalesmanName]")]
        public String SalesmanSalesmanName
        {
            get { return Fields.SalesmanSalesmanName[this]; }
            set { Fields.SalesmanSalesmanName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DailySaleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DailySalesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DailySaleId;
            public DateTimeField SaleDate;
            public StringField InvNo;
            public DecimalField Amount;
            public Int32Field PayMode;
            public DecimalField CashAmount;
            public Int32Field SalesmanId;
            public BooleanField IsDue;
            public BooleanField IsManualBill;
            public BooleanField IsTailoringBill;
            public StringField Remarks;
            public BooleanField IsSaleReturn;

            public StringField SalesmanSalesmanName;
        }
    }
}
