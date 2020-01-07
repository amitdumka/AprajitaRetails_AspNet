
namespace AprajitaRetails.Sales.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sales.DailySales")]
    [BasedOnRow(typeof(Entities.DailySalesRow), CheckNames = true)]
    public class DailySalesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DailySaleId { get; set; }
        public DateTime SaleDate { get; set; }
        [EditLink]
        public String InvNo { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public Decimal CashAmount { get; set; }
        public String SalesmanSalesmanName { get; set; }
        public Boolean IsDue { get; set; }
        public Boolean IsManualBill { get; set; }
        public Boolean IsTailoringBill { get; set; }
        public String Remarks { get; set; }
        public Boolean IsSaleReturn { get; set; }
    }
}