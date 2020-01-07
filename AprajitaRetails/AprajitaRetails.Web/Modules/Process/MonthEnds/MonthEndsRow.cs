
namespace AprajitaRetails.Process.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Process"), TableName("[dbo].[MonthEnds]")]
    [DisplayName("Month Ends"), InstanceName("Month Ends")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MonthEndsRow : Row, IIdRow
    {
        [DisplayName("Month End Id"), Identity]
        public Int32? MonthEndId
        {
            get { return Fields.MonthEndId[this]; }
            set { Fields.MonthEndId[this] = value; }
        }

        [DisplayName("Entry Date"), NotNull]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }

        [DisplayName("Month"), NotNull]
        public Int32? Month
        {
            get { return Fields.Month[this]; }
            set { Fields.Month[this] = value; }
        }

        [DisplayName("Year"), NotNull]
        public Int32? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Total Bill"), NotNull]
        public Double? TotalBill
        {
            get { return Fields.TotalBill[this]; }
            set { Fields.TotalBill[this] = value; }
        }

        [DisplayName("Total Fabric"), NotNull]
        public Double? TotalFabric
        {
            get { return Fields.TotalFabric[this]; }
            set { Fields.TotalFabric[this] = value; }
        }

        [DisplayName("Total Rmz"), Column("TotalRMZ"), NotNull]
        public Double? TotalRmz
        {
            get { return Fields.TotalRmz[this]; }
            set { Fields.TotalRmz[this] = value; }
        }

        [DisplayName("Total Access"), NotNull]
        public Double? TotalAccess
        {
            get { return Fields.TotalAccess[this]; }
            set { Fields.TotalAccess[this] = value; }
        }

        [DisplayName("Total Others"), NotNull]
        public Double? TotalOthers
        {
            get { return Fields.TotalOthers[this]; }
            set { Fields.TotalOthers[this] = value; }
        }

        [DisplayName("Total Amount Fabric"), Size(18), Scale(2), NotNull]
        public Decimal? TotalAmountFabric
        {
            get { return Fields.TotalAmountFabric[this]; }
            set { Fields.TotalAmountFabric[this] = value; }
        }

        [DisplayName("Total Amount Rmz"), Column("TotalAmountRMZ"), Size(18), Scale(2), NotNull]
        public Decimal? TotalAmountRmz
        {
            get { return Fields.TotalAmountRmz[this]; }
            set { Fields.TotalAmountRmz[this] = value; }
        }

        [DisplayName("Total Amount Access"), Size(18), Scale(2), NotNull]
        public Decimal? TotalAmountAccess
        {
            get { return Fields.TotalAmountAccess[this]; }
            set { Fields.TotalAmountAccess[this] = value; }
        }

        [DisplayName("Total Amount Others"), Size(18), Scale(2), NotNull]
        public Decimal? TotalAmountOthers
        {
            get { return Fields.TotalAmountOthers[this]; }
            set { Fields.TotalAmountOthers[this] = value; }
        }

        [DisplayName("Total Sale Income"), Size(18), Scale(2), NotNull]
        public Decimal? TotalSaleIncome
        {
            get { return Fields.TotalSaleIncome[this]; }
            set { Fields.TotalSaleIncome[this] = value; }
        }

        [DisplayName("Total Tailoring Income"), Size(18), Scale(2), NotNull]
        public Decimal? TotalTailoringIncome
        {
            get { return Fields.TotalTailoringIncome[this]; }
            set { Fields.TotalTailoringIncome[this] = value; }
        }

        [DisplayName("Total Other Income"), Size(18), Scale(2), NotNull]
        public Decimal? TotalOtherIncome
        {
            get { return Fields.TotalOtherIncome[this]; }
            set { Fields.TotalOtherIncome[this] = value; }
        }

        [DisplayName("Total Inward"), Size(18), Scale(2), NotNull]
        public Decimal? TotalInward
        {
            get { return Fields.TotalInward[this]; }
            set { Fields.TotalInward[this] = value; }
        }

        [DisplayName("Total Inward By Amit Kumar"), Size(18), Scale(2), NotNull]
        public Decimal? TotalInwardByAmitKumar
        {
            get { return Fields.TotalInwardByAmitKumar[this]; }
            set { Fields.TotalInwardByAmitKumar[this] = value; }
        }

        [DisplayName("Total Inward Others"), Size(18), Scale(2), NotNull]
        public Decimal? TotalInwardOthers
        {
            get { return Fields.TotalInwardOthers[this]; }
            set { Fields.TotalInwardOthers[this] = value; }
        }

        [DisplayName("Total Dues"), Size(18), Scale(2), NotNull]
        public Decimal? TotalDues
        {
            get { return Fields.TotalDues[this]; }
            set { Fields.TotalDues[this] = value; }
        }

        [DisplayName("Total Dues Of Month"), Size(18), Scale(2), NotNull]
        public Decimal? TotalDuesOfMonth
        {
            get { return Fields.TotalDuesOfMonth[this]; }
            set { Fields.TotalDuesOfMonth[this] = value; }
        }

        [DisplayName("Total Dues Recovered"), Size(18), Scale(2), NotNull]
        public Decimal? TotalDuesRecovered
        {
            get { return Fields.TotalDuesRecovered[this]; }
            set { Fields.TotalDuesRecovered[this] = value; }
        }

        [DisplayName("Total Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalExpenses
        {
            get { return Fields.TotalExpenses[this]; }
            set { Fields.TotalExpenses[this] = value; }
        }

        [DisplayName("Total On Book Expenes"), Size(18), Scale(2), NotNull]
        public Decimal? TotalOnBookExpenes
        {
            get { return Fields.TotalOnBookExpenes[this]; }
            set { Fields.TotalOnBookExpenes[this] = value; }
        }

        [DisplayName("Total Cash Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalCashExpenses
        {
            get { return Fields.TotalCashExpenses[this]; }
            set { Fields.TotalCashExpenses[this] = value; }
        }

        [DisplayName("Total Salary"), Size(18), Scale(2), NotNull]
        public Decimal? TotalSalary
        {
            get { return Fields.TotalSalary[this]; }
            set { Fields.TotalSalary[this] = value; }
        }

        [DisplayName("Total Tailoring Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalTailoringExpenses
        {
            get { return Fields.TotalTailoringExpenses[this]; }
            set { Fields.TotalTailoringExpenses[this] = value; }
        }

        [DisplayName("Total Trims And Other Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalTrimsAndOtherExpenses
        {
            get { return Fields.TotalTrimsAndOtherExpenses[this]; }
            set { Fields.TotalTrimsAndOtherExpenses[this] = value; }
        }

        [DisplayName("Total Home Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalHomeExpenses
        {
            get { return Fields.TotalHomeExpenses[this]; }
            set { Fields.TotalHomeExpenses[this] = value; }
        }

        [DisplayName("Total Other Home Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalOtherHomeExpenses
        {
            get { return Fields.TotalOtherHomeExpenses[this]; }
            set { Fields.TotalOtherHomeExpenses[this] = value; }
        }

        [DisplayName("Total Other Expenses"), Size(18), Scale(2), NotNull]
        public Decimal? TotalOtherExpenses
        {
            get { return Fields.TotalOtherExpenses[this]; }
            set { Fields.TotalOtherExpenses[this] = value; }
        }

        [DisplayName("Total Payments"), Size(18), Scale(2), NotNull]
        public Decimal? TotalPayments
        {
            get { return Fields.TotalPayments[this]; }
            set { Fields.TotalPayments[this] = value; }
        }

        [DisplayName("Total Recipts"), Size(18), Scale(2), NotNull]
        public Decimal? TotalRecipts
        {
            get { return Fields.TotalRecipts[this]; }
            set { Fields.TotalRecipts[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MonthEndId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MonthEndsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MonthEndId;
            public DateTimeField EntryDate;
            public Int32Field Month;
            public Int32Field Year;
            public DoubleField TotalBill;
            public DoubleField TotalFabric;
            public DoubleField TotalRmz;
            public DoubleField TotalAccess;
            public DoubleField TotalOthers;
            public DecimalField TotalAmountFabric;
            public DecimalField TotalAmountRmz;
            public DecimalField TotalAmountAccess;
            public DecimalField TotalAmountOthers;
            public DecimalField TotalSaleIncome;
            public DecimalField TotalTailoringIncome;
            public DecimalField TotalOtherIncome;
            public DecimalField TotalInward;
            public DecimalField TotalInwardByAmitKumar;
            public DecimalField TotalInwardOthers;
            public DecimalField TotalDues;
            public DecimalField TotalDuesOfMonth;
            public DecimalField TotalDuesRecovered;
            public DecimalField TotalExpenses;
            public DecimalField TotalOnBookExpenes;
            public DecimalField TotalCashExpenses;
            public DecimalField TotalSalary;
            public DecimalField TotalTailoringExpenses;
            public DecimalField TotalTrimsAndOtherExpenses;
            public DecimalField TotalHomeExpenses;
            public DecimalField TotalOtherHomeExpenses;
            public DecimalField TotalOtherExpenses;
            public DecimalField TotalPayments;
            public DecimalField TotalRecipts;
        }
    }
}
