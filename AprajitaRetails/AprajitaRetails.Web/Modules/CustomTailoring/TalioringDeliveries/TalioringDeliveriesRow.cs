
namespace AprajitaRetails.CustomTailoring.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("CustomTailoring"), TableName("[dbo].[TalioringDeliveries]")]
    [DisplayName("Talioring Deliveries"), InstanceName("Talioring Deliveries")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TalioringDeliveriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Talioring Delivery Id"), Identity]
        public Int32? TalioringDeliveryId
        {
            get { return Fields.TalioringDeliveryId[this]; }
            set { Fields.TalioringDeliveryId[this] = value; }
        }

        [DisplayName("Delivery Date"), NotNull]
        public DateTime? DeliveryDate
        {
            get { return Fields.DeliveryDate[this]; }
            set { Fields.DeliveryDate[this] = value; }
        }

        [DisplayName("Talioring Booking"), NotNull, ForeignKey("[dbo].[TalioringBookings]", "TalioringBookingId"), LeftJoin("jTalioringBooking"), TextualField("TalioringBookingCustName")]
        public Int32? TalioringBookingId
        {
            get { return Fields.TalioringBookingId[this]; }
            set { Fields.TalioringBookingId[this] = value; }
        }

        [DisplayName("Inv No"), QuickSearch]
        public String InvNo
        {
            get { return Fields.InvNo[this]; }
            set { Fields.InvNo[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Talioring Booking Booking Date"), Expression("jTalioringBooking.[BookingDate]")]
        public DateTime? TalioringBookingBookingDate
        {
            get { return Fields.TalioringBookingBookingDate[this]; }
            set { Fields.TalioringBookingBookingDate[this] = value; }
        }

        [DisplayName("Talioring Booking Cust Name"), Expression("jTalioringBooking.[CustName]")]
        public String TalioringBookingCustName
        {
            get { return Fields.TalioringBookingCustName[this]; }
            set { Fields.TalioringBookingCustName[this] = value; }
        }

        [DisplayName("Talioring Booking Delivery Date"), Expression("jTalioringBooking.[DeliveryDate]")]
        public DateTime? TalioringBookingDeliveryDate
        {
            get { return Fields.TalioringBookingDeliveryDate[this]; }
            set { Fields.TalioringBookingDeliveryDate[this] = value; }
        }

        [DisplayName("Talioring Booking Try Date"), Expression("jTalioringBooking.[TryDate]")]
        public DateTime? TalioringBookingTryDate
        {
            get { return Fields.TalioringBookingTryDate[this]; }
            set { Fields.TalioringBookingTryDate[this] = value; }
        }

        [DisplayName("Talioring Booking Booking Slip No"), Expression("jTalioringBooking.[BookingSlipNo]")]
        public String TalioringBookingBookingSlipNo
        {
            get { return Fields.TalioringBookingBookingSlipNo[this]; }
            set { Fields.TalioringBookingBookingSlipNo[this] = value; }
        }

        [DisplayName("Talioring Booking Total Amount"), Expression("jTalioringBooking.[TotalAmount]")]
        public Decimal? TalioringBookingTotalAmount
        {
            get { return Fields.TalioringBookingTotalAmount[this]; }
            set { Fields.TalioringBookingTotalAmount[this] = value; }
        }

        [DisplayName("Talioring Booking Total Qty"), Expression("jTalioringBooking.[TotalQty]")]
        public Int32? TalioringBookingTotalQty
        {
            get { return Fields.TalioringBookingTotalQty[this]; }
            set { Fields.TalioringBookingTotalQty[this] = value; }
        }

        [DisplayName("Talioring Booking Shirt Qty"), Expression("jTalioringBooking.[ShirtQty]")]
        public Int32? TalioringBookingShirtQty
        {
            get { return Fields.TalioringBookingShirtQty[this]; }
            set { Fields.TalioringBookingShirtQty[this] = value; }
        }

        [DisplayName("Talioring Booking Shirt Price"), Expression("jTalioringBooking.[ShirtPrice]")]
        public Decimal? TalioringBookingShirtPrice
        {
            get { return Fields.TalioringBookingShirtPrice[this]; }
            set { Fields.TalioringBookingShirtPrice[this] = value; }
        }

        [DisplayName("Talioring Booking Pant Qty"), Expression("jTalioringBooking.[PantQty]")]
        public Int32? TalioringBookingPantQty
        {
            get { return Fields.TalioringBookingPantQty[this]; }
            set { Fields.TalioringBookingPantQty[this] = value; }
        }

        [DisplayName("Talioring Booking Pant Price"), Expression("jTalioringBooking.[PantPrice]")]
        public Decimal? TalioringBookingPantPrice
        {
            get { return Fields.TalioringBookingPantPrice[this]; }
            set { Fields.TalioringBookingPantPrice[this] = value; }
        }

        [DisplayName("Talioring Booking Coat Qty"), Expression("jTalioringBooking.[CoatQty]")]
        public Int32? TalioringBookingCoatQty
        {
            get { return Fields.TalioringBookingCoatQty[this]; }
            set { Fields.TalioringBookingCoatQty[this] = value; }
        }

        [DisplayName("Talioring Booking Coat Price"), Expression("jTalioringBooking.[CoatPrice]")]
        public Decimal? TalioringBookingCoatPrice
        {
            get { return Fields.TalioringBookingCoatPrice[this]; }
            set { Fields.TalioringBookingCoatPrice[this] = value; }
        }

        [DisplayName("Talioring Booking Kurta Qty"), Expression("jTalioringBooking.[KurtaQty]")]
        public Int32? TalioringBookingKurtaQty
        {
            get { return Fields.TalioringBookingKurtaQty[this]; }
            set { Fields.TalioringBookingKurtaQty[this] = value; }
        }

        [DisplayName("Talioring Booking Kurta Price"), Expression("jTalioringBooking.[KurtaPrice]")]
        public Decimal? TalioringBookingKurtaPrice
        {
            get { return Fields.TalioringBookingKurtaPrice[this]; }
            set { Fields.TalioringBookingKurtaPrice[this] = value; }
        }

        [DisplayName("Talioring Booking Bundi Qty"), Expression("jTalioringBooking.[BundiQty]")]
        public Int32? TalioringBookingBundiQty
        {
            get { return Fields.TalioringBookingBundiQty[this]; }
            set { Fields.TalioringBookingBundiQty[this] = value; }
        }

        [DisplayName("Talioring Booking Bundi Price"), Expression("jTalioringBooking.[BundiPrice]")]
        public Decimal? TalioringBookingBundiPrice
        {
            get { return Fields.TalioringBookingBundiPrice[this]; }
            set { Fields.TalioringBookingBundiPrice[this] = value; }
        }

        [DisplayName("Talioring Booking Others"), Expression("jTalioringBooking.[Others]")]
        public Int32? TalioringBookingOthers
        {
            get { return Fields.TalioringBookingOthers[this]; }
            set { Fields.TalioringBookingOthers[this] = value; }
        }

        [DisplayName("Talioring Booking Others Price"), Expression("jTalioringBooking.[OthersPrice]")]
        public Decimal? TalioringBookingOthersPrice
        {
            get { return Fields.TalioringBookingOthersPrice[this]; }
            set { Fields.TalioringBookingOthersPrice[this] = value; }
        }

        [DisplayName("Talioring Booking Is Delivered"), Expression("jTalioringBooking.[IsDelivered]")]
        public Boolean? TalioringBookingIsDelivered
        {
            get { return Fields.TalioringBookingIsDelivered[this]; }
            set { Fields.TalioringBookingIsDelivered[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TalioringDeliveryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TalioringDeliveriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TalioringDeliveryId;
            public DateTimeField DeliveryDate;
            public Int32Field TalioringBookingId;
            public StringField InvNo;
            public DecimalField Amount;
            public StringField Remarks;

            public DateTimeField TalioringBookingBookingDate;
            public StringField TalioringBookingCustName;
            public DateTimeField TalioringBookingDeliveryDate;
            public DateTimeField TalioringBookingTryDate;
            public StringField TalioringBookingBookingSlipNo;
            public DecimalField TalioringBookingTotalAmount;
            public Int32Field TalioringBookingTotalQty;
            public Int32Field TalioringBookingShirtQty;
            public DecimalField TalioringBookingShirtPrice;
            public Int32Field TalioringBookingPantQty;
            public DecimalField TalioringBookingPantPrice;
            public Int32Field TalioringBookingCoatQty;
            public DecimalField TalioringBookingCoatPrice;
            public Int32Field TalioringBookingKurtaQty;
            public DecimalField TalioringBookingKurtaPrice;
            public Int32Field TalioringBookingBundiQty;
            public DecimalField TalioringBookingBundiPrice;
            public Int32Field TalioringBookingOthers;
            public DecimalField TalioringBookingOthersPrice;
            public BooleanField TalioringBookingIsDelivered;
        }
    }
}
