using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace AprajitaRetails.Accounts
{
    [Serenity.Extensibility.NestedPermissionKeys]
    [DisplayName("Accounts")]
    public class PermissionKeys
    {
        [DisplayName("InHands")]
        public class InHands
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Accounts:InHands:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Accounts:InHands:Modify";
            public const string View = "Accounts:InHands:View";
        }
        [DisplayName("Taxes")]
        public class Tax
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Accounts:Tax:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Accounts:Tax:Modify";
            public const string View = "Accounts:Tax:View";
        }

        [Description("[General]")]
        public const string General = "Accounts:General";
    }
}
