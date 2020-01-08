
namespace AprajitaRetails.Tally.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tally.LedgerMasters")]
    [BasedOnRow(typeof(Entities.LedgerMastersRow), CheckNames = true)]
    public class LedgerMastersForm
    {
        public Int32 PartyId { get; set; }
        public DateTime CreatingDate { get; set; }
        public Int32 LedgerType { get; set; }
    }
}