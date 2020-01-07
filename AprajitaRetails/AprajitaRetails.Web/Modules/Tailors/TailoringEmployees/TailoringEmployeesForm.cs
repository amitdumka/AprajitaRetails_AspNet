
namespace AprajitaRetails.Tailors.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tailors.TailoringEmployees")]
    [BasedOnRow(typeof(Entities.TailoringEmployeesRow), CheckNames = true)]
    public class TailoringEmployeesForm
    {
        public String StaffName { get; set; }
        public String MobileNo { get; set; }
        public DateTime JoiningDate { get; set; }
        public DateTime LeavingDate { get; set; }
        public Boolean IsWorking { get; set; }
    }
}