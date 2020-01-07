
namespace AprajitaRetails.Process.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Process.EndOfDays")]
    [BasedOnRow(typeof(Entities.EndOfDaysRow), CheckNames = true)]
    public class EndOfDaysForm
    {
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