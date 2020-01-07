
namespace AprajitaRetails.Tailors.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tailors"), TableName("[dbo].[TailoringEmployees]")]
    [DisplayName("Tailoring Employees"), InstanceName("Tailoring Employees")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TailoringEmployeesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tailoring Employee Id"), Identity]
        public Int32? TailoringEmployeeId
        {
            get { return Fields.TailoringEmployeeId[this]; }
            set { Fields.TailoringEmployeeId[this] = value; }
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
            get { return Fields.TailoringEmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StaffName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TailoringEmployeesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TailoringEmployeeId;
            public StringField StaffName;
            public StringField MobileNo;
            public DateTimeField JoiningDate;
            public DateTimeField LeavingDate;
            public BooleanField IsWorking;
        }
    }
}
