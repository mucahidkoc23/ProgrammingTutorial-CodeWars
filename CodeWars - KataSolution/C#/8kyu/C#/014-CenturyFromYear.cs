using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class CenturyFromYear
    {
        public static decimal СenturyFromYear(decimal year)
        {
            return Math.Ceiling(year/100);
        }
    }
}
