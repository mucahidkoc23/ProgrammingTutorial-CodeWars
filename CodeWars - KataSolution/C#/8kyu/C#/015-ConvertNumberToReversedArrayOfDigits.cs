using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class ConvertNumberToReversedArrayOfDigits
    {
        public static long[] Digitize(long n)
        {
            return n.ToString().Reverse().Select(x => Convert.ToInt64(x.ToString())).ToArray();
                    
        }
    }
}
