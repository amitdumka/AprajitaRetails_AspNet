
namespace AprajitaRetails.Process.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Process.MonthEnds")]
    [BasedOnRow(typeof(Entities.MonthEndsRow), CheckNames = true)]
    public class MonthEndsForm
    {
        public DateTime EntryDate { get; set; }
        public Int32 Month { get; set; }
        public Int32 Year { get; set; }
        public Double TotalBill { get; set; }
        public Double TotalFabric { get; set; }
        public Double TotalRmz { get; set; }
        public Double TotalAccess { get; set; }
        public Double TotalOthers { get; set; }
        public Decimal TotalAmountFabric { get; set; }
        public Decimal TotalAmountRmz { get; set; }
        public Decimal TotalAmountAccess { get; set; }
        public Decimal TotalAmountOthers { get; set; }
        public Decimal TotalSaleIncome { get; set; }
        public Decimal TotalTailoringIncome { get; set; }
        public Decimal TotalOtherIncome { get; set; }
        public Decimal TotalInward { get; set; }
        public Decimal TotalInwardByAmitKumar { get; set; }
        public Decimal TotalInwardOthers { get; set; }
        public Decimal TotalDues { get; set; }
        public Decimal TotalDuesOfMonth { get; set; }
        public Decimal TotalDuesRecovered { get; set; }
        public Decimal TotalExpenses { get; set; }
        public Decimal TotalOnBookExpenes { get; set; }
        public Decimal TotalCashExpenses { get; set; }
        public Decimal TotalSalary { get; set; }
        public Decimal TotalTailoringExpenses { get; set; }
        public Decimal TotalTrimsAndOtherExpenses { get; set; }
        public Decimal TotalHomeExpenses { get; set; }
        public Decimal TotalOtherHomeExpenses { get; set; }
        public Decimal TotalOtherExpenses { get; set; }
        public Decimal TotalPayments { get; set; }
        public Decimal TotalRecipts { get; set; }
    }
}