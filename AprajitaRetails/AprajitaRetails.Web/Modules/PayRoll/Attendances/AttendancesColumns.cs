
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.Attendances")]
    [BasedOnRow(typeof(Entities.AttendancesRow), CheckNames = true)]
    public class AttendancesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AttendanceId { get; set; }
        public String EmployeeStaffName { get; set; }
        public DateTime AttDate { get; set; }
        [EditLink]
        public String EntryTime { get; set; }
        public Int32 Status { get; set; }
        public String Remarks { get; set; }
    }
}