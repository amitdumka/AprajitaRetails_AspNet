
namespace AprajitaRetails.Dues.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Dues.DueRecoverds")]
    [BasedOnRow(typeof(Entities.DueRecoverdsRow), CheckNames = true)]
    public class DueRecoverdsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DueRecoverdId { get; set; }
        public DateTime PaidDate { get; set; }
        public Int32 DuesListId { get; set; }
        public Decimal AmountPaid { get; set; }
        public Boolean IsPartialPayment { get; set; }
        public Int32 Modes { get; set; }
        [EditLink]
        public String Remarks { get; set; }
    }
}