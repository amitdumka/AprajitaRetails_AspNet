
namespace AprajitaRetails.PayRoll.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PayRoll.Attendances")]
    [BasedOnRow(typeof(Entities.AttendancesRow), CheckNames = true)]
    public class AttendancesForm
    {
        public Int32 EmployeeId { get; set; }
        public DateTime AttDate { get; set; }
        public String EntryTime { get; set; }
        public Int32 Status { get; set; }
        public String Remarks { get; set; }
    }
}