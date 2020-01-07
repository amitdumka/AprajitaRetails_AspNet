
namespace AprajitaRetails.Tailors.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tailors.TailoringEmployees")]
    [BasedOnRow(typeof(Entities.TailoringEmployeesRow), CheckNames = true)]
    public class TailoringEmployeesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TailoringEmployeeId { get; set; }
        [EditLink]
        public String StaffName { get; set; }
        public String MobileNo { get; set; }
        public DateTime JoiningDate { get; set; }
        public DateTime LeavingDate { get; set; }
        public Boolean IsWorking { get; set; }
    }
}