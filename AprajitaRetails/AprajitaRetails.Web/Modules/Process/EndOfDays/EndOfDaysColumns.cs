
namespace AprajitaRetails.Process.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Process.EndOfDays")]
    [BasedOnRow(typeof(Entities.EndOfDaysRow), CheckNames = true)]
    public class EndOfDaysColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EndOfDayId { get; set; }
        public DateTime EodDate { get; set; }
        public Single Shirting { get; set; }
        public Single Suiting { get; set; }
        public Int32 Uspa { get; set; }
        public Int32 FmArrow { get; set; }
        public Int32 Rwt { get; set; }
        public Int32 Access { get; set; }
        public Decimal CashInHand { get; set; }
    }
}