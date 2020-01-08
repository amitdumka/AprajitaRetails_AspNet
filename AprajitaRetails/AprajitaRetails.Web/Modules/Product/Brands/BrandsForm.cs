
namespace AprajitaRetails.Product.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Product.Brands")]
    [BasedOnRow(typeof(Entities.BrandsRow), CheckNames = true)]
    public class BrandsForm
    {
        public String BrandName { get; set; }
        public String BCode { get; set; }
    }
}