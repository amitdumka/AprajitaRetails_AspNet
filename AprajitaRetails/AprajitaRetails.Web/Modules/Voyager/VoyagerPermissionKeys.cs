using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace AprajitaRetails.Voyager
{
    [Serenity.Extensibility.NestedPermissionKeys]
    [DisplayName("Voyager")]
    public class PermissionKeys
    {
        [DisplayName("Imports")]
        public class Import
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Voyager:Imports:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Voyager:Imports:Modify";
            
            public const string View = "Voyager:Imports:View";
        }
        

        [Description("General")]
        public const string General = "Voyager:General";
        
        [ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Voyager:Delete";
        
        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Voyager:Modify";
        
        public const string View = "Voyager:View";
    }
}
