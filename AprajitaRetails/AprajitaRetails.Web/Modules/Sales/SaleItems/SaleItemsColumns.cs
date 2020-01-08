
namespace AprajitaRetails.Sales.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sales.SaleItems")]
    [BasedOnRow(typeof(Entities.SaleItemsRow), CheckNames = true)]
    public class SaleItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SaleItemId { get; set; }
        public String SaleInvoiceInvoiceNo { get; set; }
        public String ProductItemBarcode { get; set; }
        [EditLink]
        public String BarCode { get; set; }
        public Double Qty { get; set; }
        public Int32 Units { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal BasicAmount { get; set; }
        public Decimal Discount { get; set; }
        public Decimal TaxAmount { get; set; }
        public String SaleTaxTypeTaxName { get; set; }
        public Decimal BillAmount { get; set; }
        public String SalesmanSalesmanName { get; set; }
    }
}