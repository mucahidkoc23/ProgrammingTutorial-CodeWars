using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class SquareEveryDigit
    {
        public static int SquareDigits(int n)
        {
            int[] total = n.ToString().Select(x => Convert.ToInt32(x.ToString())).ToArray();
            int[] square = total.Select(x => x * x).ToArray();

            return Convert.ToInt32(string.Join("", square));
        }
    }
}
