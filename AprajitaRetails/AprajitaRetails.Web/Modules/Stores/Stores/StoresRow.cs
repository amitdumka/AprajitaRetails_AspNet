
namespace AprajitaRetails.Stores.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Stores"), TableName("[dbo].[Stores]")]
    [DisplayName("Stores"), InstanceName("Stores")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StoresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Store Id"), Column("StoreID"), Identity]
        public Int32? StoreId
        {
            get { return Fields.StoreId[this]; }
            set { Fields.StoreId[this] = value; }
        }

        [DisplayName("Store Code"), QuickSearch]
        public String StoreCode
        {
            get { return Fields.StoreCode[this]; }
            set { Fields.StoreCode[this] = value; }
        }

        [DisplayName("Store Name")]
        public String StoreName
        {
            get { return Fields.StoreName[this]; }
            set { Fields.StoreName[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City")]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Pin Code")]
        public String PinCode
        {
            get { return Fields.PinCode[this]; }
            set { Fields.PinCode[this] = value; }
        }

        [DisplayName("Phone No")]
        public String PhoneNo
        {
            get { return Fields.PhoneNo[this]; }
            set { Fields.PhoneNo[this] = value; }
        }

        [DisplayName("Store Manager Name")]
        public String StoreManagerName
        {
            get { return Fields.StoreManagerName[this]; }
            set { Fields.StoreManagerName[this] = value; }
        }

        [DisplayName("Store Manager Phone No")]
        public String StoreManagerPhoneNo
        {
            get { return Fields.StoreManagerPhoneNo[this]; }
            set { Fields.StoreManagerPhoneNo[this] = value; }
        }

        [DisplayName("Pan No")]
        public String PanNo
        {
            get { return Fields.PanNo[this]; }
            set { Fields.PanNo[this] = value; }
        }

        [DisplayName("Gstno"), Column("GSTNO")]
        public String Gstno
        {
            get { return Fields.Gstno[this]; }
            set { Fields.Gstno[this] = value; }
        }

        [DisplayName("No Of Employees"), NotNull]
        public Int32? NoOfEmployees
        {
            get { return Fields.NoOfEmployees[this]; }
            set { Fields.NoOfEmployees[this] = value; }
        }

        [DisplayName("Opening Date"), NotNull]
        public DateTime? OpeningDate
        {
            get { return Fields.OpeningDate[this]; }
            set { Fields.OpeningDate[this] = value; }
        }

        [DisplayName("Closing Date")]
        public DateTime? ClosingDate
        {
            get { return Fields.ClosingDate[this]; }
            set { Fields.ClosingDate[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Boolean? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StoreId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StoreCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StoresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StoreId;
            public StringField StoreCode;
            public StringField StoreName;
            public StringField Address;
            public StringField City;
            public StringField PinCode;
            public StringField PhoneNo;
            public StringField StoreManagerName;
            public StringField StoreManagerPhoneNo;
            public StringField PanNo;
            public StringField Gstno;
            public Int32Field NoOfEmployees;
            public DateTimeField OpeningDate;
            public DateTimeField ClosingDate;
            public BooleanField Status;
        }
    }
}
