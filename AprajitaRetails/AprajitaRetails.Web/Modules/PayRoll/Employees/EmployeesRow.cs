
namespace AprajitaRetails.PayRoll.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("PayRoll"), TableName("[dbo].[Employees]")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Identity]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Staff Name"), QuickSearch]
        public String StaffName
        {
            get { return Fields.StaffName[this]; }
            set { Fields.StaffName[this] = value; }
        }

        [DisplayName("Mobile No")]
        public String MobileNo
        {
            get { return Fields.MobileNo[this]; }
            set { Fields.MobileNo[this] = value; }
        }

        [DisplayName("Joining Date"), NotNull]
        public DateTime? JoiningDate
        {
            get { return Fields.JoiningDate[this]; }
            set { Fields.JoiningDate[this] = value; }
        }

        [DisplayName("Leaving Date")]
        public DateTime? LeavingDate
        {
            get { return Fields.LeavingDate[this]; }
            set { Fields.LeavingDate[this] = value; }
        }

        [DisplayName("Is Working"), NotNull]
        public Boolean? IsWorking
        {
            get { return Fields.IsWorking[this]; }
            set { Fields.IsWorking[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StaffName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeId;
            public StringField StaffName;
            public StringField MobileNo;
            public DateTimeField JoiningDate;
            public DateTimeField LeavingDate;
            public BooleanField IsWorking;
        }
    }
}
