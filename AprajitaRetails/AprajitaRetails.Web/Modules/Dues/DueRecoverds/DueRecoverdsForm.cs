
namespace AprajitaRetails.Dues.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Dues.DueRecoverds")]
    [BasedOnRow(typeof(Entities.DueRecoverdsRow), CheckNames = true)]
    public class DueRecoverdsForm
    {
        public DateTime PaidDate { get; set; }
        public Int32 DuesListId { get; set; }
        public Decimal AmountPaid { get; set; }
        public Boolean IsPartialPayment { get; set; }
        public Int32 Modes { get; set; }
        public String Remarks { get; set; }
    }
}