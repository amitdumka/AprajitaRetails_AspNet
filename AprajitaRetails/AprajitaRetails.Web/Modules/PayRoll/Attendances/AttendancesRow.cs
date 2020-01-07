
namespace AprajitaRetails.PayRoll.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("PayRoll"), TableName("[dbo].[Attendances]")]
    [DisplayName("Attendances"), InstanceName("Attendances")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AttendancesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Attendance Id"), Identity]
        public Int32? AttendanceId
        {
            get { return Fields.AttendanceId[this]; }
            set { Fields.AttendanceId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeStaffName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Att Date"), NotNull]
        public DateTime? AttDate
        {
            get { return Fields.AttDate[this]; }
            set { Fields.AttDate[this] = value; }
        }

        [DisplayName("Entry Time"), QuickSearch]
        public String EntryTime
        {
            get { return Fields.EntryTime[this]; }
            set { Fields.EntryTime[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Employee Staff Name"), Expression("jEmployee.[StaffName]")]
        public String EmployeeStaffName
        {
            get { return Fields.EmployeeStaffName[this]; }
            set { Fields.EmployeeStaffName[this] = value; }
        }

        [DisplayName("Employee Mobile No"), Expression("jEmployee.[MobileNo]")]
        public String EmployeeMobileNo
        {
            get { return Fields.EmployeeMobileNo[this]; }
            set { Fields.EmployeeMobileNo[this] = value; }
        }

        [DisplayName("Employee Joining Date"), Expression("jEmployee.[JoiningDate]")]
        public DateTime? EmployeeJoiningDate
        {
            get { return Fields.EmployeeJoiningDate[this]; }
            set { Fields.EmployeeJoiningDate[this] = value; }
        }

        [DisplayName("Employee Leaving Date"), Expression("jEmployee.[LeavingDate]")]
        public DateTime? EmployeeLeavingDate
        {
            get { return Fields.EmployeeLeavingDate[this]; }
            set { Fields.EmployeeLeavingDate[this] = value; }
        }

        [DisplayName("Employee Is Working"), Expression("jEmployee.[IsWorking]")]
        public Boolean? EmployeeIsWorking
        {
            get { return Fields.EmployeeIsWorking[this]; }
            set { Fields.EmployeeIsWorking[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AttendanceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntryTime; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AttendancesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AttendanceId;
            public Int32Field EmployeeId;
            public DateTimeField AttDate;
            public StringField EntryTime;
            public Int32Field Status;
            public StringField Remarks;

            public StringField EmployeeStaffName;
            public StringField EmployeeMobileNo;
            public DateTimeField EmployeeJoiningDate;
            public DateTimeField EmployeeLeavingDate;
            public BooleanField EmployeeIsWorking;
        }
    }
}
