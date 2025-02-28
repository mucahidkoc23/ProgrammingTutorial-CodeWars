using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace C_
{
    class DisemvowelTrolls
    {
        public static string Disemvowel(string str)
        {
            Regex regex = new Regex("[aeiouAEIOU]");
            return regex.Replace(str, "");
        }
    }
}
