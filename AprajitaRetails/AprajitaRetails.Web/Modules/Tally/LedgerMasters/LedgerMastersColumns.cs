
namespace AprajitaRetails.Tally.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tally.LedgerMasters")]
    [BasedOnRow(typeof(Entities.LedgerMastersRow), CheckNames = true)]
    public class LedgerMastersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LedgerMasterId { get; set; }
        public String PartyPartyName { get; set; }
        public DateTime CreatingDate { get; set; }
        public Int32 LedgerType { get; set; }
    }
}