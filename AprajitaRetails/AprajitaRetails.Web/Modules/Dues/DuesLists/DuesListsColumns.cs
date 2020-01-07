
namespace AprajitaRetails.Dues.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Dues.DuesLists")]
    [BasedOnRow(typeof(Entities.DuesListsRow), CheckNames = true)]
    public class DuesListsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DuesListId { get; set; }
        public Decimal Amount { get; set; }
        public Boolean IsRecovered { get; set; }
        public String DailySaleInvNo { get; set; }
        public DateTime RecoveryDate { get; set; }
        public Boolean IsPartialRecovery { get; set; }
    }
}