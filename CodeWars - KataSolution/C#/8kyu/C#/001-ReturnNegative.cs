using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public static class ReturnNegative
    {
        public static int MakeNegative(int number)
        {
            return number == 0 ? 0 : number < 0 ? number : -number;
        }
    }
}
