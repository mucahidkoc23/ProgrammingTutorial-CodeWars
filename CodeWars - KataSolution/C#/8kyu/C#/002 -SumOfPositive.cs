using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class SumOfPositive
    {
        public static int PositiveSum(int[] arr)
        {
            return arr.Where(x => x > 0).Sum();

        }
    }
}
