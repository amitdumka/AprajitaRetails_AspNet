
namespace AprajitaRetails.Voyager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Voyager.ImportSaleItemWises")]
    [BasedOnRow(typeof(Entities.ImportSaleItemWisesRow), CheckNames = true)]
    public class ImportSaleItemWisesForm
    {
        public DateTime InvoiceDate { get; set; }
        public String InvoiceNo { get; set; }
        public String InvoiceType { get; set; }
        public String BrandName { get; set; }
        public String ProductName { get; set; }
        public String ItemDesc { get; set; }
        public String HsnCode { get; set; }
        public String Barcode { get; set; }
        public String StyleCode { get; set; }
        public Double Quantity { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal Discount { get; set; }
        public Decimal BasicRate { get; set; }
        public Decimal Tax { get; set; }
        public Decimal Sgst { get; set; }
        public Decimal Cgst { get; set; }
        public Decimal LineTotal { get; set; }
        public Decimal RoundOff { get; set; }
        public Decimal BillAmnt { get; set; }
        public String PaymentType { get; set; }
        public String Saleman { get; set; }
        public Boolean IsDataConsumed { get; set; }
        public DateTime ImportTime { get; set; }
    }
}