
namespace AprajitaRetails.Voyager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Voyager.ImportInWards")]
    [BasedOnRow(typeof(Entities.ImportInWardsRow), CheckNames = true)]
    public class ImportInWardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImportInWardId { get; set; }
        [EditLink]
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