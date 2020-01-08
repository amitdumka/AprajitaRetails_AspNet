
namespace AprajitaRetails.Sales.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sales.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink]
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public Int32 Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public String City { get; set; }
        public String MobileNo { get; set; }
        public Int32 Gender { get; set; }
        public Int32 NoOfBills { get; set; }
        public Decimal TotalAmount { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}