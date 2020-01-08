
namespace AprajitaRetails.Voyager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Voyager.ImportSaleRegisters")]
    [BasedOnRow(typeof(Entities.ImportSaleRegistersRow), CheckNames = true)]
    public class ImportSaleRegistersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImportSaleRegisterId { get; set; }
        [EditLink]
        public String InvoiceNo { get; set; }
        public String InvoiceType { get; set; }
        public String InvoiceDate { get; set; }
        public Double Quantity { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal Discount { get; set; }
        public Decimal BasicRate { get; set; }
        public Decimal Tax { get; set; }
        public Decimal RoundOff { get; set; }
        public Decimal BillAmnt { get; set; }
        public String PaymentType { get; set; }
        public Boolean IsConsumed { get; set; }
        public DateTime ImportTime { get; set; }
    }
}