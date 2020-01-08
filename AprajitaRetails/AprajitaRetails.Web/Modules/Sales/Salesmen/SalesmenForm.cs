
namespace AprajitaRetails.Sales.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sales.Salesmen")]
    [BasedOnRow(typeof(Entities.SalesmenRow), CheckNames = true)]
    public class SalesmenForm
    {
        public String SalesmanName { get; set; }
    }
}