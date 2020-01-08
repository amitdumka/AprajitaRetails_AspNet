
namespace AprajitaRetails.Stores.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Stores.Stores")]
    [BasedOnRow(typeof(Entities.StoresRow), CheckNames = true)]
    public class StoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StoreId { get; set; }
        [EditLink]
        public String StoreCode { get; set; }
        public String StoreName { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String PinCode { get; set; }
        public String PhoneNo { get; set; }
        public String StoreManagerName { get; set; }
        public String StoreManagerPhoneNo { get; set; }
        public String PanNo { get; set; }
        public String Gstno { get; set; }
        public Int32 NoOfEmployees { get; set; }
        public DateTime OpeningDate { get; set; }
        public DateTime ClosingDate { get; set; }
        public Boolean Status { get; set; }
    }
}