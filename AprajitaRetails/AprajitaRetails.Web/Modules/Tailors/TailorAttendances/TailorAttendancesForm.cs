
namespace AprajitaRetails.Tailors.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tailors.TailorAttendances")]
    [BasedOnRow(typeof(Entities.TailorAttendancesRow), CheckNames = true)]
    public class TailorAttendancesForm
    {
        public Int32 TailoringEmployeeId { get; set; }
        public DateTime AttDate { get; set; }
        public String EntryTime { get; set; }
        public Int32 Status { get; set; }
        public String Remarks { get; set; }
    }
}