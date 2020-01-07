
namespace AprajitaRetails.Tailors.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tailors.TailorAttendances")]
    [BasedOnRow(typeof(Entities.TailorAttendancesRow), CheckNames = true)]
    public class TailorAttendancesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TailorAttendanceId { get; set; }
        public String TailoringEmployeeStaffName { get; set; }
        public DateTime AttDate { get; set; }
        [EditLink]
        public String EntryTime { get; set; }
        public Int32 Status { get; set; }
        public String Remarks { get; set; }
    }
}