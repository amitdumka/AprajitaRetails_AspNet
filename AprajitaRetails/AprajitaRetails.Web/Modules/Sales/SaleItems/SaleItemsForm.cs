
namespace AprajitaRetails.Sales.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sales.SaleItems")]
    [BasedOnRow(typeof(Entities.SaleItemsRow), CheckNames = true)]
    public class SaleItemsForm
    {
        public Int32 SaleInvoiceId { get; set; }
        public Int32 ProductItemId { get; set; }
        public String BarCode { get; set; }
        public Double Qty { get; set; }
        public Int32 Units { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal BasicAmount { get; set; }
        public Decimal Discount { get; set; }
        public Decimal TaxAmount { get; set; }
        public Int32 SaleTaxTypeId { get; set; }
        public Decimal BillAmount { get; set; }
        public Int32 SalesmanId { get; set; }
    }
}