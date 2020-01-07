
namespace AprajitaRetails.Tailors.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Tailors"), TableName("[dbo].[TailorAttendances]")]
    [DisplayName("Tailor Attendances"), InstanceName("Tailor Attendances")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TailorAttendancesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tailor Attendance Id"), Identity]
        public Int32? TailorAttendanceId
        {
            get { return Fields.TailorAttendanceId[this]; }
            set { Fields.TailorAttendanceId[this] = value; }
        }

        [DisplayName("Tailoring Employee"), NotNull, ForeignKey("[dbo].[TailoringEmployees]", "TailoringEmployeeId"), LeftJoin("jTailoringEmployee"), TextualField("TailoringEmployeeStaffName")]
        public Int32? TailoringEmployeeId
        {
            get { return Fields.TailoringEmployeeId[this]; }
            set { Fields.TailoringEmployeeId[this] = value; }
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

        [DisplayName("Tailoring Employee Staff Name"), Expression("jTailoringEmployee.[StaffName]")]
        public String TailoringEmployeeStaffName
        {
            get { return Fields.TailoringEmployeeStaffName[this]; }
            set { Fields.TailoringEmployeeStaffName[this] = value; }
        }

        [DisplayName("Tailoring Employee Mobile No"), Expression("jTailoringEmployee.[MobileNo]")]
        public String TailoringEmployeeMobileNo
        {
            get { return Fields.TailoringEmployeeMobileNo[this]; }
            set { Fields.TailoringEmployeeMobileNo[this] = value; }
        }

        [DisplayName("Tailoring Employee Joining Date"), Expression("jTailoringEmployee.[JoiningDate]")]
        public DateTime? TailoringEmployeeJoiningDate
        {
            get { return Fields.TailoringEmployeeJoiningDate[this]; }
            set { Fields.TailoringEmployeeJoiningDate[this] = value; }
        }

        [DisplayName("Tailoring Employee Leaving Date"), Expression("jTailoringEmployee.[LeavingDate]")]
        public DateTime? TailoringEmployeeLeavingDate
        {
            get { return Fields.TailoringEmployeeLeavingDate[this]; }
            set { Fields.TailoringEmployeeLeavingDate[this] = value; }
        }

        [DisplayName("Tailoring Employee Is Working"), Expression("jTailoringEmployee.[IsWorking]")]
        public Boolean? TailoringEmployeeIsWorking
        {
            get { return Fields.TailoringEmployeeIsWorking[this]; }
            set { Fields.TailoringEmployeeIsWorking[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TailorAttendanceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntryTime; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TailorAttendancesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TailorAttendanceId;
            public Int32Field TailoringEmployeeId;
            public DateTimeField AttDate;
            public StringField EntryTime;
            public Int32Field Status;
            public StringField Remarks;

            public StringField TailoringEmployeeStaffName;
            public StringField TailoringEmployeeMobileNo;
            public DateTimeField TailoringEmployeeJoiningDate;
            public DateTimeField TailoringEmployeeLeavingDate;
            public BooleanField TailoringEmployeeIsWorking;
        }
    }
}
