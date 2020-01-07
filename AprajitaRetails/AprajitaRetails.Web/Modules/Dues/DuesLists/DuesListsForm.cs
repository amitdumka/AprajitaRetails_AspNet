
namespace AprajitaRetails.Dues.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Dues.DuesLists")]
    [BasedOnRow(typeof(Entities.DuesListsRow), CheckNames = true)]
    public class DuesListsForm
    {
        public Decimal Amount { get; set; }
        public Boolean IsRecovered { get; set; }
        public Int32 DailySaleId { get; set; }
        public DateTime RecoveryDate { get; set; }
        public Boolean IsPartialRecovery { get; set; }
    }
}