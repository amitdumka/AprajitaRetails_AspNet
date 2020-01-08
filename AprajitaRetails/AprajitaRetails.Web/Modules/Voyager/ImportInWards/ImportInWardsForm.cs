
namespace AprajitaRetails.Voyager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Voyager.ImportInWards")]
    [BasedOnRow(typeof(Entities.ImportInWardsRow), CheckNames = true)]
    public class ImportInWardsForm
    {
        public String InWardNo { get; set; }
        public DateTime InWardDate { get; set; }
        public String InvoiceNo { get; set; }
        public DateTime InvoiceDate { get; set; }
        public String PartyName { get; set; }
        public Decimal TotalQty { get; set; }
        public Decimal TotalMrpValue { get; set; }
        public Decimal TotalCost { get; set; }
        public DateTime ImportDate { get; set; }
    }
}