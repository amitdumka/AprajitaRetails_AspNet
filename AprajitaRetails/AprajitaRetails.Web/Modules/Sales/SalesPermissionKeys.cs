using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace AprajitaRetails.Sales
{
    [Serenity.Extensibility.NestedPermissionKeys]
    [DisplayName("Sales")]
    public class PermissionKeys
    {
        [Description("[General]")]
        public const string General = "Sales:General";
        [ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Sales:Delete";
        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Sales:Modify";
        public const string View = "Sales:View";
    }
}
