
namespace AprajitaRetails.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.SuspenseAccounts")]
    [BasedOnRow(typeof(Entities.SuspenseAccountsRow), CheckNames = true)]
    public class SuspenseAccountsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SuspenseAccountId { get; set; }
        public DateTime EntryDate { get; set; }
        [EditLink]
        public String ReferanceDetails { get; set; }
        public Decimal InAmount { get; set; }
        public Decimal OutAmount { get; set; }
        public Boolean IsCleared { get; set; }
        public String ClearedDetails { get; set; }
        public String ReviewBy { get; set; }
    }
}