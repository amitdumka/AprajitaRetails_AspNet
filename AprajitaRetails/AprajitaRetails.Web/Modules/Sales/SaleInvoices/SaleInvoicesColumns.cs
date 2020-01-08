
namespace AprajitaRetails.Sales.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sales.SaleInvoices")]
    [BasedOnRow(typeof(Entities.SaleInvoicesRow), CheckNames = true)]
    public class SaleInvoicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SaleInvoiceId { get; set; }
        public Int32 CustomerId { get; set; }
        public DateTime OnDate { get; set; }
        [EditLink]
        public String InvoiceNo { get; set; }
        public Int32 TotalItems { get; set; }
        public Double TotalQty { get; set; }
        public Decimal TotalBillAmount { get; set; }
        public Decimal TotalDiscountAmount { get; set; }
        public Decimal RoundOffAmount { get; set; }
        public Decimal TotalTaxAmount { get; set; }
    }
}