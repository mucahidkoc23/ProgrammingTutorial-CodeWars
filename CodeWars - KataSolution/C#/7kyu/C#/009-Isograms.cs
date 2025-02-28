using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class Isograms
    {
        public static bool IsIsogram(string str)
        {
            string check = string.Concat(str.ToLower().Distinct().ToArray());

            return str.ToLower() == check;
        }

    }
}
 