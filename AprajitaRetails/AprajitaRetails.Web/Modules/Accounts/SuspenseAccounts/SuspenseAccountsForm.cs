
namespace AprajitaRetails.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.SuspenseAccounts")]
    [BasedOnRow(typeof(Entities.SuspenseAccountsRow), CheckNames = true)]
    public class SuspenseAccountsForm
    {
        public DateTime EntryDate { get; set; }
        public String ReferanceDetails { get; set; }
        public Decimal InAmount { get; set; }
        public Decimal OutAmount { get; set; }
        public Boolean IsCleared { get; set; }
        public String ClearedDetails { get; set; }
        public String ReviewBy { get; set; }
    }
}