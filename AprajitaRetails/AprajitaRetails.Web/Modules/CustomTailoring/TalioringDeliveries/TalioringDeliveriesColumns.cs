
namespace AprajitaRetails.CustomTailoring.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CustomTailoring.TalioringDeliveries")]
    [BasedOnRow(typeof(Entities.TalioringDeliveriesRow), CheckNames = true)]
    public class TalioringDeliveriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TalioringDeliveryId { get; set; }
        public DateTime DeliveryDate { get; set; }
        public String TalioringBookingCustName { get; set; }
        [EditLink]
        public String InvNo { get; set; }
        public Decimal Amount { get; set; }
        public String Remarks { get; set; }
    }
}