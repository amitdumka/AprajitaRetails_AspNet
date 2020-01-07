
namespace AprajitaRetails.CustomTailoring.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CustomTailoring.TalioringDeliveries")]
    [BasedOnRow(typeof(Entities.TalioringDeliveriesRow), CheckNames = true)]
    public class TalioringDeliveriesForm
    {
        public DateTime DeliveryDate { get; set; }
        public Int32 TalioringBookingId { get; set; }
        public String InvNo { get; set; }
        public Decimal Amount { get; set; }
        public String Remarks { get; set; }
    }
}